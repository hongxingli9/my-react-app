import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { registerLocalIcons } from "@/components/icon";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter, Outlet } from "react-router";
// import { Button } from "@/components/ui/button";
import ErrorBoundary from "@/components/error-boundary";
// import DashboradLayout from "@/layouts/dashboard/";
import { routesSection } from "./routes/sections";
import { GLOBAL_CONFIG } from "./global-config.ts";

await registerLocalIcons();

const router = createBrowserRouter(
  [
    {
      Component: () => (
        <App>
          <Outlet />
        </App>
      ),
      errorElement: <ErrorBoundary />,
      children: routesSection,
    },
  ],
  {
    basename: GLOBAL_CONFIG.publicPath,
  },
);

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
console.log(routesSection);
