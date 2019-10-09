import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {WeatherService} from '../service/weather.service';
import {LoadWeather, LoadWeatherFailure, LoadWeatherSuccess, StartLiveWeatherFeed, StopLiveWeatherFeed} from '../action/weather.actions';
import {WeatherActionsType} from '../type/weather.action.type';

@Injectable()
export class WeatherEffect {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}

  @Effect()
  getWeather$ = this.actions$.pipe(
    ofType<LoadWeather>(WeatherActionsType.LOAD_WEATHER),
      switchMap(() => {
        return this.weatherService.loadWeather().pipe(
          map(weather => new LoadWeatherSuccess(weather),
            catchError(error => of(new LoadWeatherFailure(error))))
        );
      })
  );

  @Effect()
  startLiveWeatherFeed$ = this.actions$.pipe(
    ofType<StartLiveWeatherFeed>(WeatherActionsType.START_LIVE_WEATHER_FEED),
    switchMap( () => {
    return this.weatherService.startLiveWeatherFeed();
    })
  );

  @Effect()
  stopLiveWeatherFeed$ = this.actions$.pipe(
    ofType<StopLiveWeatherFeed>(WeatherActionsType.STOP_LIVE_WEATHER_FEED),
    switchMap( () => {
      return this.weatherService.stopLiveWeatherFeed();
    })
  );
}
