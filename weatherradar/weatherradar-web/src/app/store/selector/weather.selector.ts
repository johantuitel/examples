import {createSelector} from '@ngrx/store';
import {WeatherState} from '../state/weather.state';
import {AppState} from '../state/app.state';

const selectWeather = (state: AppState) => state.weather;

export const selectAllWeather = createSelector(
  selectWeather, (state: WeatherState) => state.weather
);
