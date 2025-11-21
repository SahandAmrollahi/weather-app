import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
type City = {
  admin_name: string;
  capital: string;
  city: string;
  country: string;
  id: string;
  iso2: string;
  lat: string;
  lng: string;
  population: string;
  population_proper: string;
};
type Current_weather_units = {
  time: string;
  interval: string;
  temperature: string;
  windspeed: string;
  winddirection: string;
  is_day: string;
  weathercode: string;
};
type Current_weather = {
  time: string;
  interval: number;
  temperature: number;
  windspeed: number;
  winddirection: number;
  is_day: number;
  weathercode: number;
};
type Weather = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather_units: Current_weather_units;
  current_weather: Current_weather;
};
const Weather: React.FC = () => {
  const [cities, setCities] = useState<City[] | null>(null);
  const [nameCity, setNameCity] = useState<string>("");
  const [latitude, setLatitude] = useState<string | null>(null);
  const [longitude, setLongitude] = useState<string | null>(null);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showNotice, setShowNotice] = useState<boolean>(false);
  const { t } = useTranslation();

  console.log(error);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!cities) return;

    const find = cities.find(
      (c) => c.city.toLowerCase() === nameCity.toLowerCase()
    );

    if (find) {
      setLatitude(find.lat);
      setLongitude(find.lng);
    } else {
      setError(t("weather.notification"));
      setShowNotice(true);
      setTimeout(() => {
        setShowNotice(false);
      }, 3000);
    }
  };

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3004/city");
      const data: City[] = await res.json();
      setCities(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const data: Weather = await res.json();
      console.log(data);
      setWeather(data);
    })();
  }, [latitude, longitude]);

  return (
    <div className="flex justify-center items-center w-full h-full bg-[#AAC4F5] dark:bg-[#44475A] dark:text-[#F8F8F2]">
      <form onSubmit={onSubmit}>
        <div className="card w-96 shadow-sm bg-[#6272A4]">
          {showNotice && (
            <div className="text-center text-lg text-[#8CA9FF] bg-[#FFF8DE] dark:text-[#F8F8F2] dark:bg-[#FF5555] px-3 py-2 rounded-md absolute left-[85px] -translate-x-[65px] bottom-[375px] w-[340px]">
              <span className="font-light">{error}</span>
            </div>
          )}

          <div className="card-body">
            <div className="flex justify-between gap-2">
              <input
                className="flex-1 px-1.5 outline-0 text-[15px] rounded-[5px]"
                type="text"
                name=""
                id=""
                placeholder={t("weather.placeholder")}
                onChange={(e) => setNameCity(e.target.value)}
              />

              <button
                className="btn btn-sm btn-info text-[15px] font-light text-[#F8F8F2]"
                type="submit"
              >
                {t("weather.check")}
              </button>
            </div>

            <ul className="mt-6 flex flex-col gap-2 text-lg">
              <li>
                <div className="flex justify-between">
                  <span className="">{t("weather.temperature")}</span>
                  <span className="font-bold text-[#FFF8DE] dark:text-[#BD93F9]">
                    {" "}
                    {weather?.current_weather?.temperature}
                  </span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="">{t("weather.windspeed")}</span>
                  <span className="font-bold text-[#FFF8DE] dark:text-[#BD93F9]">
                    {" "}
                    {weather?.current_weather?.windspeed}
                  </span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  {" "}
                  <span className="">{t("weather.winddirection")}</span>
                  <span className="font-bold text-[#FFF8DE] dark:text-[#BD93F9]">
                    {" "}
                    {weather?.current_weather?.winddirection}
                  </span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="">{t("weather.is_day")}</span>
                  <span className="font-bold text-[#FFF8DE] dark:text-[#BD93F9]">
                    {" "}
                    {weather?.current_weather?.is_day}
                  </span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="">{t("weather.weathercode")}</span>
                  <span className="font-bold text-[#FFF8DE] dark:text-[#BD93F9]">
                    {" "}
                    {weather?.current_weather?.weathercode}
                  </span>
                </div>
              </li>
            </ul>
            <div className="mt-6"></div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Weather;
