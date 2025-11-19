import type React from "react";
import { useLocation } from "react-router-dom";

const Header:React.FC = () => {
  const raw = useLocation().pathname;
  const title = raw.replace("/", "");
  console.log(title);

  return (
    <header className="h-[50px] flex items-center justify-center text-[#FFF2C6] dark:text-white bg-[#8CA9FF] dark:bg-[#282A36]">
      <h1 className="font-medium text-[23px]">
        {title === "" ? "my app" : title}
      </h1>
    </header>
  );
};

export default Header;
