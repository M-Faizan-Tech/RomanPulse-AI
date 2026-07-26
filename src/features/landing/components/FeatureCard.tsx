import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="glass group rounded-3xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-white/10">
      <div className="mb-5 inline-flex rounded-2xl bg-violet-500/15 p-3 transition-colors group-hover:bg-violet-500/25">
        <Icon className="h-6 w-6 text-violet-400" />
      </div>

      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-zinc-400">
        {description}
      </p>
    </div>
  );
}