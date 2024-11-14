import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'https://weatherapi-com.p.rapidapi.com/search.json';
  private rapidApiKey = '20a5449258msh75caf71cc4d39dap1ea7bajsn7b82d1d5e657';

  constructor(private http: HttpClient) {}

  getLocations(query: string): Observable<any[]> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.rapidApiKey,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    });

    return this.http.get<any[]>(`${this.apiUrl}?q=${query}`, { headers }).pipe(
      map(response => response.map(location => ({
        name: location.name,
        region: location.region,
        country: location.country,
        lat: location.lat,
        lon: location.lon
      })))
    );
  }
} 