import { lazy } from "react";
import { RouteConfig } from "./types";

// LAYOUT IMPORT
import DashboardLayout from "../layouts/dashboardLayout/DashboardLayout";
import OpenLayout from "../layouts/openLayout/OpenLayout";
// VIEW IMPORT
// DASHBOARD PAGES
const Dashboard = lazy(
  () => import("../views/Dashboard/MasterDashboard/Dashboard")
);
// DASHBOARD ANALYTICS
const WebsiteAnalytics = lazy(
  () => import("../views/Dashboard/Analytics/WebsiteAnalytics")
);
const LiveAnalytics = lazy(
  () => import("../views/Dashboard/Analytics/LiveAnalytics")
);
// BLOGS
const BlogListing = lazy(() => import("../views/Dashboard/Blogs/BlogsListing"));
const ManageBlogs = lazy(() => import("../views/Dashboard/Blogs/ManageBlogs"));
// MARKETING
const websiteAutomation = lazy(
  () => import("../views/Dashboard/Marketing/Automation")
);
const websiteCampaign = lazy(
  () => import("../views/Dashboard/Marketing/Campaign")
);
// MEDIA BOX
const MediaBox = lazy(() => import("../views/Dashboard/MediaBox"));
// INTEGRATIONS
const Integrations = lazy(() => import("../views/Dashboard/Integrations"));

// WEBSITE USERS
const WebsiteCustomers = lazy(
  () => import("../views/Dashboard/Users/StoreCustomer")
);
const WebsiteLeads = lazy(() => import("../views/Dashboard/Users/StoreLeads"));

// ADMIN ONBOARDING
const Onboarding = lazy(() => import("../views/Onboarding/OnBoarding"));

// BUILDER PAGE INPORTS
const Builder = lazy(() => import("../views/Builder/WebpageDesigner"));
const ManageWebpage = lazy(() => import("../views/Builder/ManageWebpages"));
const ManageWebpageMenu = lazy(() => import("../views/Builder/ManageWebsiteMenu"));
// BUILDER CONFIGRATION PAGE IMPORT
const ThemeConfigration = lazy(() => import("../views/Builder/Configration/ThemeConfigration"));
const TemplateConfigration = lazy(() => import("../views/Builder/Configration/TemplateConfigration"));
const SEOConfigration = lazy(() => import("../views/Builder/Configration/SEOConfigration"));
const WebsiteSettings = lazy(() => import("../views/Builder/Configration/WebsiteSettings"));




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
    path: "/onboarding",
    namedPath: "onboarding",
    component: Onboarding,
    lazyLoaded: true,
    haveChildren: false,
    layout: OpenLayout,
    allowedRoles: ["ADMIN"],
    children: [],
  },
  {
    path: "/dashboard/website-analytics",
    namedPath: "Website Analytics",
    component: WebsiteAnalytics,
    lazyLoaded: true,
    haveChildren: false,
    layout: DashboardLayout,
    allowedRoles: ["USER", "ADMIN", "MANAGER"],
    children: [],
  },
  {
    path: "/dashboard/live-analytics",
    namedPath: "Live Analytics",
    component: LiveAnalytics,
    lazyLoaded: true,
    haveChildren: false,
    layout: DashboardLayout,
    allowedRoles: ["USER", "ADMIN", "MANAGER"],
    children: [],
  },
  {
    path: "/dashboard/intergations",
    namedPath: "Integrations",
    component: Integrations,
    lazyLoaded: true,
    haveChildren: false,
    layout: DashboardLayout,
    allowedRoles: ["USER", "ADMIN", "MANAGER"],
    children: [],
  },
  {
    path: "/dashboard/blogs-list",
    namedPath: "All Blogs",
    component: BlogListing,
    lazyLoaded: true,
    haveChildren: false,
    layout: DashboardLayout,
    allowedRoles: ["USER", "ADMIN", "MANAGER"],
    children: [],
  },
  {
    path: "/dashboard/manage-blogs",
    namedPath: "Manage Blogs",
    component: ManageBlogs,
    lazyLoaded: true,
    haveChildren: false,
    layout: DashboardLayout,
    allowedRoles: ["USER", "ADMIN", "MANAGER"],
    children: [],
  },
  {
    path: "/dashboard/website-automation",
    namedPath: "Website Automation",
    component: websiteAutomation,
    lazyLoaded: true,
    haveChildren: false,
    layout: DashboardLayout,
    allowedRoles: ["USER", "ADMIN", "MANAGER"],
    children: [],
  },
  {
    path: "/dashboard/website-campaign",
    namedPath: "Website Campaign",
    component: websiteCampaign,
    lazyLoaded: true,
    haveChildren: false,
    layout: DashboardLayout,
    allowedRoles: ["USER", "ADMIN", "MANAGER"],
    children: [],
  },
  {
    path: "/dashboard/media-box",
    namedPath: "Media Box",
    component: MediaBox,
    lazyLoaded: true,
    haveChildren: false,
    layout: DashboardLayout,
    allowedRoles: ["USER", "ADMIN", "MANAGER"],
    children: [],
  },
  {
    path: "/dashboard/website-customers",
    namedPath: "Website Customers",
    component: WebsiteCustomers,
    lazyLoaded: true,
    haveChildren: false,
    layout: DashboardLayout,
    allowedRoles: ["USER", "ADMIN", "MANAGER"],
    children: [],
  },
  {
    path: "/dashboard/website-leads",
    namedPath: "Website Leads",
    component: WebsiteLeads,
    lazyLoaded: true,
    haveChildren: false,
    layout: DashboardLayout,
    allowedRoles: ["USER", "ADMIN", "MANAGER"],
    children: [],
  },
  {
    path: "/builder",
    namedPath: "Builder",
    component: Builder,
    lazyLoaded: true,
    haveChildren: false,
    layout: DashboardLayout,
    allowedRoles: ["USER", "ADMIN", "MANAGER"],
    children: [],
  },
  {
    path: "/builder/manage-webpage",
    namedPath: "Manage Webpage",
    component: ManageWebpage,
    lazyLoaded: true,
    haveChildren: false,
    layout: DashboardLayout,
    allowedRoles: ["USER", "ADMIN", "MANAGER"],
    children: [],
  },
  {
    path: "/builder/manage-webpage-menu",
    namedPath: "Manage Webpage Menu",
    component: ManageWebpageMenu,
    lazyLoaded: true,
    haveChildren: false,
    layout: DashboardLayout,
    allowedRoles: ["USER", "ADMIN", "MANAGER"],
    children: [],
  },
  {
    path: "/builder/theme-configration",
    namedPath: "Theme Configration",
    component: ThemeConfigration,
    lazyLoaded: true,
    haveChildren: false,
    layout: DashboardLayout,
    allowedRoles: ["USER", "ADMIN", "MANAGER"],
    children: [],
  },
  {
    path: "/builder/template-configration",
    namedPath: "Template Configration",
    component: TemplateConfigration,
    lazyLoaded: true,
    haveChildren: false,
    layout: DashboardLayout,
    allowedRoles: ["USER", "ADMIN", "MANAGER"],
    children: [],
  },
  {
    path: "/builder/seo-configration",
    namedPath: "SEO Configration",
    component: SEOConfigration,
    lazyLoaded: true,
    haveChildren: false,
    layout: DashboardLayout,
    allowedRoles: ["USER", "ADMIN", "MANAGER"],
    children: [],
  },
  {
    path: "/builder/website-settings",
    namedPath: "Website Settings",
    component: WebsiteSettings,
    lazyLoaded: true,
    haveChildren: false,
    layout: DashboardLayout,
    allowedRoles: ["USER", "ADMIN", "MANAGER"],
    children: [],
  },
];
