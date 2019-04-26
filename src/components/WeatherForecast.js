import React from 'react';
import PropTypes from 'prop-types'
import WeatherCard from './WeatherCard'
import './WeatherForecast.css'

export default function WeatherForecast({ days }) {
    return (
        <div id='forecast-container'>
            <div id='cards'>
                {days.data.map((day, i) => <WeatherCard
                                        key={i} 
                                        dayOfWeek={day.dow} 
                                        icon={day.icon}
                                        high={day.high}
                                        low={day.low} 
                                    />)}
            </div>
        </div>
    )
}

WeatherForecast.propTypes = {
    days: PropTypes.object.isRequired
}