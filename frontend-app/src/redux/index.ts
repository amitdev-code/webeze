import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./features/app/appSlice";
import userReducer from "./features/user/userSlice";

// Load persisted state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

// Configure Redux store
const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  },
  preloadedState: loadState(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Subscribe to store changes and persist them
store.subscribe(() => {
  saveState(store.getState());
});

// RootState type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
