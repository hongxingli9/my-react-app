import { GLOBAL_CONFIG } from "@/global-config";
import { Navigate, type RouteObject } from "react-router";
import DashboradLayout from "@/layouts/dashboard";
import { getFrontendDashboardRoutes } from "./frontend";
import LoginAuthGuard from "@/routes/components/login-auth-guard";

const getRoutes = (): RouteObject[] => {
  if (GLOBAL_CONFIG.routerMode === "frontend") {
    return getFrontendDashboardRoutes();
  }
  return [];
};
export const dashboardRoutes: RouteObject[] = [
  {
    element: (
      <LoginAuthGuard>
        <DashboradLayout />
      </LoginAuthGuard>
    ),
    children: [
      { index: true, element: <Navigate to={GLOBAL_CONFIG.defaultRoute} replace /> },
      ...getRoutes(),
    ],
  },
];
