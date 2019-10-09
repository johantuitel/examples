import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {Observable, throwError} from 'rxjs';
import {Weather} from '../model/weather';
import {catchError} from 'rxjs/operators';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {UpdateWeather} from '../action/weather.actions';
import {AppState} from '../state/app.state';

@Injectable()
export class WeatherService {

  localhost = 'http://localhost:8080';
  weatherUrl = this.localhost + '/api/v1/weather';

  webSocketEndPoint = 'http://localhost:8080/ws';
  topic = '/topic/weather';
  stompClient: any;

  constructor(private httpClient: HttpClient, private store: Store<AppState>) { }

  loadWeather(): Observable<Weather[]> {
    return this.httpClient.get<Weather[]>(this.weatherUrl)
      .pipe(catchError((error: any) => throwError(error.json)));
  }

  startLiveWeatherFeed(): Observable<boolean> {
    const ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const thisWeatherService = this;
    thisWeatherService.stompClient.connect({}, function(frame) {
      thisWeatherService.stompClient.subscribe(thisWeatherService.topic, function(sdkEvent) {
        thisWeatherService.onMessageReceived(sdkEvent);
      });
    }, this.errorCallBack);
    return Observable.create(true);
  }

  stopLiveWeatherFeed(): Observable<boolean> {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    return Observable.create(true);
  }

  errorCallBack(error) {
    setTimeout(() => {
      this.startLiveWeatherFeed();
    }, 5000);
  }

  onMessageReceived(message) {
    const weather: Weather = new Weather();
    weather.city = JSON.parse(message.body).city;
    weather.temperature = JSON.parse(message.body).temperature;
    weather.version = JSON.parse(message.body).version;
    this.store.dispatch(new UpdateWeather(weather));
  }
}
