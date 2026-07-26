from fastapi import APIRouter, HTTPException

from app.schemas.feedback_schema import FeedbackRequest
from app.services.analysis_service import analyze_comments

router = APIRouter(
    prefix="/api",
    tags=["Feedback"],
)


@router.post("/analyze-feedback")
async def analyze_feedback(request: FeedbackRequest):
    try:
        response = analyze_comments(
            request.comments
        )

        return response

    except Exception as e:
        raise HTTPException(
            status_code=503,
            detail=str(e)
        )