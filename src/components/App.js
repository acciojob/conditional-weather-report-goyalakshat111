
import React,{useState} from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {

  let [weatherData,setWeatherData] = useState({ temperature: 25, conditions: "Sunny" });

  return (
    <div>
      <WeatherDisplay weatherData={weatherData} />
    </div>
  )
} 

export default App
