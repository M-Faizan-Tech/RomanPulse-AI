import {
  createContext,
  useContext,
  useState,
} from "react";

import type {
  ReactNode,
} from "react";

import type {
  FeedbackAnalysisResult,
} from "../types/feedback.types";

type FeedbackContextType = {
  analysis: FeedbackAnalysisResult | null;
  setAnalysis: (value: FeedbackAnalysisResult | null) => void;
};

const FeedbackContext =
  createContext<FeedbackContextType | undefined>(undefined);

export function FeedbackProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [analysis, setAnalysis] =
    useState<FeedbackAnalysisResult | null>(null);

  return (
    <FeedbackContext.Provider
      value={{
        analysis,
        setAnalysis,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export function useFeedbackContext() {
  const context = useContext(FeedbackContext);

  if (!context) {
    throw new Error(
      "useFeedbackContext must be used inside FeedbackProvider"
    );
  }

  return context;
}