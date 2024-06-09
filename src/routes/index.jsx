import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "@/pages/login";
import User from "@/pages/user";
import DetailUser from "@/pages/user/detail-user";
import AddUser from "@/pages/user/add-user";
import Questions from "@/pages/questions";
import DetailQuestion from "@/pages/questions/detail-questions";
import AddQuestion from "@/pages/questions/add-questions";

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
          element: <Questions />,
        },
        {
          path: "/question/:id",
          element: <DetailQuestion/>,
        },
        {
          path: "/questions/create-question",
          element: <AddQuestion/>,
        },
  ]);

  return <RouterProvider router={router} />;
}
