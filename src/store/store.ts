import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";
import settingReducer from "./settingsSlice";
import { weatherApi } from "./services/weatherApi";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  todos: todosReducer,
  setting: settingReducer,
  [weatherApi.reducerPath]: weatherApi.reducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todos", "setting"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
}); 
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
