import * as React from "react";

import { Eye, EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] =
    React.useState(false);

  return (
    <div className="relative">
      <input
        ref={ref}
        type={showPassword ? "text" : "password"}
        className={cn(
          "glass w-full rounded-xl px-4 py-3 pr-12",
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

      <button
        type="button"
        onClick={() =>
          setShowPassword((prev) => !prev)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition hover:text-white"
        aria-label={
          showPassword
            ? "Hide password"
            : "Show password"
        }
      >
        {showPassword ? (
          <EyeOff size={20} />
        ) : (
          <Eye size={20} />
        )}
      </button>
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;