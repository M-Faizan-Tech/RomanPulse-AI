import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function AIAnalysisPreview() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="glass glow mx-auto mt-16 max-w-5xl rounded-3xl border border-white/10 p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-sm text-zinc-400">Live AI Analysis</p>
          <h3 className="text-xl font-semibold">
            Roman Urdu Customer Feedback
          </h3>
        </div>

        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-400">
          Gemini 2.5 Flash
        </span>
      </div>

      {/* Comment */}
      <div className="mt-6 rounded-2xl bg-white/5 p-5">
        <p className="text-zinc-300 italic">
          "Service bohat slow thi lekin staff cooperative tha."
        </p>
      </div>

      {/* Results */}
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <InfoCard title="Sentiment" value="Negative" color="text-red-400" />
        <InfoCard title="Emotion" value="Frustration" color="text-yellow-400" />
        <InfoCard title="Category" value="Slow Service" color="text-blue-400" />
        <InfoCard title="Urgency" value="Medium" color="text-orange-400" />
      </div>

      {/* AI Reply */}
      <div className="mt-6 rounded-2xl bg-white/5 p-5">
        <p className="text-sm text-zinc-400">Suggested AI Reply</p>

        <p className="mt-2 text-zinc-300">
          Thank you for your valuable feedback. We sincerely apologize for the
          delay. Our team is working to improve service speed while maintaining
          quality. We hope to serve you better on your next visit.
        </p>
      </div>
    </motion.div>
  );
}

interface InfoCardProps {
  title: string;
  value: string;
  color: string;
}

function InfoCard({ title, value, color }: InfoCardProps) {
  return (
    <div className="rounded-2xl bg-white/5 p-4 transition hover:bg-white/10">
      <p className="text-sm text-zinc-400">{title}</p>
      <p className={`mt-2 text-lg font-semibold ${color}`}>{value}</p>
    </div>
  );
}