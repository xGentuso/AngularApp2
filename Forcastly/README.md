# Forecastly

Forecastly is a simple weather application that allows users to search for the current weather conditions in any city. The application fetches data from the WeatherAPI (via RapidAPI) and displays the current temperature, weather description, humidity, wind speed, and forecasts.

## Features

- **Current Weather Data**: Displays the current temperature, weather conditions, humidity, and wind speed for the selected city.
- **Hourly Forecast**: Shows hourly weather predictions for the next 24 hours.
- **3-Day Forecast**: Provides a three-day weather forecast with high/low temperatures.
- **User-Friendly Interface**: Built with Angular and Angular Material for a clean and responsive design.

## Technologies Used

- Angular (version 18.2.9)
- Angular Material
- RxJS
- WeatherAPI (via RapidAPI)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- Angular CLI (version 12 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/forecastly.git
   cd forecastly
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Replace the API key in `src/app/weather.service.ts` with your own RapidAPI key:

   ```typescript
   private apiKey = 'YOUR_RAPIDAPI_KEY';
   ```

### Running the Application

1. Start the development server:

   ```bash
   ng serve
   ```

2. Open your browser and navigate to `http://localhost:4200`.

### Using the Application

1. **Search for Weather**: Enter the name of the city you want to check the weather for in the search bar.
2. **View Current Weather**: The application will display:
   - Current temperature in Celsius
   - Weather description
   - Humidity percentage
   - Wind speed in km/h
   - Atmospheric pressure
3. **Check Hourly Forecast**: Scroll through the hourly forecast section to see:
   - Temperature changes
   - Weather conditions
   - Time-specific predictions
4. **View 3-Day Forecast**: Check the extended forecast showing:
   - Daily high and low temperatures
   - Weather conditions for each day
   - Date and day of the week

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [WeatherAPI](https://www.weatherapi.com/) for providing the weather data API
- [RapidAPI](https://rapidapi.com/) for API access
- [Angular](https://angular.io/) for the framework used to build this application
- [Angular Material](https://material.angular.io/) for the UI components

## Contact

- **Project Maintainer**: Ryan Mota
- **Email**: [ryan.mota@triosstudent.com](mailto:ryan.mota@triosstudent.com)
- **GitHub**: [xGentuso](https://github.com/xGentuso)