import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

export const TestRouter = ({ children }) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: children,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
