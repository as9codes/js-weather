// API key for OpenWeatherMap
const apiKey = 'YOUR_API_KEY';

// Function to fetch weather data
function fetchWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;

      console.log(`Weather in ${city}: ${weatherDescription}`);
      console.log(`Temperature: ${temperature}°C`);
    })
    .catch(error => {
      console.log('An error occurred:', error);
    });
}

// Example usage: Fetch weather data for a specific city
const city = 'London';
fetchWeatherData(city);
