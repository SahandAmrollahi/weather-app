import type React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Menu: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="w-[250px] flex flex-col gap-2 p-4 text-[#8CA9FF] dark:text-[#F8F8F2] dark:bg-[#6272A4] bg-[#FFF2C6]">
      <NavLink
        className={({ isActive }) =>
          `px-3 py-2 rounded ${
            isActive
              ? "bg-[#8CA9FF] dark:bg-[#FF5555]  dark:text-white text-[#FFF8DE]"
              : "dark:hover:bg-blue-200 dark:hover:text-black/75"
          }`
        }
        to="/dashboard"
      >
        {t("menu.dashboard")}
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `px-3 py-2 rounded ${
            isActive
              ? "bg-[#8CA9FF] dark:bg-[#FF5555]  dark:text-white text-[#FFF8DE]"
              : "dark:hover:bg-blue-200 dark:hover:text-black/75"
          }`
        }
        to="/todos"
      >
        {t("menu.todos")}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `px-3 py-2 rounded ${
            isActive
              ? "bg-[#8CA9FF] dark:bg-[#FF5555]  dark:text-white text-[#FFF8DE]"
              : "dark:hover:bg-blue-200 dark:hover:text-black/75"
          }`
        }
        to="/weather"
      >
        {t("menu.weather")}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `px-3 py-2 rounded ${
            isActive
              ? "bg-[#8CA9FF] dark:bg-[#FF5555]  dark:text-white text-[#FFF8DE]"
              : "dark:hover:bg-blue-200 dark:hover:text-black/75"
          }`
        }
        to="/profile"
      >
        {t("menu.profile")}
      </NavLink>
    </div>
  );
};

export default Menu;
