import React from 'react'
import PropTypes from 'prop-types'

export default function WeatherRow({ time, weather, icon, precip, temp, feel }) {
    return (
        <div>
            <span>{time}</span> 
            <img src={require(`../resources/${icon}.png`)} alt={weather} height="50" />
            <span>{weather}</span>
            <span>Temperature: {temp}&#176;</span>
            <span>Feels Like: {feel}&#176;</span>
            <span>Chance of Precipitation: {precip}%</span>
        </div>
    )
}

WeatherRow.propTypes = {
    time: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    precip: PropTypes.number.isRequired,
    temp: PropTypes.number.isRequired,
    feel: PropTypes.number.isRequired
}