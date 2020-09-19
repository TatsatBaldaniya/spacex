import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class IndividualFlight extends Component {
    render() {
        const a='/'+this.props.individual.flight_number;
        return (
            <div>
                <h1>Flight Number:{this.props.individual.flight_number}</h1>
                <p>Mission_name:{this.props.individual.mission_name}</p>
                <p>LaunchYear:{this.props.individual.launch_year}</p>
                 <Link to={a} >Click To Get More Details</Link>

            </div>
        )
    }
}

export default IndividualFlight;
