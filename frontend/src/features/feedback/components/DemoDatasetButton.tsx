import { Database } from "lucide-react";

interface DemoDatasetButtonProps {
  onLoad: () => void;
}

export default function DemoDatasetButton({
  onLoad,
}: DemoDatasetButtonProps) {
  return (
    <button
      type="button"
      onClick={onLoad}
      className="
        w-full
        rounded-xl
        border
        border-purple-500/30
        bg-purple-500/10
        px-4
        py-3
        transition-all
        duration-300
        hover:bg-purple-500/20
        hover:border-purple-500
        flex
        items-center
        justify-center
        gap-2
        text-sm
        font-medium
      "
    >
      <Database className="h-5 w-5" />
      Load Demo Dataset (150 Comments)
    </button>
  );
}