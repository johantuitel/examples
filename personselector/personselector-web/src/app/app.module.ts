import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonFeatureComponent } from './person-feature/person-feature.component';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './store/reducer/app.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {PersonEffect} from './person-feature/store/effect/person.effect';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import { PersonListComponent } from './person-feature/person-list/person-list.component';
import { PersonFormComponent } from './person-feature/person-form/person-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonFeatureComponent,
    PersonListComponent,
    PersonFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(appReducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([PersonEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
