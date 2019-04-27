const URL = 'https://api.weatherbit.io/v2.0/forecast/'
const KEY = '5680b4b4de57498c9a8612901af9edef'
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export function getDailyForecast(days) {
    return getLocation().then(function (pos) {
        return fetch(`${URL}daily?units=I&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&days=${days}&key=${KEY}`)
            .then(res => res.json())
            .then(data => cleanDailyData(data))
    })
}

export function getHourlyForecast(hours) {
    return getLocation().then(function (pos) {
        return fetch(`${URL}hourly?units=I&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&hours=${hours}&key=${KEY}`)
            .then(res => res.json())
            .then(data => cleanHourlyData(data))
    })
}

function getLocation() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}

function cleanDailyData(weatherData) {
    weatherData.data = weatherData.data.map(data => {
        return {
            dow: WEEKDAYS[new Date(data.datetime).getUTCDay()],
            weather: data.weather.description,
            icon: data.weather.icon,
            high: Math.round(data.max_temp),
            low: Math.round(data.min_temp)
        }
    })

    return weatherData
}

function cleanHourlyData(weatherData) {
    weatherData.data = weatherData.data.map(data => {
        return {
            time: data.timestamp_local.substr(-8, 5),
            weather: data.weather.description,
            icon: data.weather.icon,
            precip: data.pop,
            temp: Math.round(data.temp),
            feel: Math.round(data.app_temp)
        }
    })

    return weatherData
}