import React, { useEffect, useState } from "react";

const Dashboard: React.FC = () => {
  const [time, setTime] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");
  const userName = window.localStorage.getItem("userName");
  const username = userName === null ? "" : userName;

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const hoursStr = String(hours).padStart(2, "0");
    const minutesStr = String(minutes).padStart(2, "0");

    setTime(`${hoursStr}:${minutesStr}`);
    let msg = "";
    if (hours >= 5 && hours < 12) {
      msg = `Good Morning ${username} 🌤️`;
    } else if (hours >= 12 && hours < 17) {
      msg = `Good Afternoon ${username}☀️ `;
    } else if (hours >= 17 && hours < 21) {
      msg = `Good Evening ${username} 🌇 `;
    } else {
      msg = `Good Night ${username}🌙`;
    }
    setGreeting(msg);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center w-full h-full dark:bg-[#44475A] bg-[#AAC4F5] dark:text-white p-4 gap-4">
      <p style={{ color: "#F8F8F2" }} className={`text-[50px]`}>
        {time}
      </p>
      <div style={{ color: "#F8F8F2" }} className={`text-[40px]`}>
        {greeting}
      </div>
    </div>
  );
};

export default Dashboard;
