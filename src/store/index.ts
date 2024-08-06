import { configureStore } from '@reduxjs/toolkit';
/// <reference types="redux-persist" />
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { persistStore } from 'redux-persist';

import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import filterReducer from "./filterSlice";
import cartReducer  from "./cartSlice";
import userReducer from './userSlice';

const persistConfig = {
    key: 'root',
	storage,
}

const rootReducer = combineReducers({ 
    cart: cartReducer,
    filter: filterReducer,
    user: userReducer,
 })

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
    return configureStore({
        // reducer: {
        //     cart: cartReducer,
        //     filter: filterReducer,
        //     user: userReducer,
            
    
        // },
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            },
        }) 
    })
  }

// const store = configureStore({
//     reducer: persistedReducer});

//   export const persistor = persistStore(makeStore());
export const persistor = persistStore(makeStore());
// export default store;

  // Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']