import type {
  FeedbackAnalysisRequest,
  FeedbackAnalysisResult,
} from "../types/feedback.types";

const API_URL =
"/api/analyze-feedback";

export async function analyzeFeedback(
  data: FeedbackAnalysisRequest
): Promise<FeedbackAnalysisResult> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();

    console.error("Backend Error:", error);

    throw new Error(
      error.detail ||
      error.message ||
      "Failed to analyze feedback."
    );
  }

  const result = await response.json();

  return result.analysis as FeedbackAnalysisResult;
}