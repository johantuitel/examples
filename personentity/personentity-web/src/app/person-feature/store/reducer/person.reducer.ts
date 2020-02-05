import {initialPersonState, PersonState} from '../state/person.state';
import {PersonActions} from '../action/person.actions';
import {PersonActionTypes} from '../type/person.actions.types';
import {Person} from '../model/Person';

export function personReducer(
  state: PersonState = initialPersonState,
  action: PersonActions
): PersonState {
  switch (action.type) {
    case PersonActionTypes.NAVIGATE_TO_PERSON: {
      return {
        ...state
      };
    }
    case PersonActionTypes.LOAD_PERSONS: {
      return {
        ...state
      };
    }
    case PersonActionTypes.LOAD_PERSONS_SUCCESS: {
      return {
        ...state,
        persons: action.payload
      };
    }
    case PersonActionTypes.LOAD_PERSONS_FAILURE: {
      return {
        ...state
      };
    }
    case PersonActionTypes.CREATE_PERSON: {
      return {
        ...state
      };
    }
    case PersonActionTypes.CREATE_PERSON_SUCCESS: {
      return {
        ...state,
        persons: [...state.persons, action.payload],
        selectedPerson: new Person()
      };
    }
    case PersonActionTypes.CREATE_PERSON_FAILURE: {
      return {
        ...state
      };
    }
    case PersonActionTypes.EDIT_PERSON: {
      return {
        ...state,
        selectedPerson: action.payload
      };
    }
    case PersonActionTypes.UPDATE_PERSON: {
      return {
        ...state
      };
    }
    case PersonActionTypes.UPDATE_PERSON_SUCCESS: {
      const person = JSON.parse(JSON.stringify(action.payload));
      const index = state.persons.findIndex(item => item.uuid === person.uuid);
      state.persons.splice(index, 1, person);
      return {
        ...state,
        selectedPerson: new Person()
      };
    }
    case PersonActionTypes.UPDATE_PERSON_FAILURE: {
      return {
        ...state
      };
    }
    case PersonActionTypes.DELETE_PERSON: {
      return {
        ...state
      };
    }
    case PersonActionTypes.DELETE_PERSON_SUCCESS: {
      const index = state.persons.findIndex(item => item.uuid === action.payload);
      state.persons.splice(index, 1);
      return {
        ...state,
        selectedPerson: new Person()
      };
    }
    case PersonActionTypes.DELETE_PERSON_FAILURE: {
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
}
