import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BuilderState {
  isBuilderSidebarOpen: boolean;
  isElementDesignerSidebarOpen: boolean;
  websiteJSON: { [key: string]: unknown }[];
  selectedMenu: number;
}

const initialState: BuilderState = {
  isBuilderSidebarOpen: false,
  isElementDesignerSidebarOpen: false,
  selectedMenu: 0,
  websiteJSON: [],
};

const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    toggleBuilderSidebar: (state) => {
      state.isBuilderSidebarOpen = !state.isBuilderSidebarOpen;
    },
    toggleElementDesignerSidebar: (state) => {
      state.isBuilderSidebarOpen = !state.isBuilderSidebarOpen;
    },
    openBuilderSidebar: (state) => {
      state.isBuilderSidebarOpen = true;
    },
    setSelectedBuildSidebarMenu: (state, action: PayloadAction<number>) => {
      state.selectedMenu = action.payload;
    },
  },
});

export const {
  toggleBuilderSidebar,
  setSelectedBuildSidebarMenu,
  openBuilderSidebar,
  toggleElementDesignerSidebar,
} = builderSlice.actions;
export default builderSlice.reducer;
