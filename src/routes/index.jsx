import {createBrowserRouter, RouterProvider} from "react-router-dom";

export default function Router() {
  const router = createBrowserRouter([
        {
          path: "*",
          element: <Page404 />,
        },
  ]);

  return <RouterProvider router={router} />;
}
