import os
import json
import logging
from google import genai
from http.server import BaseHTTPRequestHandler


client = genai.Client(
    api_key=os.environ.get("GEMINI_API_KEY")
)


class handler(BaseHTTPRequestHandler):

    def do_POST(self):

        try:

            content_length = int(
                self.headers.get("Content-Length")
            )

            body = self.rfile.read(
                content_length
            )

            data = json.loads(
                body.decode("utf-8")
            )

            comments = data.get(
                "comments",
                []
            )


            joined_comments = "\n".join(
                f"{i+1}. {comment.strip()}"
                for i, comment in enumerate(comments)
                if comment.strip()
            )


            prompt = f"""
You are RomanPulse AI.

Analyze Roman Urdu customer feedback for Pakistani businesses.

Customer Comments:

{joined_comments}

Return ONLY valid JSON.

Required format:

{{
"overallSummary":"",
"summaryPoints":[""],
"sentiment":"",
"sentimentBreakdown":{{
"positive":0,
"negative":0,
"neutral":0
}},
"emotion":"",
"complaintAnalysis":[],
"urgency":"",
"shortSuggestedReply":"",
"priorityRecommendations":[],
"brandHealthScore":0
}}

Rules:

- Understand Roman Urdu naturally.
- Sentiment percentages total 100.
- Brand health score 0-100.
- No markdown.
- Only JSON.
"""


            response = client.models.generate_content(
                model="gemini-2.5-flash",
                contents=prompt
            )


            result = json.loads(
                response.text
            )


            self.send_response(200)

            self.send_header(
                "Content-Type",
                "application/json"
            )

            self.end_headers()


            self.wfile.write(
                json.dumps(result).encode()
            )


        except Exception as e:

            logging.exception(e)

            self.send_response(500)

            self.send_header(
                "Content-Type",
                "application/json"
            )

            self.end_headers()


            self.wfile.write(
                json.dumps(
                    {
                        "error": str(e)
                    }
                ).encode()
            )