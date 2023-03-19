import { createSlice } from "@reduxjs/toolkit";
import { signup, login,logOut, refreshUser } from './auth-operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLogin: false,
    loading: false,
    error: null,
    isRefreshing: false,
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder.addCase(signup.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(signup.fulfilled, (state, { payload }) => {
                const { user, token } = payload;
                state.loading = true;
                state.user = user;
                state.token = token;
                state.isLogin = true;
            })
            .addCase(signup.rejected, (state, { payload }) => {
              state.loading = false;
            state.error = payload;
            })
         .addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(login.fulfilled, (state, { payload }) => {
                const { user, token } = payload;
                state.loading = true;
                state.user = user;
                state.token = token;
                state.isLogin = true;
            })
            .addCase(login.rejected, (state, { payload }) => {
              state.loading = false;
            state.error = payload;
            })
              .addCase(logOut.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
                .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLogin = false;
                })
              .addCase(logOut.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
       .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLogin = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
    }
}) 
    
   
export default authSlice.reducer;