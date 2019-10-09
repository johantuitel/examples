import {initialWeatherState, WeatherState} from '../state/weather.state';
import {WeatherActions} from '../action/weather.actions';
import {WeatherActionsType} from '../type/weather.action.type';

export const weatherReducer = (
  state: WeatherState = initialWeatherState,
  action: WeatherActions
): WeatherState => {
  switch (action.type) {
    case WeatherActionsType.LOAD_WEATHER: {
      return {
        ...state
      };
    }
    case WeatherActionsType.LOAD_WEATHER_SUCCESS: {
      return {
        ...state,
        weather: action.payload
      };
    }
    case WeatherActionsType.LOAD_WEATHER_FAILURE: {
      return {
        ...state
      };
    }
    case WeatherActionsType.UPDATE_WEATHER: {
      const index = state.weather.findIndex(item => item.city === action.payload.city);
      if (index < 0) {
          state.weather.push({city: action.payload.city, temperature: action.payload.temperature, version: action.payload.version});
        } else {
          state.weather.splice(index, 1, {city: action.payload.city, temperature: action.payload.temperature, version: action.payload.version});
        }
      return state;
    }
    case WeatherActionsType.UPDATE_WEATHER_SUCCESS: {
      return {
        ...state
      };
    }
    case WeatherActionsType.UPDATE_WEATHER_FAILURE: {
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
};
