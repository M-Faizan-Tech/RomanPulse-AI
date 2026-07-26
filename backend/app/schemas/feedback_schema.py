from pydantic import BaseModel, Field


class FeedbackRequest(BaseModel):
    comments: list[str] = Field(
        min_length=1,
        description="List of customer comments"
    )