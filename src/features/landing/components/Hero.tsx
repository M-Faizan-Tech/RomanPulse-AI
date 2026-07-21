import { motion } from "framer-motion";

import { fadeUp } from "@/lib/animations";
import HeroBackground from "./HeroBackground";
import PageContainer from "@/components/layout/PageContainer";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28">
      <HeroBackground />

      <PageContainer>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <span className="glass inline-flex rounded-full px-4 py-2 text-sm text-zinc-300">
            🇵🇰 Built for Pakistani Businesses
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            Understand Your Customers
            <span className="gradient-text"> with AI</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            RomanPulse AI analyzes Roman Urdu comments using Gemini AI to detect
            sentiment, complaints, emotions, urgency, and generates actionable
            business insights.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">
              Try Demo
            </button>

            <button className="glass rounded-full px-6 py-3 transition hover:scale-105">
              View Dashboard
            </button>
          </div>

          
        </motion.div>
      </PageContainer>
    </section>
  );
}