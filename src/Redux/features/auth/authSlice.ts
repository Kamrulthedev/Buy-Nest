import { RootState } from "@/Redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type TUser = {
    userId: string;
    role: string;
    iat: number;
    exp: number;
};

type TAuthState = {
    user?: TUser;
    token?: string;
};

const initialState: TAuthState = {
  user: undefined,
  token: undefined,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ user: TUser; token: string }>) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
        },
        logout: (state) => {
            state.user = undefined;
            state.token = undefined;
        },
    },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const useCurrentUser = (state: RootState) => state.auth.user;
