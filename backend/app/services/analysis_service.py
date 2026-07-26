import json

from app.schemas.analysis_schema import AnalysisResponse
from app.services.gemini_service import analyze_with_gemini


def _clean_json_response(text: str) -> str:
    """
    Removes markdown code fences and surrounding whitespace.
    """

    cleaned = text.strip()

    if cleaned.startswith("```json"):
        cleaned = cleaned[7:]

    elif cleaned.startswith("```"):
        cleaned = cleaned[3:]

    if cleaned.endswith("```"):
        cleaned = cleaned[:-3]

    return cleaned.strip()


def analyze_comments(comments: list[str]) -> dict:
    total_comments = len(comments)

    gemini_response = analyze_with_gemini(comments)

    cleaned_response = _clean_json_response(gemini_response)

    try:
        raw_analysis = json.loads(cleaned_response)

    except json.JSONDecodeError as e:
        raise Exception(
            f"Gemini returned invalid JSON. {str(e)}"
        )

    try:
        validated_analysis = AnalysisResponse(
            **raw_analysis
        )

    except Exception as e:
        raise Exception(
            f"Gemini response validation failed. {str(e)}"
        )

    return {
        "success": True,
        "message": "Feedback analyzed successfully.",
        "totalComments": total_comments,
        "analysis": validated_analysis.model_dump(),
    }