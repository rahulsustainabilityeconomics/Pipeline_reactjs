import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import userReducer from "./slice/userSlice";
import { rootReducer } from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';



// Define a persist config
const persistConfig: any = {
  key: 'root', // Key for the storage
  storage,
  blacklist: [],
  whitelist: ['userLogin', 'cart','cartApi', 'signupDetails','userVerify', 'employeeDetails','investeeDetails','getUserDetailsApi']
};

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  // middleware: [...getDefaultMiddleware()],
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
