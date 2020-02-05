import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectCurrentPerson} from '../store/selector/person.selector';
import {AppState} from '../../store/state/app.state';
import {Person} from '../store/model/Person';
import {CreatePerson, UpdatePerson} from '../store/action/person.actions';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  person$ = this.store.pipe(select(selectCurrentPerson));
  currentPerson: Person;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.person$.subscribe(selectedPerson => this.currentPerson = selectedPerson);
  }

  onSave() {
    if (this.currentPerson.uuid) {
      this.store.dispatch(new UpdatePerson(this.currentPerson));
    } else {
      this.store.dispatch(new CreatePerson(this.currentPerson));
    }
  }
}
