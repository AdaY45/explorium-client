import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    user: {}
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authHandler(state, action) {
            state.isAuth = action.payload;
        },
        setUser(state, action) {
            state.user = action.payload;
        }
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
