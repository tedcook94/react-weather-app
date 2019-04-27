import React, { Component } from 'react'
import { render } from 'react-dom'
import './index.css'
import { getDailyForecast, getHourlyForecast } from './utils/api'
import WeeklyForecast from './components/WeeklyForecast'
import DailyForecast from './components/DailyForecast'
import Loading from './components/Loading'
import * as serviceWorker from './serviceWorker'

class App extends Component {
    state = { 
        days: null,
        hours: null,
        loading: true 
    }

    componentDidMount() {
        this.handleFetch()
    }

    handleFetch() {
        this.setState({
            days: null,
            loading: true 
        })

        getDailyForecast(7)
            .then((days) => {
                this.setState({days})
                getHourlyForecast(24)
                    .then((hours) => {
                        this.setState({hours, loading: false})
                    })
            })
    }

    render() {
        const { days, hours, loading } = this.state
        if (loading) return <Loading />
        else return (
            <div>
                <WeeklyForecast days={days} />
                <DailyForecast hours={hours} /> 
            </div>
        )
    }
}

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
