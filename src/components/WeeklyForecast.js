import React from 'react'
import PropTypes from 'prop-types'
import WeatherCard from './WeatherCard'
import './WeeklyForecast.css'

export default function WeeklyForecast({ days }) {
    return (
        <div id='forecast-container'>
            <h1>Weekly Forecast</h1>
            <div id='cards'>
                {days.data.map((day, i) => <WeatherCard
                                        key={i} 
                                        dayOfWeek={day.dow} 
                                        weather={day.weather}
                                        icon={day.icon}
                                        high={day.high}
                                        low={day.low} 
                                    />)}
            </div>
        </div>
    )
}

WeeklyForecast.propTypes = {
    days: PropTypes.object.isRequired
}