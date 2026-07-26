import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center text-2xl font-bold tracking-tight select-none transition-opacity hover:opacity-90 ${className}`}
    >
      <span className="gradient-text">RomanPulse</span>
      <span className="text-white">AI</span>
    </Link>
  );
}