import { RouteConfig } from "./types";

// LAYOUT IMPORT
import BuilderLayout from "../builderLayout/BuilderLayout";

// WEBSITE BUILDER
import WebsiteBuilder from "../views/Builder/WebsiteBuilder";


export const protectedRoutes: RouteConfig[] = [
  {
    path: "/",
    namedPath: "dashboard",
    component: WebsiteBuilder,
    lazyLoaded: true,
    haveChildren: false,
    layout: BuilderLayout,
    allowedRoles: ["ADMIN", "DEVELOPER"],
    children: [],
  },];
