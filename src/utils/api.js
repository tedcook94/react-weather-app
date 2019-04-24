const URL = 'https://api.weatherbit.io/v2.0/forecast/daily'
const KEY = '5680b4b4de57498c9a8612901af9edef'
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export function getForecast(days) {
    return getLocation().then(function (pos) {
        return fetch(`${URL}?units=I&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&days=${days}&key=${KEY}`)
            .then(res => res.json())
            .then(data => cleanData(data))
    })
}

function getLocation() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}

function cleanData(weatherData) {
    weatherData.data = weatherData.data.map(data => {
        return {
            dow: WEEKDAYS[new Date(data.datetime).getUTCDay()],
            weather: data.weather.description,
            icon: data.weather.icon,
            high: Math.round(data.max_temp),
            low: Math.round(data.min_temp)
        }
    });

    return weatherData;
}