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

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const theme = window.localStorage.getItem("theme") || "";
    if (theme) {
      document.body.classList.add(theme);
    }
    const language = window.localStorage.getItem("language");

    if (language === "persion") {
      i18n.changeLanguage("fa");
      document.body.classList.remove("lang-en");
      document.body.classList.remove("dir-ltr");
      document.body.classList.add("lang-fa");
      document.body.classList.add("dir-rtl");
    } else {
      document.body.classList.remove("lang-fa");
      document.body.classList.remove("dir-rtl");
      document.body.classList.add("lang-en");
      document.body.classList.add("dir-ltr");
    }
  }, []);
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
