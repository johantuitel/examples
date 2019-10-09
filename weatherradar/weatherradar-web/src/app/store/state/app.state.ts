import {initialWeatherState, WeatherState} from './weather.state';

export interface AppState {
  weather: WeatherState;
}

export const initialAppState: AppState = {
  weather: initialWeatherState
};

export function getInitialState(): AppState {
  return initialAppState;
}

export const weatherState = (state: AppState) => state.weather;
