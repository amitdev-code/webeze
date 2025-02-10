// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice'; // Example slice

const rootReducer = combineReducers({
  auth: authReducer, // Add other slices here
});

export default rootReducer;