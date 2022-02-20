import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import stockReducer from "../features/reducers/stockSlice";
import localReducer from "../features/reducers/localSlice"
import  filmsStorage  from "../features/reducers/filmsSlice";
import { combineReducers } from "redux";

import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist/es/constants";
import  profilesReducer  from "../features/reducers/profiles.slice";

const rootReducer = combineReducers({
  stock: stockReducer,
  local: localReducer, 
  films: filmsStorage,
  profiles: profilesReducer
  
});

const persistConfig = {
  key: "USER",
  storage,
  blacklist: ["local"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, localReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
