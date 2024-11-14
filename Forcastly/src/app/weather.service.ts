import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl = 'https://weatherapi-com.p.rapidapi.com';
  private apiKey = '20a5449258msh75caf71cc4d39dap1ea7bajsn7b82d1d5e657';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    });
  }

  // Realtime Weather API
  getCurrentWeather(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/current.json`, {
      headers: this.getHeaders(),
      params: { q: query }
    });
  }

  // Forecast Weather API
  getForecast(query: string, days: number = 14): Observable<any> {
    return this.http.get(`${this.baseUrl}/forecast.json`, {
      headers: this.getHeaders(),
      params: { q: query, days: days.toString() }
    });
  }

  // Search/Autocomplete API
  searchLocations(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search.json`, {
      headers: this.getHeaders(),
      params: { q: query }
    });
  }

  // History Weather API
  getHistory(query: string, dt: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/history.json`, {
      headers: this.getHeaders(),
      params: { q: query, dt: dt }
    });
  }

  // Marine Weather API
  getMarine(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/marine.json`, {
      headers: this.getHeaders(),
      params: { q: query }
    });
  }

  // Future Weather API
  getFutureWeather(query: string, dt: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/future.json`, {
      headers: this.getHeaders(),
      params: { q: query, dt: dt }
    });
  }

  // Time Zone API
  getTimezone(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/timezone.json`, {
      headers: this.getHeaders(),
      params: { q: query }
    });
  }

  // Sports API
  getSports(): Observable<any> {
    return this.http.get(`${this.baseUrl}/sports.json`, {
      headers: this.getHeaders()
    });
  }

  // Astronomy API
  getAstronomy(query: string, dt: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/astronomy.json`, {
      headers: this.getHeaders(),
      params: { q: query, dt: dt }
    });
  }

  // IP Lookup API
  getIpLookup(q: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/ip.json`, {
      headers: this.getHeaders(),
      params: { q }
    });
  }
} 