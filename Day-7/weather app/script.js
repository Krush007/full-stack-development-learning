const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
    const city = cityInput.value.trim();

    if (!city) {
        weatherResult.innerHTML =
            '<p class="error">Please enter a city name.</p>';
        return;
    }

    if (!/^[a-zA-Z\s]+$/.test(city)) {
        weatherResult.innerHTML =
            '<p class="error">❌ City name should contain letters only.</p>';
        return;
    }

    weatherResult.innerHTML =
        '<p class="loading">Loading...</p>';

    try {
        const cityResponse = await fetch(
            `https://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${encodeURIComponent(city)}&limit=1`
        );

        const cityData = await cityResponse.json();

        if (
            cityData.data.length === 0 ||
            cityData.data[0].name.toLowerCase() !== city.toLowerCase()
        ) {
            throw new Error("City not found");
        }

        const weatherResponse = await fetch(
            `https://wttr.in/${encodeURIComponent(city)}?format=j1`
        );

        const weatherData = await weatherResponse.json();

        const current = weatherData.current_condition[0];

        weatherResult.innerHTML = `
            <div class="weather-card">
                <h2>${cityData.data[0].name}</h2>
                <p><strong>Temperature:</strong> ${current.temp_C}°C</p>
                <p><strong>Feels Like:</strong> ${current.FeelsLikeC}°C</p>
                <p><strong>Humidity:</strong> ${current.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${current.windspeedKmph} km/h</p>
                <p><strong>Weather:</strong> ${current.weatherDesc[0].value}</p>
            </div>
        `;
    } catch (error) {
        weatherResult.innerHTML =
            '<p class="error">❌ City not found. Please enter a valid city name.</p>';
    }
}