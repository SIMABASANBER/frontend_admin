import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "@/pages/login";

export default function Router() {
  const router = createBrowserRouter([
        {
          path: "/",
          element: <Login />,
        },
  ]);

  return <RouterProvider router={router} />;
}
