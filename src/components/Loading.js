import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Loading.css'

export default class Loading extends Component {
    state = { content: this.props.text }

    componentDidMount() {
        const { speed, text } = this.props

        this.interval = window.setInterval(() => {
            this.state.content === text + '...'
                ? this.setState({content: text})
                : this.setState(({ content }) => ({content: content + '.'}))
        }, speed)
    }

    componentWillUnmount() {
        window.clearInterval(this.interval)
    }

    render() {
        return (
            <p id="loading">
                {this.state.content}
            </p>
        )
    }
}

Loading.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
    text: 'Loading',
    speed: 500
}