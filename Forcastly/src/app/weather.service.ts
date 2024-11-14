import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { YahooWeatherResponse } from '../models/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://yahoo-weather5.p.rapidapi.com/weather';
  private rapidApiKey = '20a5449258msh75caf71cc4d39dap1ea7bajsn7b82d1d5e657';

  constructor(private http: HttpClient) {}

  getForecast(city: string): Observable<YahooWeatherResponse> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.rapidApiKey,
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    });

    return this.http.get<YahooWeatherResponse>(`${this.apiUrl}?location=${city}&format=json&u=c`, { headers }).pipe(
      tap(response => console.log('Raw API Response:', response))
    );
  }
}
