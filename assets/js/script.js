const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key

document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});

function fetchWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=1f415b4cce7d9dd6cb242655aef549a4}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert("City not found. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("Failed to fetch weather data. Please try again later.");
        });
}

function displayWeather(data) {
    const cityName = data.name;
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    document.getElementById('cityName').innerText = `Weather in ${cityName}`;
    document.getElementById('temperature').innerText = `Temperature: ${temp}°C`;
    document.getElementById('description').innerText = `Description: ${description}`;
    document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
    document.getElementById('wind').innerText = `Wind Speed: ${windSpeed} m/s`;

    document.getElementById('weatherResult').style.display = 'block';
}
