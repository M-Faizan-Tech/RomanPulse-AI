import { create } from "zustand";

import type {
  FeedbackAnalysisResult,
} from "@/features/feedback/types/feedback.types";

export type HistoryItem = {
  id: string;
  createdAt: string;
  analysis: FeedbackAnalysisResult;
};

type FeedbackStore = {
  analysis: FeedbackAnalysisResult | null;
  history: HistoryItem[];

  setAnalysis: (
    analysis: FeedbackAnalysisResult | null
  ) => void;

  addToHistory: (
    analysis: FeedbackAnalysisResult
  ) => void;

  loadHistoryAnalysis: (
    analysis: FeedbackAnalysisResult
  ) => void;

  removeHistory: (
    id: string
  ) => void;

  clearHistory: () => void;

  clearAnalysis: () => void;
};

export const useFeedbackStore =
create<FeedbackStore>((set) => ({

  analysis: null,

  history: [],

  setAnalysis: (analysis) =>
    set({
      analysis,
    }),

  addToHistory: (analysis) =>
    set((state) => ({
      history: [
        {
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
          analysis,
        },
        ...state.history,
      ],
    })),

  loadHistoryAnalysis: (analysis) =>
    set({
      analysis,
    }),

  removeHistory: (id) =>
    set((state) => ({
      history: state.history.filter(
        (item) => item.id !== id
      ),
    })),

  clearAnalysis: () =>
    set({
      analysis: null,
    }),

  clearHistory: () =>
    set({
      history: [],
    }),

}));