import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Person} from '../model/Person';
import {catchError} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PersonService {
  personsApiUrl = environment.domain + environment.apiVersion + '/person';

  constructor(private httpClient: HttpClient) {}

  loadPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.personsApiUrl)
      .pipe(catchError((error: any) => throwError(error.json)));
  }

  updatePerson(payload: Person) {
    return this.httpClient.put<Person>(this.personsApiUrl, payload)
      .pipe(catchError((error: any) => throwError(error.json)));
  }

  createPerson(payload: Person) {
    return this.httpClient.post<Person>(this.personsApiUrl, payload)
      .pipe(catchError((error: any) => throwError(error.json)));
  }

  deletePerson(payload: string) {
    return this.httpClient.delete(this.personsApiUrl + '/' + payload)
      .pipe(catchError((error: any) => throwError(error.json)));
  }
}
