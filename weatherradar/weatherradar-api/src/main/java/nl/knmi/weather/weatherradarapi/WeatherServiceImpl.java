package nl.knmi.weather.weatherradarapi;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WeatherServiceImpl implements WeatherService {

  private List<Weather> weathers = new ArrayList<>();

  @Override
  public List<Weather> findAll() {
    return weathers;
  }

  @Override
  public void update(Weather weather) {
    weathers.add(weather);
  }
}
