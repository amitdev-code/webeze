// features/auth/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";

interface AuthState {
  user: null | { name: string; email: string };
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ name: string; email: string }>
    ) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setLoading, setError } = authSlice.actions;

// Example thunk for API call
export const login =
  (email: string, password: string): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    //   try {
    //     const response = await api.login(email, password); // Replace with your API call
    //     dispatch(setUser(response.data));
    //   } catch (error) {
    //     dispatch(setError(error.message));
    //   } finally {
    //     dispatch(setLoading(false));
    //   }
  };

export default authSlice.reducer;
