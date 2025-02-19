import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../../types/user.td";
import { ICompany } from "../../../types/company.td";
import { ISession } from "../../../types/user_session.td";
import { ApiMaster } from "../../../api";

interface UserState {
    isLoading: boolean;
    error: string | null;
    userDetail: IUser | null;
    companyDetail: ICompany | null;
}

export const registerUser = createAsyncThunk<{ user: IUser, company: ICompany, session: ISession }, { email: string, password: string, company: string }>(
    "user/register",
    async ({ email, password, company }) => {
        const response = await ApiMaster.authentication.register(email, password, company);
        return response.data;
    }
)

export const loginUser = createAsyncThunk<{ user: IUser, company: ICompany, session: ISession }, { email: string, password: string }>(
    "user/login",
    async ({ email, password }) => {
        const response = await ApiMaster.authentication.login(email, password);
        return response.data;
    }
)

const initialState: UserState = {
    isLoading: false,
    error: null,
    userDetail: null,
    companyDetail: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        resetUserState: (state) => {
            state.isLoading = false;
            state.error = null;
            state.userDetail = null;
            state.companyDetail = null;
        }
    },
    extraReducers: builder => {
        // REGISTER
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.userDetail = action.payload.user;
            state.companyDetail = action.payload.company;
            localStorage.setItem('session_token', JSON.stringify(action.payload.session.session_token));
            localStorage.setItem('refresh_token', JSON.stringify(action.payload.session.refresh_token));
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong';
        })
        // LOGIN
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.userDetail = action.payload.user;
            state.companyDetail = action.payload.company;
            localStorage.setItem('session_token', JSON.stringify(action.payload.session.session_token));
            localStorage.setItem('refresh_token', JSON.stringify(action.payload.session.refresh_token));
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong';
        })
    }
})

export default userSlice.reducer;
export const { resetUserState } = userSlice.actions;