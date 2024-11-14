export interface YahooWeatherResponse {
  location: {
    city: string;
    country: string;
  };
  current_observation: {
    condition: {
      temperature: number;
      text: string;
    };
    atmosphere: {
      humidity: number;
    };
  };
  forecasts: Array<{
    date: number;
    day: string;
    high: number;
    low: number;
    text: string;
    formattedDate?: Date;
  }>;
}

export interface HourForecast {
  time: string;
  temp_c: number;
} 