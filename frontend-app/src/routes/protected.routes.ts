import { lazy } from "react";
import { RouteConfig } from "./types";

// LAYOUT IMPORT
import DashboardLayout from "../layouts/dashboardLayout/DashboardLayout";
import OpenLayout from "../layouts/openLayout/OpenLayout";
// VIEW IMPORT
const Dashboard = lazy(
  () => import("../views/Dashboard/MasterDashboard/Dashboard")
);
const Onboarding = lazy(
  () => import("../views/Onboarding/OnBoarding")
);
const AnalyticsDashboard = lazy(
  () => import("../views/Dashboard/Analytics/DashboardAnlytics")
);

export const protectedRoutes: RouteConfig[] = [
  {
    path: "/dashboard",
    namedPath: "dashboard",
    component: Dashboard,
    lazyLoaded: true,
    haveChildren: false,
    layout: DashboardLayout,
    allowedRoles: ["USER", "ADMIN", "MANAGER"],
    children: [],
  },
  {
    path: "/dashboard/analytics",
    namedPath: "dashboardAnalytics",
    component: AnalyticsDashboard,
    lazyLoaded: true,
    haveChildren: false,
    checkRoleOnChildren: true,
    layout: DashboardLayout,
    allowedRoles: ["ADMIN"],
  },
  {
    path: "/onboarding",
    namedPath: "onboarding",
    component: Onboarding,
    lazyLoaded: true,
    haveChildren: false,
    layout: OpenLayout,
    allowedRoles: ["ADMIN"],
    children: [],
  },
];
