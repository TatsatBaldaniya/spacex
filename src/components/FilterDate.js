import React, { Component } from 'react'
import IndividualLauchDate from './IndividualLaunchDate';
export class FilterDate extends Component {
    constructor(){
        super()
        this.state={
            startDate:' ',
            endDate:' ',
            launchDetails:[]
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
    handleClick=()=>{
          console.log('An click event is fired');
            fetch(`https://api.spacexdata.com/v3/launches?start=${this.state.startDate}&end=${this.state.endDate}`).
            then(resp=>resp.json()).then((data)=>{
                //console.log(data);
                this.setState({
                    launchDetails:data
                })
            })
          }
  
    
    render(){
        
        return (
            <div>
                <input type='date' id='startDate' onChange={this.handleStartDate}/>
                <label for='startDate' >Enter Start date</label>
                <br />
                <input type='date' id='endDate' onChange={this.handleEndDate} />
                <label for='endDate'>Enter end date</label>
                <br />
                <button onClick={this.handleClick}>Filter</button>
                {this.state.launchDetails.map(details=><IndividualLauchDate key={details.id} details={details}/>)}              
                 
             </div>   
        )
    }
}

export default FilterDate
