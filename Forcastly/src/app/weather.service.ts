import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey: string = '1d00a2f4f4e4c367ef013910930cf3f6';
  apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`);
  }
}
