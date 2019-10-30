import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {WeatherService} from '../service/weather.service';
import {LoadWeather, LoadWeatherFailure, LoadWeatherSuccess, StartLiveWeatherFeed, StopLiveWeatherFeed} from '../action/weather.actions';
import {WeatherActionsType} from '../type/weather.action.type';

@Injectable()
export class WeatherEffect {
    constructor(
        private actions$: Actions,
        private weatherService: WeatherService
    ) {
    }

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

    @Effect({dispatch: false})
    startLiveWeatherFeed$ = this.actions$.pipe(
        ofType<StartLiveWeatherFeed>(WeatherActionsType.START_LIVE_WEATHER_FEED),
        tap(() => {
            this.weatherService.startLiveWeatherFeed();
        })
    );

    @Effect({dispatch: false})
    stopLiveWeatherFeed$ = this.actions$.pipe(
        ofType<StopLiveWeatherFeed>(WeatherActionsType.STOP_LIVE_WEATHER_FEED),
        tap(() => {
            return this.weatherService.stopLiveWeatherFeed();
        })
    );
}
