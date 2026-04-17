import { createRoot } from "react-dom/client";
import "./index.css";
//https://github.com/vanilla-extract-css/vanilla-extract/issues/1302
import "./theme/theme.css";
import "@/locales/i18n";
import App from "./App.tsx";
import { worker } from "./mock";
import { registerLocalIcons } from "@/components/icon";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter, Outlet } from "react-router";
import ErrorBoundary from "@/components/error-boundary";
import { routesSection } from "./routes/sections";
import { GLOBAL_CONFIG } from "./global-config.ts";
import { urlJoin } from "./utils";

await registerLocalIcons();
await worker.start({
  onUnhandledRequest: "bypass",
  serviceWorker: {
    url: urlJoin(GLOBAL_CONFIG.publicPath, "mockServiceWorker.js"),
  },
});
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
