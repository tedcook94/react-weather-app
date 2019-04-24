import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './WeatherCard.css'

export default function WeatherCard({ dayOfWeek, icon, high, low }) {
  return (
    <Link id='link' to={`/dow/${dayOfWeek}`}>
      <div id='container'>
        <p>{dayOfWeek}</p>
        <img src={require(`../resources/${icon}.png`)} alt={icon} width='60%' />
        <div id='temps'>
          <span id='high'>{high}&#176;</span>
          <span id='low'>{low}&#176;</span>
        </div>
      </div>
    </Link>
  )
}

WeatherCard.propTypes = {
  dayOfWeek: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired
}