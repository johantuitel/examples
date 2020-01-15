import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectAllFemale, selectAllMale, selectAllPersons} from '../store/selector/person.selector';
import {AppState} from '../../store/state/app.state';
import {DeletePerson, EditPerson, LoadPersons} from '../store/action/person.actions';
import {Person} from '../store/model/Person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons$ = this.store.pipe(select(selectAllPersons));

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadPersons());
  }

  editPerson(person: Person) {
    this.store.dispatch(new EditPerson(person));
  }

  deletePerson(uuid: any) {
    this.store.dispatch(new DeletePerson(uuid));
  }

  selectPersons($event: Event) {
    const selectedValue = ($event.target as HTMLInputElement).value;
    if ('all' === selectedValue) {
      this.persons$ = this.store.pipe(select(selectAllPersons));
    } else if ('female' === selectedValue) {
      this.persons$ = this.store.pipe(select(selectAllFemale));
    } else if ('male' === selectedValue) {
      this.persons$ = this.store.pipe(select(selectAllMale));
    }
  }

}
