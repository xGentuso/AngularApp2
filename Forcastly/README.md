# Forecastly

Forecastly is a simple weather application that allows users to search for the current weather conditions in any city. The application fetches data from the OpenWeatherMap API and displays the current temperature, weather description, humidity, and wind speed.

## Features

- **Current Weather Data**: Displays the current temperature, weather conditions, humidity, and wind speed for the selected city.
- **User-Friendly Interface**: Built with Angular and Angular Material for a clean and responsive design.

## Technologies Used

- Angular (version 18.2.9)
- Angular Material
- RxJS
- OpenWeatherMap API

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

3. Replace the API key in `src/app/weather.service.ts` with your own OpenWeatherMap API key:

   ```typescript
   apiKey: string = 'YOUR_API_KEY';
   ```

### Running the Application

1. Start the development server:

   ```bash
   ng serve
   ```

2. Open your browser and navigate to `http://localhost:4200`.

### Using the Application

1. **Search for Weather**: Enter the name of the city you want to check the weather for in the search bar and click the "Get Weather" button.
2. **View Weather Data**: The application will display the current weather data, including:
   - **Temperature**: The current temperature in Celsius.
   - **Weather Description**: A brief description of the weather conditions (e.g., clear sky, rain).
   - **Humidity**: The current humidity percentage.
   - **Wind Speed**: The current wind speed in meters per second.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
- [Angular](https://angular.io/) for the framework used to build this application.
