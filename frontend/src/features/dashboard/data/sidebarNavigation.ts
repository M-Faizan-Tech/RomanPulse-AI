import {
  LayoutDashboard,
  Upload,
  History,
  Settings,
} from "lucide-react";

export const sidebarNavigation = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Upload Feedback",
    href: "/dashboard/upload",
    icon: Upload,
  },
  {
    label: "Analysis History",
    href: "/dashboard/history",
    icon: History,
  },

  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];