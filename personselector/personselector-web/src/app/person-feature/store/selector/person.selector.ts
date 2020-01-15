import {AppState} from '../../../store/state/app.state';
import {PersonState} from '../state/person.state';
import {createSelector} from '@ngrx/store';
import {Person} from '../model/Person';

const personState = (state: AppState) => state.personState;

export const selectAllPersons = createSelector(
  personState, (state: PersonState) => state.persons
);

export const selectAllMale = createSelector(
  personState, (state: PersonState) => state.persons.filter(person => person.gender === 'MALE')
);

export const selectAllFemale = createSelector(
  personState, (state: PersonState) => state.persons.filter(person => person.gender === 'FEMALE')
);

export const selectCurrentPerson = createSelector(
  personState, (state: PersonState) => state.selectedPerson
);

export const selectPersonByUuid = createSelector(
  personState,
  (state: PersonState, id: string) => {
    return state.persons.find((value: Person) => value.uuid === id);
  }
);
