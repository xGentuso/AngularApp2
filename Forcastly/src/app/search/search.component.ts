import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  city: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  getWeather() {
    if (this.city) {
      this.searchEvent.emit(this.city);
    }
  }

  selectedCity: string = '';

  onSearch(city: string) {
    this.selectedCity = city;
  }
}
