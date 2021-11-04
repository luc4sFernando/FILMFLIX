import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
post: [],
id: '',
user: null,
signUpEmail: ''
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
      return state;
    },
    login: (state, action) => {
      
      state.user = action.payload
      return state;
    },
    logout: (state) => {
      state.user = null;
      return state;
    },
    passedEmail: (state, action) => {
      state.signUpEmail = action.payload;
      return state
    },
    newPlan: (state, action) => {
      state.user.plans = action.payload;
      return state
    }
 
}});

export const {setPost, setId, login, logout, passedEmail, newPlan} = stockSlice.actions;



export default stockSlice.reducer;
