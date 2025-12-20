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
          notification: "لطفا نام خود را در صفحه پروفایل وارد کنید.",
        },
        header: {
          title: "برنامه من",
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
          add: "مورد را اضافه کن",
          what: "می‌خواهی چه کار کنی؟",
          placeholder: "می‌خوام یه کار خوب انجام بدم.",
          loading: "در حال بارگذاری ...",
          list: "لیست کارها",
          noActive: "هیچ کار فعالی ندارید",
          completed: "تکمیل شده",
          noCompleted: "هیچ کار تکمیل‌شده‌ای ندارید",
          clearAll: "پاک‌کردن همه",
          errorCreate: "ایجاد کار ناموفق بود.",
          errorComplete: "تکمیل کار ناموفق بود.",
          errorUpdate: "به‌روزرسانی کار ناموفق بود.",
          errorDelete: "حذف کار ناموفق بود.",
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
          persian: "فارسی",
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
          add: "ADD ITEM",
          what: "What do you want to do?",
          placeholder: "I want to do something good",
          loading: "loading ...",
          list: "TODO LIST",
          noActive: "No active tasks",
          completed: "COMPLETED",
          noCompleted: "No completed tasks",
          clearAll: "Clear All",
          errorCreate: "Failed to create todo",
          errorComplete: "Failed to complete todo",
          errorUpdate: "Failed to update todo",
          errorDelete: "Failed to delete todo",
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
          persian: "persian",
        },
      },
    },
  },
});

export default i18n;
