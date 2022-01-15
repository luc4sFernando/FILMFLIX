import { configureStore } from "@reduxjs/toolkit";

import stockReducer from "../features/counter/stockSlice";
import localReducer from "../features/counter/localSlice"
import  filmsStorage  from "../features/counter/filmsSlice";
import { combineReducers } from "redux";

import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  stock: stockReducer,
  local: localReducer, 
  films: filmsStorage
  
});

const persistConfig = {
  key: "USER",
  storage,
  blacklist: ["local"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, localReducer
});

export const persistor = persistStore(store);
