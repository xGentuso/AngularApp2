import { Component, Input, OnChanges } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnChanges {
  @Input() city!: string;
  weatherData: any;
  weatherImageUrl: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnChanges() {
    if (this.city) {
      this.weatherService.getWeather(this.city).subscribe({
        next: data => {
          console.log('Weather Data:', data);
          this.weatherData = data;
          this.setWeatherImage();
        },
        error: (err: any) => console.error('Error fetching weather data:', err)
      });
    }
  }

  setWeatherImage() {
    if (this.weatherData && this.weatherData.weather && this.weatherData.weather[0]) {
      const iconCode = this.weatherData.weather[0].icon;
      this.weatherImageUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    }
  }

  capitalizeCityName(city: string): string {
    if (!city) return city;
    return city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
  }
}
