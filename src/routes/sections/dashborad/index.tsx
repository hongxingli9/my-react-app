import { GLOBAL_CONFIG } from "@/global-config";
import { Navigate, type RouteObject } from "react-router";
import DashboradLayout from "@/layouts/dashboard";
import { getFrontendDashboardRoutes } from "./frontend";

const getRoutes = (): RouteObject[] => {
  if (GLOBAL_CONFIG.routerMode === "frontend") {
    return getFrontendDashboardRoutes();
  }
  return [];
};
console.log(getRoutes());
export const dashboardRoutes: RouteObject[] = [
  {
    element: <DashboradLayout />,
    children: [
      { index: true, element: <Navigate to={GLOBAL_CONFIG.defaultRoute} replace /> },
      ...getRoutes(),
    ],
  },
];
