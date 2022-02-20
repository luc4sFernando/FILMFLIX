import { createSlice } from '@reduxjs/toolkit';

export const profilesReducers = createSlice({
    name: 'profiles',
    initialState: {
        bank: [],
    },
    reducers: {
        setBank: (state, action) => {
            state.bank = action.payload;
            console.log(action.payload)
            return state;
        },
    },
});

export const { setBank } = profilesReducers.actions;
export default profilesReducers.reducer;
