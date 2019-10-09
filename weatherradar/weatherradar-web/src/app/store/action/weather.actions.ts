import {Action} from '@ngrx/store';
import {Weather} from '../model/weather';
import {WeatherActionsType} from '../type/weather.action.type';

export class LoadWeather implements Action {
  readonly type = WeatherActionsType.LOAD_WEATHER;
  constructor(public payload: string) {}
}

export class LoadWeatherSuccess implements Action {
  readonly type = WeatherActionsType.LOAD_WEATHER_SUCCESS;
  constructor(public payload: Weather[]) {}
}

export class LoadWeatherFailure implements Action {
  readonly type = WeatherActionsType.LOAD_WEATHER_FAILURE;
  constructor(public payload: any) {}
}

export class UpdateWeather implements Action {
  readonly type = WeatherActionsType.UPDATE_WEATHER;
  constructor(public payload: Weather) {}
}

export class UpdateWeatherSuccess implements Action {
  readonly type = WeatherActionsType.UPDATE_WEATHER_SUCCESS;
  constructor(public payload: Weather) {}
}

export class UpdateWeatherFailure implements Action {
  readonly type = WeatherActionsType.UPDATE_WEATHER_FAILURE;
  constructor(public payload: any) {}
}

export class StartLiveWeatherFeed implements Action {
  readonly type = WeatherActionsType.START_LIVE_WEATHER_FEED;
  constructor() {}
}

export class StopLiveWeatherFeed implements Action {
  readonly type = WeatherActionsType.STOP_LIVE_WEATHER_FEED;
constructor() {}
}

export type WeatherActions = LoadWeather | LoadWeatherSuccess | LoadWeatherFailure | UpdateWeather | UpdateWeatherSuccess | UpdateWeatherFailure | StartLiveWeatherFeed | StopLiveWeatherFeed;
