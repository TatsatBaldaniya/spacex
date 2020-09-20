import React, { Component } from 'react'
import IndividualLauchDate from './IndividualLaunchDate';
export class FilterDate extends Component {
    constructor(){
        super()
        this.state={
            startDate:' ',
            endDate:' '
        }
    }
    handleStartDate=(e)=>{
        //console.log('start date is changed');
        //console.log(e.target.value)
        this.setState({
            startDate:e.target.value
        })

    }
    handleEndDate=(e)=>{
        //console.log('end date is changed');
        //console.log(e.target.value)
        this.setState({
            endDate:e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type='date' id='startDate' onChange={this.handleStartDate}/>
                <label for='startDate' >Enter Start date</label>
                <br />
                <input type='date' id='endDate' onChange={this.handleEndDate} />
                <label for='endDate'>Enter end date</label>
                <br />
                <IndividualLauchDate startDate={this.state.startDate} endDate={this.state.endDate}/>                 

             </div>   
        )
    }
}

export default FilterDate
