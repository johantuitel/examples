import {ActionReducerMap} from '@ngrx/store';
import {AppState} from '../state/app.state';
import {personReducer} from '../../person-feature/store/reducer/person.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  personState: personReducer,
};
