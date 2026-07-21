import { Link } from "react-router-dom";
import Logo from "@/components/common/Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12">

        <Link
          to="/"
          className="text-xl font-semibold tracking-tight"
        >
          <Logo />
        </Link>


        <div className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Dashboard
          </Link>

          <Link
            to="/login"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:scale-105"
          >
            Get Started
          </Link>

        </div>

      </div>
    </nav>
  );
}