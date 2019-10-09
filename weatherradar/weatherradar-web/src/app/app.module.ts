import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './store/reducer/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {WeatherEffect} from './store/effect/weather.effect';
import {WeatherService} from './store/service/weather.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([WeatherEffect])
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
