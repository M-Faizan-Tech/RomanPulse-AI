import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { analyzeFeedback } from "../services/feedbackService";

import { useFeedbackStore } from "@/store/feedbackStore";

export function useFeedback() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    setAnalysis,
    addToHistory,
  } = useFeedbackStore();
  async function analyze(text?: string) {
    try {
      setLoading(true);

      let comments: string[] = [];

      if (text) {
        comments = text
          .split("\n")
          .map((comment) => comment.trim())
          .filter((comment) => comment.length > 0);
      }

      if (comments.length === 0) {
        setAnalysis(null);
        return;
      }

      const response = await analyzeFeedback({
        comments,
      });

      setAnalysis(response);

      // ✅ Save into History
      addToHistory(response);

      // ✅ Automatically open Dashboard
      navigate("/dashboard");

    } catch (error) {
      console.error("Feedback analysis failed:", error);
      setAnalysis(null);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return {
    analyze,
    loading,
  };
}