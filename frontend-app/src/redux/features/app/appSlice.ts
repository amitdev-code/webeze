import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define state type
interface AppState {
  isOpen: boolean;
  selectedMenu: number;
  isAuthenticated: boolean;
}

const initialState: AppState = {
  isOpen: false,
  selectedMenu: 0,
  isAuthenticated: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    setSidebar: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    openSidebar: (state) => {
      state.isOpen = true;
    },
    selectMenu: (state, action: PayloadAction<number>) => {
      state.selectedMenu = action.payload;
    },
    authenticateApp: (state) => {
      state.isAuthenticated = true;
    },
  },
});

export const { toggleSidebar, setSidebar, openSidebar, selectMenu, authenticateApp } =
  appSlice.actions;
export default appSlice.reducer;
