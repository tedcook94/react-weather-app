import React from 'react';
import PropTypes from 'prop-types'
import './WeatherCard.css'

export default function WeatherCard({ dayOfWeek, weather, icon, high, low }) {
  return (
    <div id='card-container'>
      <p>{dayOfWeek}</p>
      <img src={require(`../resources/${icon}.png`)} alt={weather} />
      <div id='temps'>
        <span id='high'>{high}&#176;</span>
        <span id='low'>{low}&#176;</span>
      </div>
    </div>
  )
}

WeatherCard.propTypes = {
  dayOfWeek: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired
}