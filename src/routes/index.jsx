import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "@/pages/login";
import User from "@/pages/user";
import DetailUser from "@/pages/user/detail-user";
import AddUser from "@/pages/user/add-user";

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
        {
          path: "/user/:id",
          element: <DetailUser />,
        },
        {
          path: "/user/create-user",
          element: <AddUser />,
        },
        {
          path: "/questions",
          element: <User />,
        },
        {
          path: "/question/:id",
          element: <DetailUser />,
        },
        {
          path: "/questions/create-question",
          element: <AddUser />,
        },
  ]);

  return <RouterProvider router={router} />;
}
