import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "glass w-full rounded-xl px-4 py-3",
          "bg-transparent",
          "text-white",
          "placeholder:text-zinc-500",
          "border border-white/10",
          "outline-none",
          "transition-all duration-200",
          "focus:border-violet-500",
          "focus:ring-2 focus:ring-violet-500/30",
          "disabled:opacity-50",
          "disabled:cursor-not-allowed",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;