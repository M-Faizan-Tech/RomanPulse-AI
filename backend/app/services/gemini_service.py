import logging
import time

from google import genai
from google.genai.errors import APIError, ServerError

from app.core.config import settings

client = genai.Client(
    api_key=settings.GEMINI_API_KEY
)

MAX_RETRIES = 3


def analyze_with_gemini(comments: list[str]) -> str:
    joined_comments = "\n".join(
        f"{index + 1}. {comment.strip()}"
        for index, comment in enumerate(comments)
        if comment.strip()
    )

    prompt = f"""
You are RomanPulse AI.

You analyze Roman Urdu customer feedback for Pakistani businesses.

Customer Comments:

{joined_comments}

Return ONLY valid JSON.

Required JSON format:

{{
  "overallSummary":"",
  "summaryPoints":[
    "",
    "",
    ""
  ],
  "sentiment":"",
  "sentimentBreakdown":{{
    "positive":0,
    "negative":0,
    "neutral":0
  }},
  "emotion":"",
  "complaintAnalysis":[
    {{
      "category":"",
      "percentage":0
    }}
  ],
  "urgency":"",
  "shortSuggestedReply":"",
  "priorityRecommendations":[
    {{
      "priority":"",
      "action":""
    }}
  ],
  "brandHealthScore":0
}}

Rules:

- Understand Roman Urdu naturally.
- Analyze every comment.
- Sentiment percentages must total exactly 100.
- Complaint percentages must total exactly 100.
- Only include real complaint categories.
- summaryPoints maximum 5 points.
- Suggested reply maximum 3 short sentences.
- Recommendations must be priority based.
- Brand health score between 0 and 100.
- Do not return markdown.
- Do not wrap JSON inside ``` blocks.
- Return ONLY valid JSON.
"""

    last_exception = None

    for attempt in range(MAX_RETRIES):
        try:
            response = client.models.generate_content (            
                model="gemini-2.5-flash",
                contents=prompt,
            )

            if not response.text:
                raise Exception("Gemini returned an empty response.")

            return response.text

        except ServerError as e:
            last_exception = e

            logging.warning(
                f"Gemini Server Error (Attempt {attempt + 1}/{MAX_RETRIES}): {e}"
            )

            if attempt < MAX_RETRIES - 1:
                wait_time = 2 ** attempt
                logging.info(f"Retrying in {wait_time} seconds...")
                time.sleep(wait_time)
            else:
                raise Exception(
                    "Gemini servers are temporarily busy. Please try again in a few seconds."
                )

        except APIError as e:
            logging.error(f"Gemini API Error: {e}")
            raise Exception(
                "Unable to communicate with Gemini API."
            )

        except Exception as e:
            logging.exception(e)
            raise Exception(
                "Unexpected error while analyzing feedback."
            )

    raise Exception(str(last_exception))