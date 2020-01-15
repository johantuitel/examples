import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFeatureComponent } from './person-feature.component';

describe('PersonFeatureComponent', () => {
  let component: PersonFeatureComponent;
  let fixture: ComponentFixture<PersonFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
