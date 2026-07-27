import { Upload, BrainCircuit, BarChart3 } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";

const steps = [
  {
    icon: Upload,
    title: "1. Upload Feedback",
    description:
      "Paste comments or upload CSV/TXT files containing customer feedback.",
  },
  {
    icon: BrainCircuit,
    title: "2. AI Analysis",
    description:
      "Gemini AI understands Roman Urdu and identifies sentiment, emotions, urgency, and complaint categories.",
  },
  {
    icon: BarChart3,
    title: "3. Get Insights",
    description:
      "Explore dashboards, trends, AI summaries, and suggested customer replies.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28">
      <PageContainer>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-violet-400">
            How It Works
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            From Customer Comments to Business Decisions
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Three simple steps to turn customer feedback into actionable insights.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="glass rounded-3xl border border-white/10 p-8 text-center transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/15">
                  <Icon className="h-8 w-8 text-violet-400" />
                </div>

                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}