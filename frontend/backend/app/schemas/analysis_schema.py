from pydantic import BaseModel


class SentimentBreakdown(BaseModel):
    positive: int
    negative: int
    neutral: int



class ComplaintAnalysis(BaseModel):
    category: str
    percentage: float



class PriorityRecommendation(BaseModel):
    priority: str
    action: str



class AnalysisResponse(BaseModel):

    overallSummary: str

    summaryPoints: list[str]

    sentiment: str

    sentimentBreakdown: SentimentBreakdown

    emotion: str

    complaintAnalysis: list[ComplaintAnalysis]

    urgency: str

    shortSuggestedReply: str

    priorityRecommendations: list[PriorityRecommendation]

    brandHealthScore: int