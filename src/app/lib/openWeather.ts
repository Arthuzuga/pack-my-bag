import type {
  IGeolocation,
  IPlaceWeather,
  IWeather,
} from "./openWeather.types";

export const getPlaceCoordinates: (
  place: string
) => Promise<IGeolocation> = async (place: string) => {
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=1&appid=${process.env.weatherAPI}`
  );
  const data: Array<IGeolocation> = await res.json();
  return data[0];
};

export const getPlaceWeather: (
  lat: number,
  lon: number
) => Promise<Array<IWeather>> = async (lat: number, lon: number) => {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.weatherAPI}`
  );
  const data: IPlaceWeather = await res.json();
  return data.list.flatMap(({ weather }) => weather);
};

export const getWeatherData: (
  place: string
) => Promise<Array<IWeather>> = async (place: string) => {
  const coordinates = await getPlaceCoordinates(place);
  const placeWeather = await getPlaceWeather(coordinates.lat, coordinates.lon);

  return placeWeather;
};
