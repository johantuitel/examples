import {initialPersonState, PersonState} from '../../person-feature/store/state/person.state';

export interface AppState {
  personState: PersonState;
}

export const initialAppState: AppState = {
  personState: initialPersonState,
};

export const personState = (state: AppState) => state.personState;
