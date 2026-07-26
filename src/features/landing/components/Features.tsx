import {
  Brain,
  MessageSquareText,
  BarChart3,
  Sparkles,
} from "lucide-react";

import PageContainer from "@/components/layout/PageContainer";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Brain,
    title: "AI Sentiment Analysis",
    description:
      "Understand customer emotions using Gemini AI with Roman Urdu support.",
  },
  {
    icon: MessageSquareText,
    title: "Smart Reply Suggestions",
    description:
      "Generate professional responses to customer feedback in seconds.",
  },
  {
    icon: BarChart3,
    title: "Business Insights",
    description:
      "Visualize trends, complaints, and customer satisfaction with dashboards.",
  },
  {
    icon: Sparkles,
    title: "Roman Urdu Intelligence",
    description:
      "Built specifically to understand how Pakistani customers communicate.",
  },
];

export default function Features() {
  return (
    <section className="py-28">
      <PageContainer>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-violet-400">
            Features
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Everything You Need to Understand Customer Feedback
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Powerful AI tools designed for Pakistani businesses to transform
            customer comments into actionable insights.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
export { default as CTA } from "./CTA";