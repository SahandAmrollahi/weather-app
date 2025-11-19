import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [showNotice, setShowNotice] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    const storedName = window.localStorage.getItem("userName");

    if (storedName) {
      setUserName(storedName);
    } else {
      setShowNotice(true);
      setTimeout(() => {
        setShowNotice(false);
      }, 3000);
    }
  }, []);
  return (
    <>
      {showNotice && (
        <div className="text-lg text-[#8CA9FF] bg-[#FFF8DE] dark:bg-[#FF5555] dark:text-[#F8F8F2] px-3 py-2 rounded-md absolute left-1/2 -translate-x-[65px] top-[100px] font-light">
          <span className="font-light">
            Please enter your name on the profile page.
          </span>
        </div>
      )}
      <div className="w-full h-full bg-[#AAC4F5] dark:bg-[#44475A] text-white p-4 flex flex-col justify-center items-center gap-3">
        <h1 className="text-[50px] text-[#F8F8F2]">
          welcome to app {userName} 🙂
        </h1>
      </div>
    </>
  );
};

export default Home;
