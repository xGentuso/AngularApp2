import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocationService } from '../services/location.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchControl = new FormControl();
  locations: any[] = [];
  @Output() searchEvent = new EventEmitter<string>();

  constructor(private locationService: LocationService) {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => {
        if (typeof query === 'string') {
          return this.locationService.getLocations(query);
        }
        return [];
      })
    ).subscribe(results => {
      this.locations = results;
    });
  }

  onOptionSelected(location: any) {
    if (location && location.name) {
      this.searchEvent.emit(location.name);
    }
  }

  getWeather() {
    const value = this.searchControl.value;
    if (value) {
      // If value is an object (location selected from autocomplete)
      if (typeof value === 'object' && value.name) {
        this.searchEvent.emit(value.name);
      }
      // If value is a string (manually typed)
      else if (typeof value === 'string') {
        this.searchEvent.emit(value);
      }
    }
  }

  displayFn(location: any): string {
    return location ? location.name : '';
  }
}
