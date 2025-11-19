import type React from "react";
import { NavLink } from "react-router-dom";

const Menu:React.FC = () => {
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
        Dashboard
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
        Todos
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
        Weather
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
        Profile
      </NavLink>
    </div>
  );
};

export default Menu;
