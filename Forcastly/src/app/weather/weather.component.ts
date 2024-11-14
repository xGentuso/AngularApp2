import { Component, Input, OnChanges } from '@angular/core';
import { WeatherService } from '../weather.service';
import { YahooWeatherResponse } from '../../models/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnChanges {
  @Input() city!: string;
  weatherData: any;
  forecastData: any[] = [];
  error: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnChanges() {
    if (this.city) {
      this.weatherService.getForecast(this.city).subscribe({
        next: (data: YahooWeatherResponse) => {
          console.log('Forecast Data:', data);
          this.weatherData = data.current_observation;
          
          // Process the forecast data with proper date parsing
          this.forecastData = data.forecasts.map(forecast => {
            // The date from Yahoo API comes in Unix timestamp (seconds)
            // Convert it to milliseconds for JavaScript Date
            const date = new Date(forecast.date * 1000);
            return {
              ...forecast,
              formattedDate: date
            };
          }).slice(0, 9); // Limit to 9 days of forecast
          
          this.error = '';
        },
        error: (err) => {
          console.error('Error fetching weather data:', err);
          this.error = 'Unable to fetch weather data. Please try again later.';
        }
      });
    }
  }

  capitalizeCityName(city: string): string {
    if (!city) return city;
    return city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
  }

  getWeatherIconClass(condition: string): string {
    const conditionLower = condition.toLowerCase();
    
    if (conditionLower.includes('sunny') || conditionLower.includes('clear')) {
      return 'wi wi-day-sunny';
    } else if (conditionLower.includes('rain') || conditionLower.includes('shower')) {
      return 'wi wi-rain';
    } else if (conditionLower.includes('cloud')) {
      if (conditionLower.includes('partly')) {
        return 'wi wi-day-cloudy';
      }
      return 'wi wi-cloudy';
    } else if (conditionLower.includes('storm') || conditionLower.includes('thunder')) {
      return 'wi wi-thunderstorm';
    } else if (conditionLower.includes('snow')) {
      return 'wi wi-snow';
    } else if (conditionLower.includes('fog') || conditionLower.includes('haze')) {
      return 'wi wi-fog';
    } else if (conditionLower.includes('wind')) {
      return 'wi wi-windy';
    }
    
    return 'wi wi-day-sunny'; // default icon
  }

  getCurrentDate(): Date {
    return new Date();
  }
}
