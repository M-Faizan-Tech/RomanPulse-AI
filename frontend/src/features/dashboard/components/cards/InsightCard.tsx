import type { ReactNode } from "react";

interface InsightCardProps {
  title: string;
  children: ReactNode;
}

export default function InsightCard({
  title,
  children,
}: InsightCardProps) {
  return (
    <div
      className="
        glass
        rounded-2xl
        border
        border-white/10
        p-6
      "
    >
      <h3 className="mb-4 text-lg font-semibold">
        {title}
      </h3>

      {children}
    </div>
  );
}