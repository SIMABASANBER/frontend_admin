import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "@/pages/login";
import User from "@/pages/user";

export default function Router() {
  const router = createBrowserRouter([
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/user",
          element: <User />,
        },
  ]);

  return <RouterProvider router={router} />;
}
