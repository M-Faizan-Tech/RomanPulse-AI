import { motion } from "framer-motion";

import Logo from "@/components/common/Logo";

export default function BrandingPanel() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-8 py-12 lg:px-16">
      <div className="relative z-10 max-w-xl">
        {/* Logo */}
        <Logo />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-5xl font-bold leading-tight text-white"
        >
          Understand your customers
          <span className="block gradient-text">
            before they leave.
          </span>
        </motion.h1>

        {/* Description */}
        <p className="mt-6 max-w-md text-lg leading-8 text-zinc-400">
          RomanPulse AI transforms Roman Urdu customer feedback
          into powerful insights using Gemini AI.
        </p>

        {/* AI Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="mt-10 glass rounded-2xl p-5"
        >
          <p className="text-sm text-zinc-400">
            AI Feedback Intelligence
          </p>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-xs text-zinc-400">
                Sentiment
              </p>
              <p className="mt-2 text-2xl font-bold text-white">
                92%
              </p>
              <p className="text-sm text-green-400">
                Positive
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-xs text-zinc-400">
                Insights
              </p>
              <p className="mt-2 text-2xl font-bold text-white">
                24
              </p>
              <p className="text-sm text-violet-400">
                Generated
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <div className="mt-8 space-y-3">
          <div className="glass rounded-xl p-4 text-zinc-300">
            ✓ AI Sentiment Analysis
          </div>

          <div className="glass rounded-xl p-4 text-zinc-300">
            ✓ Complaint Detection
          </div>

          <div className="glass rounded-xl p-4 text-zinc-300">
            ✓ Actionable Business Insights
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -left-32 top-1/2 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
    </section>
  );
}