export interface SentimentBreakdown {

  positive:number;

  negative:number;

  neutral:number;

}



export interface ComplaintAnalysis {

  category:string;

  percentage:number;

}



export interface PriorityRecommendation {

  priority:string;

  action:string;

}



export interface FeedbackAnalysisResult {


  overallSummary:string;


  summaryPoints:string[];


  sentiment:string;


  sentimentBreakdown:SentimentBreakdown;


  emotion:string;


  complaintAnalysis:ComplaintAnalysis[];


  urgency:string;


  shortSuggestedReply:string;


  priorityRecommendations:PriorityRecommendation[];


  brandHealthScore:number;


}

export interface FeedbackAnalysisRequest {

  comments:string[];

}