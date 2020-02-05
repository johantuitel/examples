import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {PersonService} from '../service/person.service';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {PersonActionTypes} from '../type/person.actions.types';
import {
  CreatePerson, CreatePersonFailure, CreatePersonSuccess, DeletePerson, DeletePersonFailure, DeletePersonSuccess,
  LoadPersons,
  LoadPersonsFailure,
  LoadPersonsSuccess,
  UpdatePerson,
  UpdatePersonFailure,
  UpdatePersonSuccess
} from '../action/person.actions';
import {of} from 'rxjs';

@Injectable()
export class PersonEffect {
  constructor(private actions$: Actions, private personService: PersonService) {}

  @Effect({dispatch: false})
  nagivateToPerson = this.actions$.pipe(
    ofType(PersonActionTypes.NAVIGATE_TO_PERSON),
    tap(() => {
      //this.router.navigateByUrl('person');
    })
  );

  @Effect()
  loadPersons$ = this.actions$.pipe(
    ofType<LoadPersons>(PersonActionTypes.LOAD_PERSONS),
    switchMap(() => {
      return this.personService.loadPersons().pipe(
        map(persons => new LoadPersonsSuccess(persons),
          catchError(error => of(new LoadPersonsFailure(error))))
      );
    })
  );

  @Effect()
  updatePerson$ = this.actions$.pipe(
    ofType<UpdatePerson>(PersonActionTypes.UPDATE_PERSON),
    switchMap((action) => {
      return this.personService.updatePerson(action.payload).pipe(
        map(person => new UpdatePersonSuccess(person),
          catchError(error => of(new UpdatePersonFailure(error))))
      );
    })
  );

  @Effect()
  createPerson$ = this.actions$.pipe(
    ofType<CreatePerson>(PersonActionTypes.CREATE_PERSON),
    switchMap((action) => {
      return this.personService.createPerson(action.payload).pipe(
        map(person => new CreatePersonSuccess(person),
          catchError(error => of(new CreatePersonFailure(error))))
      );
    })
  );

  @Effect()
  deletePerson$ = this.actions$.pipe(
    ofType<DeletePerson>(PersonActionTypes.DELETE_PERSON),
    switchMap((action) => {
      return this.personService.deletePerson(action.payload).pipe(
        map(() => new DeletePersonSuccess(action.payload),
          catchError(error => of(new DeletePersonFailure(error))))
      );
    })
  );
}
