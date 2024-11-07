import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getLocations(query: string): Observable<string[]> {
    // Replace with your API endpoint
    return this.http.get<any>(`https://api.example.com/locations?query=${query}`)
      .pipe(map(response => response.locations));
  }
} 