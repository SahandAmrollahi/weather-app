// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "fa", // زبان پیش‌فرض
  resources: {
    persion: {
      translation: {
        hello: "سلام 👋",
        welcome: "خوش اومدی به سایت 🙂",
      },
    },
    english: {
      translation: {
        hello: "Hello 👋",
        welcome: "Welcome to app 🙂",
      },
    },
  },
});

export default i18n;
