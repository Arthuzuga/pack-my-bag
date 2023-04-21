import type { IGeolocation, IWeather } from "./openWeather.types";

export const getPlaceCoordinates: (
  place: string
) => Promise<IGeolocation> = async (place: string) => {
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=1&appid=${process.env.weatherAPI}`
  );
  return res.json();
};

export const getPlaceWeather: (
  lat: number,
  lon: number
) => Promise<IWeather> = async (lat: number, lon: number) => {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=16&appid=${process.env.weatherAPI}`
  );
  return res.json();
};

export const getWeatherData = async (place: string) => {
  const coordinates = await getPlaceCoordinates(place);
  const placeWeather = await getPlaceWeather(coordinates.lat, coordinates.lon);

  return placeWeather.list;
};
