import {Person} from '../model/Person';

export interface PersonState {
  persons: Person[];
  selectedPerson: Person;
}
export const initialPersonState: PersonState = {
  persons: [],
  selectedPerson: new Person()
};
