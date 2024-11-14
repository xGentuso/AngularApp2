import { Component, Input, OnChanges } from '@angular/core';
import { WeatherService } from '../weather.service';


interface HourlyForecast {
  time: string;
  temp: number;
  condition: string;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnChanges {
  @Input() city: string = '';
  weatherData: any;
  hourlyForecast: any[] = [];
  threeDayForecast: any[] = [];
  error: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnChanges() {
    if (this.city) {
      this.weatherService.getForecast(this.city, 3).subscribe({
        next: (data: any) => {
          console.log('Weather Data:', data);
          
          // Current weather
          this.weatherData = {
            condition: {
              temperature: data.current.temp_c,
              text: data.current.condition.text,
              icon: data.current.condition.icon
            },
            atmosphere: {
              humidity: data.current.humidity,
              pressure: data.current.pressure_mb
            },
            wind: {
              speed: data.current.wind_kph,
              direction: data.current.wind_dir
            },
            precipitation: data.current.precip_mm
          };

          // Get current hour
          const currentTime = new Date();
          
          // Filter and map hourly forecast starting from current hour
          this.hourlyForecast = data.forecast.forecastday[0].hour
            .filter((hour: any) => new Date(hour.time) >= new Date())
            .map((hour: any) => ({
              time: new Date(hour.time).toLocaleTimeString('en-US', { 
                hour: 'numeric',
                hour12: true 
              }),
              temp: Math.round(hour.temp_c),
              condition: hour.condition.text,
              icon: hour.condition.icon,
              chance_of_rain: hour.chance_of_rain,
              wind_kph: hour.wind_kph
            }));

          // If we need more hours, get them from the next day
          if (this.hourlyForecast.length < 24) {
            const nextDayHours = data.forecast.forecastday[1].hour
              .slice(0, 24 - this.hourlyForecast.length)
              .map((hour: any) => {
                const hourTime = new Date(hour.time);
                return {
                  time: hourTime.toLocaleTimeString('en-US', { 
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true
                  }).toUpperCase(),
                  temp: Math.round(hour.temp_c),
                  condition: hour.condition.text,
                  icon: hour.condition.icon
                };
              });
            
            this.hourlyForecast = [...this.hourlyForecast, ...nextDayHours];
          }

          // Daily forecast
          this.threeDayForecast = data.forecast.forecastday.map((day: any) => ({
            date: day.date_epoch,
            formattedDate: new Date(day.date),
            high: Math.round(day.day.maxtemp_c),
            low: Math.round(day.day.mintemp_c),
            text: day.day.condition.text,
            icon: day.day.condition.icon,
            daily_chance_of_rain: day.day.daily_chance_of_rain,
            maxwind_kph: day.day.maxwind_kph,
            sunrise: day.astro.sunrise,
            sunset: day.astro.sunset
          }));

          this.error = '';
        },
        error: (error) => {
          console.error('Error fetching weather data:', error);
          this.error = 'Error fetching weather data. Please try again.';
        }
      });
    }
  }

  getWeatherIconClass(condition: string): string {
    if (!condition) return 'wi wi-day-sunny';
    
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes('rain')) {
      return 'wi wi-rain';
    } else if (conditionLower.includes('cloud')) {
      return 'wi wi-cloudy';
    } else if (conditionLower.includes('clear') || conditionLower.includes('sunny')) {
      return 'wi wi-day-sunny';
    } else if (conditionLower.includes('fog')) {
      return 'wi wi-fog';
    }
    return 'wi wi-day-sunny';
  }
}
