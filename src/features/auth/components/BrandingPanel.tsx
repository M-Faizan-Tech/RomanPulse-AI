import Logo from "@/components/common/Logo";

export default function BrandingPanel() {
  return (
    <section className="relative hidden overflow-hidden border-r border-white/10 lg:flex flex-col justify-between p-12">
      <div>
        <Logo />

        <p className="mt-8 max-w-md text-lg leading-8 text-zinc-400">
          Understand customer sentiment from Roman Urdu feedback
          using Gemini AI.
        </p>
      </div>

      <div className="space-y-4">
        <div className="glass rounded-xl p-4">
          ✓ AI Sentiment Analysis
        </div>

        <div className="glass rounded-xl p-4">
          ✓ Complaint Detection
        </div>

        <div className="glass rounded-xl p-4">
          ✓ Actionable Business Insights
        </div>
      </div>

      <div className="absolute -left-32 top-1/2 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
    </section>
  );
}