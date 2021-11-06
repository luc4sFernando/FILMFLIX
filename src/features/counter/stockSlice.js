import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
id: '',
user: null,
signUpEmail: ''
};

export const postStock = createSlice({
  name: 'store', 
  initialState: {
    posts: []
  },
  reducers: {

    setPost: (state, action) => {
     
      state.posts = action.payload
    }

  }
})

export const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    
    
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

export const { setId, login, logout, passedEmail, newPlan} = stockSlice.actions;
export const {setPost} = postStock.actions;


export default stockSlice.reducer;
