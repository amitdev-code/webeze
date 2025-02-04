import { lazy } from "react";
import { RouteConfig } from "./types";

// LAYOUT IMPORT
import OpenLayout from "../layouts/openLayout/OpenLayout";
import LandingLayout from "../layouts/landingLayout/LandingLayout";

// VIEW IMPORT
const Home = lazy(() => import("../views/LandingPages"));
const Login = lazy(() => import("../views/Authentication/Login/Login"));
const Register = lazy(
  () => import("../views/Authentication/Register/Register")
);
const ForgotPassword = lazy(
  () => import("../views/Authentication/ForgotPassword/ForgotPassword")
);
const ResetPassword = lazy(
  () => import("../views/Authentication/ResetPassword/ResetPassword")
);
const UserVerification = lazy(
  () => import("../views/Authentication/UserVerification/UserVerification")
);
const ValidateEmail = lazy(
  () => import("../views/Authentication/ValidateEmail/ValidateEmail")
);
const Error404 = lazy(() => import("../views/Error/404/Error404"));
const Error401 = lazy(() => import("../views/Error/401/Error401"));
const Error500 = lazy(() => import("../views/Error/500/Error500"));

export const publicRoutes: RouteConfig[] = [
  {
    path: "/",
    namedPath: "home",
    component: Home,
    lazyLoaded: true,
    haveChildren: false,
    layout: LandingLayout,
    allowedRoles: [],
  },
  {
    path: "/login",
    namedPath: "login",
    component: Login,
    lazyLoaded: true,
    haveChildren: false,
    layout: OpenLayout,
    allowedRoles: [],
  },
  {
    path: "/register",
    namedPath: "register",
    component: Register,
    lazyLoaded: true,
    haveChildren: false,
    layout: OpenLayout,
    allowedRoles: [],
  },
  {
    path: "/forgot-password",
    namedPath: "forgotPassword",
    component: ForgotPassword,
    lazyLoaded: true,
    haveChildren: false,
    layout: OpenLayout,
    allowedRoles: [],
  },
  {
    path: "/reset-password",
    namedPath: "resetPassword",
    component: ResetPassword,
    lazyLoaded: true,
    haveChildren: false,
    layout: OpenLayout,
    allowedRoles: [],
  },
  {
    path: "/user-verification",
    namedPath: "userVerification",
    component: UserVerification,
    lazyLoaded: true,
    haveChildren: false,
    layout: OpenLayout,
    allowedRoles: [],
  },
  {
    path: "/validate-email",
    namedPath: "validateEmail",
    component: ValidateEmail,
    lazyLoaded: true,
    haveChildren: false,
    layout: OpenLayout,
    allowedRoles: [],
  },
  {
    path: "/not-found",
    namedPath: "notFound",
    component: Error404,
    lazyLoaded: true,
    haveChildren: false,
    layout: OpenLayout,
    allowedRoles: [],
  },
  {
    path: "/server-error",
    namedPath: "serverError",
    component: Error500,
    lazyLoaded: true,
    haveChildren: false,
    layout: OpenLayout,
    allowedRoles: [],
  },
  {
    path: "/unauthorized",
    namedPath: "unauthorized",
    component: Error401,
    lazyLoaded: true,
    haveChildren: false,
    layout: OpenLayout,
    allowedRoles: [],
  },
];
