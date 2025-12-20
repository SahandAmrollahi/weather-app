import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Theme = "light" | "dark";
type Language = "en" | "fa";
interface InitialState {
  theme: Theme;
  language: Language;
  userName: string;
}
const initialState: InitialState = {
  theme: "dark",
  language: "en",
  userName: "",
};

const settingsSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
    setLanguage(state, action: PayloadAction<Language>) {
      state.language = action.payload;
    },
    setUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
  },
});
export const { setTheme, setLanguage, setUserName } = settingsSlice.actions;
export default settingsSlice.reducer;
