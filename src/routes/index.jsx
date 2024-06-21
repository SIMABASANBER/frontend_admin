import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "@/pages/login";
import User from "@/pages/user";
import DetailUser from "@/pages/user/detail-user";
import AddUser from "@/pages/user/add-user";
import Questions from "@/pages/questions";
import DetailQuestion from "@/pages/questions/detail-questions";
import AddQuestion from "@/pages/questions/add-questions";
import Ranking from "@/pages/ranking";
import Dashboard from "@/pages/dashboard";
import ProtectedRoute from "./protected-route";
import { AuthProvider } from "@/utils/context/auth-context";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/user",
      element: (
        <ProtectedRoute>
          <User />
        </ProtectedRoute>
      ),
    },
    {
      path: "/user/:id",
      element: (
        <ProtectedRoute>
          <DetailUser />
        </ProtectedRoute>
      ),
    },
    {
      path: "/user/create-user",
      element: (
        <ProtectedRoute>
          <AddUser />
        </ProtectedRoute>
      ),
    },
    {
      path: "/questions",
      element: (
        <ProtectedRoute>
          <Questions />
        </ProtectedRoute>
      ),
    },
    {
      path: "/question/:id",
      element: (
        <ProtectedRoute>
          <DetailQuestion />
        </ProtectedRoute>
      ),
    },
    {
      path: "/questions/create-question",
      element: (
        <ProtectedRoute>
          <AddQuestion />
        </ProtectedRoute>
      ),
    },
    {
      path: "/ranking",
      element: (
        <ProtectedRoute>
          <Ranking />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
