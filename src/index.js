import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'
import { getForecast } from './utils/api'
import WeatherForecast from './components/WeatherForecast'
import DailyForecast from './components/DailyForecast'
import Loading from './components/Loading'
import * as serviceWorker from './serviceWorker'

class App extends Component {
    state = { 
        days: null,
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

        getForecast(7)
            .then((days) => {
                this.setState({
                    days,
                    loading: false
                })
            })
    }

    render() {
        const { days, loading } = this.state
        if (loading) return <Loading />
        else return (
            <Router>
                <Switch>
                    <Route 
                        exact
                        path='/'
                        render={() => <WeatherForecast days={days} />}
                    />
                    <Route render={() => <h1>404: Page not found</h1>} />
                </Switch>
            </Router>
        )
    }
}

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
