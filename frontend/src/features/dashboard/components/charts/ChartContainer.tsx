import type { ReactNode } from "react";

interface ChartContainerProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function ChartContainer({
  title,
  description,
  children,
}: ChartContainerProps) {
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
      <div className="mb-6">
        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        {description && (
          <p className="mt-1 text-sm text-zinc-400">
            {description}
          </p>
        )}
      </div>

      <div className="h-80">
        {children}
      </div>
    </div>
  );
}