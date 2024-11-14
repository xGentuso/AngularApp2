export interface OpenWeatherResponse {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: [{
    main: string;
    description: string;
    icon: string;
  }];
  visibility: number;
  name: string;
  dt: number;
}

export interface HourForecast {
  time: string;
  temp: number;
  condition: string;
} 