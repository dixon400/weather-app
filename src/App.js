import { useState } from "react";
import { getCurrentWeather, getWeatherForcast } from "./api";
import "./App.css";
import CurrentWeather from "./components/current-weather/Current-weather";
import Forecast from "./components/forecast/Forecast";
import Search from "./components/search/Search";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherForcast, setWeatherForcast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const fetchCurrentWeather = getCurrentWeather(lat, lon);
    const fetchForecastWeather = getWeatherForcast(lat, lon);

    Promise.all([fetchCurrentWeather, fetchForecastWeather])
      .then(async (response) => {
        console.log({ response });
        const weatherResponse = await response[0];
        const forecastResponse = await response[1];

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setWeatherForcast({ city: searchData.label, ...forecastResponse });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  console.log({ currentWeather, weatherForcast });

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {weatherForcast && <Forecast data={weatherForcast} />}{" "}
    </div>
  );
}

export default App;
