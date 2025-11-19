import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Todos from "./components/Todos/Todos";
import Weather from "./components/Weather/Weather";
import Profile from "./components/Profile/Profile";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const theme = window.localStorage.getItem("theme") || "";
    if (theme) {
      document.body.classList.add(theme);
    }
    const language = window.localStorage.getItem("language");
    if (language === "persion") {
      document.body.classList.add("lang-fa");
    } else {
      document.body.classList.remove("lang-fa");
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
