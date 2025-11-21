// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  resources: {
    fa: {
      translation: {
        home: {
          welcome: "خوش اومدی به سایت",
          notification: ".لطفا نام خود را در صفحه پروفایل وارد کنید",
        },
        header: {
          header: "برنامه من",
          dashboard: "داشبورد",
          todos: "کارها",
          weather: "آب و هوا",
          profile: "پروفایل",
        },
        menu: {
          dashboard: "داشبورد",
          todos: "کارها",
          weather: "آب و هوا",
          profile: "پروفایل",
        },
        dashboard: {
          morning: "صبح بخیر",
          afternoon: "ظهر بخیر",
          evening: "عصر بخیر",
          night: "شب بخیر",
        },
        todo: {
          title: "لیست کار",
          add: "اضافه کن",
          placeholder: "کار جدید ...",
        },
        weather: {
          temperature: "دما",
          windspeed: "سرعت باد",
          winddirection: "جهت باد",
          is_day: "روز است",
          weathercode: "کد آب و هوا",
          check: "بررسی کن",
          placeholder: "شهر ...",
          notification: "اطلاعات شهر وارد شده یافت نشد.",
        },
        profile: {
          name: "نام",
          placeholder: "نام ...",
          save: "ذخیره کن",
          language: "⬇️ زبان",
          theme: "⬇️ تم",
          dark: "تاریک",
          light: "روشن",
          english: "انگلیسی",
          persion: "فارسی",
        },
      },
    },
    en: {
      translation: {
        home: {
          welcome: "welcome to app",
          notification: "Please enter your name on the profile page.",
        },
        header: {
          title: "my app",
          dashboard: "dashboard",
          todos: "todos",
          weather: "weather",
          profile: "profile",
        },
        menu: {
          dashboard: "dashboard",
          todos: "todos",
          weather: "weather",
          profile: "profile",
        },
        dashboard: {
          morning: "Good Morning",
          afternoon: "Good Afternoon",
          evening: "Good Evening",
          night: "Good Night",
        },
        todo: {
          title: "todo list",
          add: "add",
          placeholder: "New Todo ...",
        },
        weather: {
          temperature: "temperature",
          windspeed: "windspeed",
          winddirection: "winddirection",
          is_day: "is_day",
          weathercode: "weathercode",
          check: "Check",
          placeholder: "city ...",
          notification: "The entered city information was not found.",
        },
        profile: {
          name: "Name",
          placeholder: "Name ...",
          save: "save",
          language: "Language ⬇️",
          theme: "theme ⬇️",
          dark: "dark",
          light: "light",
          english: "english",
          persion: "persion",
        },
      },
    },
  },
});

export default i18n;
