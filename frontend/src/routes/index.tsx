import { createBrowserRouter } from "react-router-dom";
import HistoryPage from "@/features/dashboard/pages/HistoryPage";
import MainLayout from "../layouts/MainLayout";
import SettingsPage from "@/features/settings/pages/SettingsPage";
import Home from "../pages/Home";
import Login from "../pages/Login";

import ProtectedRoute from "@/routes/ProtectedRoute";

import DashboardLayout from "@/features/dashboard/layouts/DashboardLayout";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";

import UploadFeedbackPage from "@/features/feedback/pages/UploadFeedbackPage";


export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardLayout />,
            children: [
              {
                index: true,
                element: <DashboardPage />,
              },
              {
                path: "upload",
                element: <UploadFeedbackPage />,
              },
              {
                path:"history",
                element:<HistoryPage/>
              },
              {
                path: "settings",
                element: <SettingsPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);