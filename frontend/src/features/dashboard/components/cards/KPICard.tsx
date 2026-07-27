import type { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change?: string;
}

export default function KPICard({
  title,
  value,
  icon: Icon,
  change,
}: KPICardProps) {
  return (
    <div
      className="
        glass
        rounded-2xl
        border
        border-white/10
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/40
      "
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm text-zinc-400">
          {title}
        </span>

        <div className="rounded-xl bg-primary/10 p-3">
          <Icon
            size={20}
            className="text-primary"
          />
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-3xl font-bold">
          {value}
        </h3>

        {change && (
          <p className="text-sm text-emerald-400">
            {change}
          </p>
        )}
      </div>
    </div>
  );
}