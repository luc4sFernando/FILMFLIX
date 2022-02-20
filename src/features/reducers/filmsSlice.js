import { createSlice } from '@reduxjs/toolkit';

export const filmsStorage = createSlice({
    name: 'store',
    initialState: {
        posts: [],
    },
    reducers: {
        setPost: (state, action) => {
            state.posts = action.payload;
            return state;
        },
    },
});

export const { setPost } = filmsStorage.actions;
export default filmsStorage.reducer;
