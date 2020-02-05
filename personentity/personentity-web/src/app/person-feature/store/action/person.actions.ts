import {Action} from '@ngrx/store';
import {PersonActionTypes} from '../type/person.actions.types';
import {Person} from '../model/Person';

export class NavigateToPerson implements Action {
  readonly type = PersonActionTypes.NAVIGATE_TO_PERSON;
  constructor() {}
}

export class LoadPersons implements Action {
  readonly type = PersonActionTypes.LOAD_PERSONS;
  constructor() {}
}

export class LoadPersonsSuccess implements Action {
  readonly type = PersonActionTypes.LOAD_PERSONS_SUCCESS;
  constructor(public payload: Person[]) {}
}

export class LoadPersonsFailure implements Action {
  readonly type = PersonActionTypes.LOAD_PERSONS_FAILURE;
  constructor(public payload: any) {}
}

export class CreatePerson implements Action {
  readonly type = PersonActionTypes.CREATE_PERSON;
  constructor(public payload: Person) {}
}

export class CreatePersonSuccess implements Action {
  readonly type = PersonActionTypes.CREATE_PERSON_SUCCESS;
  constructor(public payload: Person) {}
}

export class CreatePersonFailure implements Action {
  readonly type = PersonActionTypes.CREATE_PERSON_FAILURE;
  constructor(public payload: any) {}
}

export class EditPerson implements Action {
  readonly type = PersonActionTypes.EDIT_PERSON;
  constructor(public payload: Person) {}
}

export class UpdatePerson implements Action {
  readonly type = PersonActionTypes.UPDATE_PERSON;
  constructor(public payload: Person) {}
}

export class UpdatePersonSuccess implements Action {
  readonly type = PersonActionTypes.UPDATE_PERSON_SUCCESS;
  constructor(public payload: Person) {}
}

export class UpdatePersonFailure implements Action {
  readonly type = PersonActionTypes.UPDATE_PERSON_FAILURE;
  constructor(public payload: any) {}
}

export class DeletePerson implements Action {
  readonly type = PersonActionTypes.DELETE_PERSON;
  constructor(public payload: string) {}
}

export class DeletePersonSuccess implements Action {
  readonly type = PersonActionTypes.DELETE_PERSON_SUCCESS;
  constructor(public payload: string) {}
}

export class DeletePersonFailure implements Action {
  readonly type = PersonActionTypes.DELETE_PERSON_FAILURE;
  constructor(public payload: any) {}
}

export type PersonActions = NavigateToPerson | LoadPersons | LoadPersonsSuccess | LoadPersonsFailure | CreatePerson | CreatePersonSuccess | CreatePersonFailure | EditPerson | UpdatePerson | UpdatePersonSuccess | UpdatePersonFailure | DeletePerson | DeletePerson | DeletePersonSuccess | DeletePersonFailure;
