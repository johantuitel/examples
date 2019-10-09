package nl.knmi.weather.weatherradarapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/weather")
public class WeatherController {

  @Autowired
  private SimpMessagingTemplate template;

  @Autowired
  private WeatherService weatherService;

  @GetMapping
  public List<Weather> findAllWeather() {
    return weatherService.findAll();
  }

  @PutMapping
  public @ResponseBody void updateWeather(@RequestBody Weather weather) {
    weatherService.update(weather);
    this.template.convertAndSend("/topic/weather",  weather);
  }
}
