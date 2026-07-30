import os
import json
import logging
from google import genai
from http.server import BaseHTTPRequestHandler


def _clean_json_response(text: str) -> str:
    cleaned = text.strip()

    if cleaned.startswith("```json"):
        cleaned = cleaned[7:]
    elif cleaned.startswith("```"):
        cleaned = cleaned[3:]

    if cleaned.endswith("```"):
        cleaned = cleaned[:-3]

    return cleaned.strip()


def _get_client():
    api_key = os.environ.get("GEMINI_API_KEY")

    if not api_key:
        raise ValueError(
            "GEMINI_API_KEY environment variable is not set."
        )

    return genai.Client(api_key=api_key)


class handler(BaseHTTPRequestHandler):

    def _send_cors_headers(self):
        self.send_header(
            "Access-Control-Allow-Origin",
            "*"
        )
        self.send_header(
            "Access-Control-Allow-Methods",
            "POST, OPTIONS"
        )
        self.send_header(
            "Access-Control-Allow-Headers",
            "Content-Type"
        )

    def _send_json(self, status: int, payload: dict):
        self.send_response(status)
        self.send_header(
            "Content-Type",
            "application/json"
        )
        self._send_cors_headers()
        self.end_headers()
        self.wfile.write(
            json.dumps(payload).encode("utf-8")
        )

    def do_OPTIONS(self):
        self.send_response(204)
        self._send_cors_headers()
        self.end_headers()

    def do_POST(self):
        try:
            content_length = int(
                self.headers.get("Content-Length", 0)
            )

            body = self.rfile.read(content_length)

            data = json.loads(body.decode("utf-8"))

            comments = data.get("comments", [])

            if not comments:
                self._send_json(
                    400,
                    {
                        "error": "No comments provided.",
                        "detail": "No comments provided.",
                    },
                )
                return

            joined_comments = "\n".join(
                f"{i + 1}. {comment.strip()}"
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

            client = _get_client()

            response = client.models.generate_content(
                model="gemini-2.5-flash",
                contents=prompt,
            )

            if not response.text:
                raise ValueError(
                    "Gemini returned an empty response."
                )

            analysis = json.loads(
                _clean_json_response(response.text)
            )

            self._send_json(
                200,
                {
                    "success": True,
                    "message": "Feedback analyzed successfully.",
                    "totalComments": len(comments),
                    "analysis": analysis,
                },
            )

        except Exception as e:
            logging.exception(e)

            self._send_json(
                500,
                {
                    "error": str(e),
                    "detail": str(e),
                },
            )
