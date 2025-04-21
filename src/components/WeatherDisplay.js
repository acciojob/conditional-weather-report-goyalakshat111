import React from "react";

const WeatherDisplay = ({weatherData})=>{

    const style = {
        color:weatherData.temperature>20?"red":"blue"
    }

    return(
        <div>
            <span style={style}>
                <p>Temperature: {weatherData.temperature}</p>
            </span>
            <p>Conditions: {weatherData.conditions}</p>
        </div>
    )
}

export default WeatherDisplay;