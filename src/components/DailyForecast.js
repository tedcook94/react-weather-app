import React from 'react'
import PropTypes from 'prop-types'
import WeatherRow from './WeatherRow'
import './DailyForecast.css'

export default function DailyForecast({ hours }) {
    return (
        <div id='daily-forecast-container'>
            <h1>Next 24 Hours</h1>
            <div id='rows'>
                {hours.data.map((hour, i) => <WeatherRow
                                        key={i} 
                                        time={hour.time}
                                        weather={hour.weather}
                                        icon={hour.icon}
                                        precip={hour.precip}
                                        temp={hour.temp}
                                        feel={hour.feel}
                                    />)}
            </div>
            <div>
            <p id='api-link'>Weather for {`${hours.city_name}, ${hours.state_code}`} - Data provided by <a href="https://www.weatherbit.io/">Weatherbit.io</a></p>
            </div>
        </div>
    )
}

DailyForecast.propTypes = {
    hours: PropTypes.object.isRequired
}