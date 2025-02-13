import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer, { SidebarState } from './features/app/sidebar';

// Load state from localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('sidebarState');
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (err) {
        console.error('Error loading state from localStorage', err);
        return undefined;
    }
};

// Save state to localStorage
const saveState = (state: RootState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('sidebarState', serializedState);
    } catch (err) {
        console.error('Error saving state to localStorage', err);
    }
};

// Define the store
const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
    },
    preloadedState: loadState(),
});

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
    saveState(store.getState());
});

// Correct type definitions
export interface RootState {
    sidebar: SidebarState;
}
export type AppDispatch = typeof store.dispatch;

export default store;
