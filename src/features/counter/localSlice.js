import { createSlice } from '@reduxjs/toolkit';

export const inputVal = createSlice({
    name: 'local',
    initialState: { 
      text: ''
    },
    reducers: {
      setText: (state, action) => {
        state.text = action.payload;
        console.log(action.payload)
        return state;
      },
    },
  });

export const { setText } = inputVal.actions;
export default inputVal.reducer;