import React from 'react';
import PropTypes from 'prop-types'
import WeatherCard from './WeatherCard'
import './WeatherForecast.css'

export default function WeatherForecast({ days }) {
    return (
        <div id='forecast-container'>
            <h1>Weekly Forecast</h1>
            <div id='cards'>
                {days.data.map((day, i) => <WeatherCard
                                        key={i} 
                                        dayOfWeek={day.dow} 
                                        icon={day.icon}
                                        high={day.high}
                                        low={day.low} 
                                    />)}
            </div>
            <p id='api-link'>Weather data provided by <a href="https://www.weatherbit.io/">Weatherbit.io</a></p>
        </div>
    )
}

WeatherForecast.propTypes = {
    days: PropTypes.object.isRequired
}