import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter, Outlet } from "react-router";
import { Button } from "@/components/ui/button";

const router = createBrowserRouter([
  {
    Component: () => (
      <App>
        <Outlet />
      </App>
    ),
    children: [
      {
        path: "/home",
        Component: () => (
          <h1>
            Home<Button>Click me</Button>
          </h1>
        ),
      },
      {
        path: "/about",
        Component: () => <h1>About</h1>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
