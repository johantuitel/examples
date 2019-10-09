import {Weather} from '../model/weather';

export interface WeatherState {
  weather: Weather[] | null;
}
export const initialWeatherState: WeatherState = {
  weather: [],
};
