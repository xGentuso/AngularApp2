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
      switchMap(query => this.locationService.getLocations(query))
    ).subscribe(results => {
      this.locations = results;
    });
  }

  onOptionSelected(location: any) {
    this.searchEvent.emit(location.name);
  }

  getWeather() {
    // Add your weather fetching logic here
  }

  displayFn(option: any): string {
    return option ? option.name : '';
  }
}
