import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export class IndividualLaunchDate extends Component {
    render() {
        const a='/'+this.props.details.flight_number;
        return (
            <div>
                <h1>Flight Number:{this.props.details.flight_number}</h1>
                <p style={nameStyle}>Mission_name:{this.props.details.mission_name}</p>
                <p>LaunchYear:{this.props.details.launch_year}</p>
                 <Link to={a}>click here for more details</Link>
                <hr />
            </div>
        )
    }
}
const nameStyle={
    fontWeight:'bold',
    color:'yellowgreen'
}
export default IndividualLaunchDate;
