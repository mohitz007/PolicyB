import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

let persistedReducer = persistReducer(persistConfig,rootReducer)


const store = configureStore({
    reducer: persistedReducer,
});

export default store;