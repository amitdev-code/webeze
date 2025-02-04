export interface RouteConfig {
  path: string;
  namedPath: string;
  component: React.ComponentType;
  lazyLoaded: boolean;
  haveChildren: boolean;
  layout: React.ComponentType<{ children: React.ReactElement }>;
  checkRoleOnChildren?: boolean;
  allowedRoles: string[];
  children?: RouteConfig[];
}
