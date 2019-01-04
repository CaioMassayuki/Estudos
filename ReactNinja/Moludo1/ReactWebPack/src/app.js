'use strict'

import React, { Component } from 'react'
import Timer from './timer'

class App extends Component {
    constructor () {
        console.log('constructor')
        super()
        this.state = {
            showTimer: true,
            color: 'green',
            time: 0
        }
    }

    componentWillMount () {
        console.log('componentWillMount')
    }

    componentDidMount () {
        console.log('componentDidMount')
    }

    render() {
        console.log('render')
        return (
            <div>
                <Timer time={this.state.time}/>
                <button onClick={() => {
                    this.setState({ time: this.state.time + 10 })
                }}>Change Props</button>
            </div>
        )
    }
}

App.defaultProps

export default App