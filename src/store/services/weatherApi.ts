import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { skipToken } from "@reduxjs/toolkit/query";

export interface City {
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
}
interface Current_weather_units {
  time: string;
  interval: string;
  temperature: string;
  windspeed: string;
  winddirection: string;
  is_day: string;
  weathercode: string;
}
interface Current_weather {
  time: string;
  interval: number;
  temperature: number;
  windspeed: number;
  winddirection: number;
  is_day: number;
  weathercode: number;
}
export interface Weather {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather_units: Current_weather_units;
  current_weather: Current_weather;
}
export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3004/",
  }),
  endpoints: (builder) => ({
    getCities: builder.query<City[], void>({
      query: () => "city",
    }),

    getWeather: builder.query<Weather, { latitude: string; longitude: string }>(
      {
        query: ({ latitude, longitude }) =>
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
      }
    ),
  }),
});

export const { useGetCitiesQuery, useGetWeatherQuery } = weatherApi;
export { skipToken };
