import {Component, OnDestroy, OnInit} from '@angular/core';
import {selectAllWeather} from './store/selector/weather.selector';
import {select, Store} from '@ngrx/store';
import {AppState} from './store/state/app.state';
import {LoadWeather, StartLiveWeatherFeed, StopLiveWeatherFeed} from './store/action/weather.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'weatherradar-web';
  weather$ = this.store.pipe(select(selectAllWeather));

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loadWeather();
    this.startLiveWeatherFeed();
  }

  ngOnDestroy(): void {
    this.stopLiveWeatherFeed();
  }

  loadWeather(): void {
    this.store.dispatch(new LoadWeather('someid'));
  }

  startLiveWeatherFeed(): void {
    this.store.dispatch(new StartLiveWeatherFeed());
  }

  stopLiveWeatherFeed(): void {
    this.store.dispatch(new StopLiveWeatherFeed());
  }
}
