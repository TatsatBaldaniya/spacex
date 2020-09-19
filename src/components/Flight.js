import React, { Component } from 'react'

export class Flight extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.project.flight_number}</h1>
            </div>
        )
    }
}

export default Flight
