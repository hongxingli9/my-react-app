import { Navigate, type RouteObject } from "react-router";
import { authRoutes } from "./auth";
import { dashboardRoutes } from "./dashborad";
import { mainRoutes } from "./main";
export const routesSection: RouteObject[] = [
  ...authRoutes,
  ...dashboardRoutes,
  ...mainRoutes,
  { path: "*", element: <Navigate to="/404" replace /> },
];
