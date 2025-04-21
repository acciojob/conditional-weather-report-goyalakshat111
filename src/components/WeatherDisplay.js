import React from "react";

const WeatherDisplay = ({weatherData})=>{

    const style = {
        color:weatherData.temperature>20?"red":"blue"
    }

    return(
        <div>
            <span style={style}>
                <p>{weatherData.temperature}</p>
            </span>
            <p>{weatherData.conditions}</p>
        </div>
    )
}

export default WeatherDisplay;