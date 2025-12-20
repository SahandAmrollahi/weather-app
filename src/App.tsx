import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Todos from "./components/Todos/Todos";
import Weather from "./components/Weather/Weather";
import Profile from "./components/Profile/Profile";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";

const App = () => {
  const { language, theme } = useSelector((state: RootState) => state.setting);


  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("light", theme === "light");
  }, [theme]);
  useEffect(() => {
    document.body.classList.toggle("lang-fa", language === "fa");
    document.body.classList.toggle("lang-en", language === "en");
    document.body.classList.toggle("dir-rtl", language === "fa");
    document.body.classList.toggle("dir-ltr", language === "en");
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Menu />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/todos" element={<Todos />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
