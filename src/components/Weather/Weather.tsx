import React, { useEffect, useState } from "react";
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
      setError("The entered city information was not found.");
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
      const theme = window.localStorage.getItem("theme") || "";
      document.body.classList.add(theme);
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
            <div className="text-lg text-[#8CA9FF] bg-[#FFF8DE] dark:text-[#F8F8F2] dark:bg-[#FF5555] px-3 py-2 rounded-md absolute left-[85px] -translate-x-[65px] bottom-[375px] w-[340px]">
              <span className="font-light">{error}</span>
            </div>
          )}

          <div className="card-body">
            <div className="flex justify-between">
              <input
                className="w-[120px] pl-[7px] pt-0.5 border outline-0 text-[15px] rounded-[5px]"
                type="text"
                name=""
                id=""
                placeholder="city"
                onChange={(e) => setNameCity(e.target.value)}
              />

              <button
                className="btn btn-sm btn-info text-[15px] font-light text-[#F8F8F2]"
                type="submit"
              >
                Check
              </button>
            </div>

            <ul className="mt-6 flex flex-col gap-2 text-lg">
              <li>
                <span className="">temperature</span>
                <span className="font-bold absolute right-[23px] text-[#FFF8DE] dark:text-[#BD93F9]">
                  {" "}
                  {weather?.current_weather?.temperature}
                </span>
              </li>
              <li>
                <span className="">windspeed</span>
                <span className="font-bold absolute right-[23px] text-[#FFF8DE] dark:text-[#BD93F9]">
                  {" "}
                  {weather?.current_weather?.windspeed}
                </span>
              </li>
              <li>
                <span className="">winddirection</span>
                <span className="font-bold absolute right-[23px] text-[#FFF8DE] dark:text-[#BD93F9]">
                  {" "}
                  {weather?.current_weather?.winddirection}
                </span>
              </li>
              <li>
                <span className="">is_day</span>
                <span className="font-bold absolute right-[23px] text-[#FFF8DE] dark:text-[#BD93F9]">
                  {" "}
                  {weather?.current_weather?.is_day}
                </span>
              </li>
              <li>
                <span className="">weathercode</span>
                <span className="font-bold absolute right-[23px] text-[#FFF8DE] dark:text-[#BD93F9]">
                  {" "}
                  {weather?.current_weather?.weathercode}
                </span>
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
