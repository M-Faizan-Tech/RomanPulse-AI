import { Bell, Menu, Search } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";

interface Props {
  onMenuClick: () => void;
}

export default function DashboardHeader({
  onMenuClick,
}: Props) {
  const { user } = useAuth();

  const displayName =
    user?.email?.split("@")[0] ?? "User";

  return (
    <header
      className="
        flex
        items-center
        justify-between
        gap-4
        border-b
        app-border
        bg-(--background)
        px-4
        py-4
        md:px-6
      "
    >
      {/* Left */}
      <div className="flex items-center gap-4 min-w-0">
        {/* Mobile Menu */}
        <button
          onClick={onMenuClick}
          className="
            rounded-xl
            border
            app-border
            p-2
            transition
            hover:bg-black/5
            dark:hover:bg-white/5
            lg:hidden
          "
        >
          <Menu size={20} />
        </button>

        <div className="min-w-0">
          <h1 className="truncate text-2xl font-bold md:text-3xl">
            Dashboard
          </h1>

          <p className="mt-1 truncate text-sm app-muted">
            Welcome back, {displayName}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div
          className="
            hidden
            items-center
            gap-2
            rounded-xl
            border
            app-border
            bg-(--surface)
            px-4
            py-2
            lg:flex
          "
        >
          <Search size={18} />

          <input
            type="text"
            placeholder="Search..."
            className="
              w-48
              bg-transparent
              outline-none
              placeholder:text-(--muted)
            "
          />
        </div>

        {/* Notifications */}
        <button
          className="
            rounded-xl
            border
            app-border
            p-3
            transition
            hover:bg-black/5
            dark:hover:bg-white/5
          "
        >
          <Bell size={18} />
        </button>

        {/* Avatar */}
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-primary
            font-semibold
            text-primary-foreground
            shrink-0
          "
        >
          {displayName.charAt(0).toUpperCase()}
        </div>
      </div>
    </header>
  );
}