import { Link, useNavigate } from "react-router-dom";

import Logo from "@/components/common/Logo";
import { useAuth } from "@/features/auth/hooks/useAuth";

export default function Navbar() {
  const navigate = useNavigate();

  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <nav className="border-b border-white/10 bg-[#09090B]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Logo />


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


          {user ? (
            <button
              onClick={handleLogout}
              className="
                rounded-full
                border
                border-white/10
                px-5
                py-2
                text-sm
                font-medium
                text-white
                transition
                hover:bg-white/10
              "
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="
                rounded-full
                bg-white
                px-5
                py-2
                text-sm
                font-medium
                text-black
                transition
                hover:scale-105
              "
            >
              Get Started
            </Link>
          )}

        </div>

      </div>
    </nav>
  );
}