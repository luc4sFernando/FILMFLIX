import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    user: null,
    signUpEmail: '',
    url: 'oi',
};

export const stockSlice = createSlice({
    name: 'stock',
    initialState,
    reducers: {
        setId: (state, action) => {
            state.id = action.payload;
            return state;
        },
        login: (state, action) => {
            state.user = action.payload;
            return state;
        },
        logout: (state) => {
            state.user = null;
            return state;
        },
        passedEmail: (state, action) => {
            state.signUpEmail = action.payload;
            return state;
        },
        newPlan: (state, action) => {
            state.user.plans = action.payload;
            return state;
        },
        setBasicUrl: (state, action) => {
            console.log(action.payload);
            state.url = action.payload;
        },
    },
});

export const { setId, login, logout, passedEmail, newPlan, setBasicUrl } =
    stockSlice.actions;

export default stockSlice.reducer;
