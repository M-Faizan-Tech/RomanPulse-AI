import { NavLink, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

import Logo from "@/components/common/Logo";
import { sidebarNavigation } from "../../data/sidebarNavigation";
import { useAuth } from "@/features/auth/hooks/useAuth";

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({
  onClose,
}: SidebarProps) {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleLogout = async () => {
    onClose?.();

    await signOut();

    navigate("/login");
  };

  return (
    <aside
      className="
        h-full
        w-64
        border-r
        app-border
        bg-(--background)
        flex
        flex-col
      "
    >
      {/* Logo */}
      <div className="p-4">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 overflow-y-auto p-4">
        {sidebarNavigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/dashboard"}
              onClick={() => onClose?.()}
              className={({ isActive }) =>
                `
                flex
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                text-sm
                font-medium
                transition-all

                ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "app-muted hover:bg-black/5 dark:hover:bg-white/5 hover:text-(--foreground)"
                }
              `
              }
            >
              <Icon size={18} />

              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="border-t app-border p-4">
        <button
          onClick={handleLogout}
          className="
            flex
            w-full
            items-center
            gap-3
            rounded-xl
            px-4
            py-3
            text-sm
            font-medium
            text-red-400
            transition
            hover:bg-red-500/10
          "
        >
          <LogOut size={18} />

          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}