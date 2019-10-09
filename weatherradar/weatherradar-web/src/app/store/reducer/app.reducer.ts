import {ActionReducerMap} from '@ngrx/store';
import {AppState} from '../state/app.state';
import {weatherReducer} from './weather.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  weather: weatherReducer
};
