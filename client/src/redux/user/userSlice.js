import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error:null,
    loading:false,
};

const userSLice = createSlice({
    name:'user',
    initialState,
    reducers: {
        signUpStart:(state) => {
            state.loading = true;
        },
        signUpSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signUpFailure: (state,action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {
    signUpStart,
    signUpSuccess,
    signUpFailure, 
} = userSLice.actions;

export default userSLice.reducer;