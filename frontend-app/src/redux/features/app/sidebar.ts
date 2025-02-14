import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SidebarItem {
  iconUrl: string;
  tooltipText: string;
  menuTitle: string;
  isSelected?: boolean;
  hasSubMenu: boolean;
  isPageNavigation: boolean;
  pageUrl: string;
  menuItems?: SubMenuItem[];
}

export interface SubMenuItem {
  subMenuTitle: string;
  redirectUrl: string;
  showDividerOnTop: boolean;
  showDividerOnBottom: boolean;
  isOpen: boolean;
  isSelected: boolean;
  hasSubMenu?: boolean;
  subMenuItems?: SubMenuItem[];
}

interface SidebarBottomItem {
  iconUrl: string;
  tooltipText: string;
  menuTitle: string;
  hasSubMenu: boolean;
  isPageNavigation: boolean;
  pageUrl: string;
  haveTrigger: boolean;
  trigger: string;
}

export interface SidebarState {
  isOpen: boolean;
  sidebar: {
    top: SidebarItem[];
    bottom: SidebarBottomItem[];
  };
  selectedMenuItems?: SubMenuItem[];
  menuTitle?: string;
}

const initialState: SidebarState = {
  isOpen: false,
  sidebar: {
    top: [
      {
        iconUrl: "ph:sidebar-duotone",
        tooltipText: "Dashboard",
        menuTitle: "Dashboard",
        isSelected: true,
        hasSubMenu: true,
        isPageNavigation: false,
        pageUrl: "",
        menuItems: [
          {
            subMenuTitle: "Overview",
            redirectUrl: "/dashboard",
            showDividerOnTop: true,
            showDividerOnBottom: true,
            isOpen: true,
            isSelected: true,
            hasSubMenu: false,
            subMenuItems: [],
          },
        ],
      },
      {
        iconUrl: "ph:app-window-duotone",
        tooltipText: "Website Builder",
        menuTitle: "Website Builder",
        isSelected: false,
        hasSubMenu: true,
        isPageNavigation: false,
        pageUrl: "",
        menuItems: [
          {
            subMenuTitle: "Editor",
            redirectUrl: "/builder",
            showDividerOnTop: false,
            showDividerOnBottom: false,
            isOpen: false,
            isSelected: false,
            hasSubMenu: false,
            subMenuItems: [],
          },
        ],
      },
      {
        iconUrl: "oui:documentation",
        tooltipText: "Documentation",
        menuTitle: "Documentation",
        isSelected: false,
        hasSubMenu: true,
        isPageNavigation: false,
        pageUrl: "",
        menuItems: [],
      },
    ],
    bottom: [
      {
        iconUrl: "ph:magnifying-glass-duotone",
        tooltipText: "Search",
        menuTitle: "",
        hasSubMenu: false,
        isPageNavigation: false,
        pageUrl: "#search",
        haveTrigger: true,
        trigger: "Globalsearch",
      },
      {
        iconUrl: "ph:gear-six-duotone",
        tooltipText: "Settings",
        menuTitle: "",
        hasSubMenu: false,
        isPageNavigation: true,
        pageUrl: "/company/settings",
        haveTrigger: false,
        trigger: "",
      },
    ],
  },
  selectedMenuItems: [
    {
      subMenuTitle: "Overview",
      redirectUrl: "/dashboard",
      showDividerOnTop: true,
      showDividerOnBottom: true,
      isOpen: true,
      isSelected: true,
      hasSubMenu: false,
      subMenuItems: [],
    },
  ],
  menuTitle: "Dashboard",
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    openSidebar: (state) => {
      state.isOpen = true;
    },
    closeSidebar: (state) => {
      state.isOpen = false;
    },
    setSelectedIndex: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.sidebar.top = state.sidebar.top.map((item, i) => ({
        ...item,
        isSelected: i === index,
        menuItems: item.menuItems?.map((menu) => ({
          ...menu,
          isSelected: false,
          subMenuItems: menu.subMenuItems?.map((subMenu) => ({
            ...subMenu,
            isSelected: false,
          })) || [],
        })) || [],
      }));
      state.selectedMenuItems = state.sidebar.top[index].menuItems || [];
      state.menuTitle = state.sidebar.top[index].menuTitle;
    },
  },
});

export const { toggleSidebar, openSidebar, closeSidebar, setSelectedIndex } = sidebarSlice.actions;
export default sidebarSlice.reducer;
