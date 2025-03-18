import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PageConfig } from "../../../builder.td";

interface BuilderState {
  isBuilderSidebarOpen: boolean;
  isElementDesignerSidebarOpen: boolean;
  selectedMenu: number;
  websiteJSON: PageConfig[];
  renderJSON: PageConfig[];
  selectedElement: string | null;
}

const initialState: BuilderState = {
  isBuilderSidebarOpen: false,
  isElementDesignerSidebarOpen: false,
  selectedMenu: 0,
  websiteJSON: [],
  renderJSON: [],
  selectedElement: null,
};

const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    toggleBuilderSidebar: (state) => {
      state.isBuilderSidebarOpen = !state.isBuilderSidebarOpen;
    },
    toggleElementDesignerSidebar: (state) => {
      state.isElementDesignerSidebarOpen = !state.isElementDesignerSidebarOpen;
    },
    openBuilderSidebar: (state) => {
      state.isBuilderSidebarOpen = true;
    },
    closeBuilderSidebar: (state) => {
      state.isBuilderSidebarOpen = false;
    },
    openElementDesignerSidebar: (state) => {
      state.isElementDesignerSidebarOpen = true;
    },
    closeElementDesignerSidebar: (state) => {
      state.isElementDesignerSidebarOpen = false;
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
  closeBuilderSidebar,
  openElementDesignerSidebar,
  closeElementDesignerSidebar,
  toggleElementDesignerSidebar,
} = builderSlice.actions;
export default builderSlice.reducer;
