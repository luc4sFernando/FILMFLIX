import {  createSlice, current } from '@reduxjs/toolkit';


const initialState = {
post: [],
id: ''
};



export const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    
    setPost: (state, action) => {
     
      state.post = action.payload
    },
    setId: (state, action) => {
     
      state.id = action.payload
      return state
    }
 
}});

export const {setPost, setId} = stockSlice.actions;



export default stockSlice.reducer;
