import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setLanguage, setTheme, setUserName } from "../../store/settingsSlice";

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [name, setName] = useState<string>("");

  // dark theme

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return;
    dispatch(setUserName(name));
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#AAC4F5] dark:bg-[#44475A] gap-5">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-md p-4 flex flex-col gap-4"
      >
        <label className="flex flex-col gap-1">
          <span className={`text-center text-sm text-[#F8F8F2]`}>
            {t("profile.name")}
          </span>
          <input
            className="border rounded px-2 py-1 text-sm outline-0 text-[#F8F8F2] placeholder:text-white/80 dark:placeholder:text-white/50"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("profile.placeholder")}
          />
        </label>

        <button
          type="submit"
          className={`px-3 py-2 text-[15px] font-light rounded bg-[#FFF2C6] dark:bg-[#BD93F9] text-[#8CA9FF] dark:text-[#44475A] font-english cursor-pointer hover:bg-[#FFF8DE] dark:hover:bg-[#F8F8F2]`}
        >
          {t("profile.save")}
        </button>
      </form>
      <div className="flex gap-2.5">
        {/* theme */}
        <div dir="rtl" className="dropdown dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 w-[200px] border-0 font-light bg-[#6272A4] text-[#F8F8F2]"
          >
            {t("profile.theme")}
          </div>
          <ul
            tabIndex={-1}
            className="bg-[#FFF8DE] text-[#6272A4] dark:bg-[#282A36] dark:text-[#F8F8F2] dropdown-content menu rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => dispatch(setTheme("dark"))}>
              <a className="block text-center">{t("profile.dark")}</a>
            </li>
            <li onClick={() => dispatch(setTheme("light"))}>
              <a className="block text-center">{t("profile.light")}</a>
            </li>
          </ul>
        </div>
        {/* language */}
        <div dir="rtl" className="dropdown dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 w-[200px] border-0 font-light bg-[#6272A4] text-[#F8F8F2]"
          >
            {t("profile.language")}
          </div>
          <ul
            tabIndex={-1}
            className="bg-[#FFF8DE] text-[#6272A4] dark:bg-[#282A36] dark:text-[#F8F8F2] dropdown-content menu rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => dispatch(setLanguage("en"))}>
              <a className="block text-center">{t("profile.english")}</a>
            </li>
            <li onClick={() => dispatch(setLanguage("fa"))}>
              <a className="block text-center">{t("profile.persian")}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
