import { createSlice } from "@reduxjs/toolkit";

export interface SidebarState {
  isOpen: boolean;
  selectedMenuIndex?: number;
  selectedSubMenuIndex?: number;
}

const initialState: SidebarState = {
  isOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
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
    selectMenu: (state, action) => {
      state.selectedMenuIndex = action.payload;
    },
    selectSubMenu: (state, action) => {
      state.selectedSubMenuIndex = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  openSidebar,
  closeSidebar,
  selectMenu,
  selectSubMenu,
} = sidebarSlice.actions;
export default sidebarSlice.reducer;
