import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
post: [],
movies: []

};


export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);

    // The value we return becomes the `fulfilled` action payload

    return response.data;
  }
);

export const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    
    setPost(state, action){
      return  state = action.payload
    },
    setMoive(state, action){
      return state = action.payload
    }
 
}});

export const {setMoive, setPost} = stockSlice.actions;



export default stockSlice.reducer;
