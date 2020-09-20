import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route, BrowserRouter} from 'react-router-dom';
import IndividualFlight from './IndividualFlight';

export class Flight extends Component {
    render() {
        return (
            <div>
                <IndividualFlight individual={this.props.project} />   
                <hr />             
            </div>
        )
    }
}

export default Flight
