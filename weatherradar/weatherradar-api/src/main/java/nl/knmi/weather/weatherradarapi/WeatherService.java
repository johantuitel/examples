package nl.knmi.weather.weatherradarapi;

import java.util.List;

public interface WeatherService {

  List<Weather> findAll();

  void update(Weather weather);
}
