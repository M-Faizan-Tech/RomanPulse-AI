import {
  Activity,
  AlertTriangle,
  MessageSquare,
  Smile,
} from "lucide-react";

export const dashboardStats = [
  {
    id: 1,
    title: "Total Feedback",
    value: "1,248",
    change: "+12%",
    icon: MessageSquare,
  },
  {
    id: 2,
    title: "Positive",
    value: "78%",
    change: "+5%",
    icon: Smile,
  },
  {
    id: 3,
    title: "Complaints",
    value: "14%",
    change: "-2%",
    icon: AlertTriangle,
  },
  {
    id: 4,
    title: "Brand Health",
    value: "91",
    change: "+3",
    icon: Activity,
  },
];