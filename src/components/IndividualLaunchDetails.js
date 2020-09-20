import React, { Component } from 'react'

export class Try extends Component {
 constructor(){
      super()
      this.state={
          launchDetails:{}//individual Launch Details
      }
 }
 componentDidMount(){ //fetching data for a particular Flight
     const axios=require('axios').default;
     const sendGetRequest=async()=>{
         try{
             const resp=await axios.get(this.props.url)
             this.setState({
                 launchDetails:resp.data
             })
             //console.log(resp.data);
         }catch(err){
              console.log('No data found');
         }
     }
     sendGetRequest();
 }
    render() {    
        console.log(this.state.launchDetails)
        return (
            <div style={{
                display:this.state.launchDetails.flight_number===undefined?'none':'block'
            }}>
                <h1 style={{
                    textAlign:'center',
                    
                }}>FlightNumber:{this.state.launchDetails.flight_number}</h1>
            </div>
        )
    }
}

export default Try
