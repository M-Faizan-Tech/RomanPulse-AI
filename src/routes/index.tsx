import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";

import ProtectedRoute from "@/routes/ProtectedRoute";

import DashboardLayout from "@/features/dashboard/layouts/DashboardLayout";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";

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
            ],
          },
        ],
      },
    ],
  },
]);