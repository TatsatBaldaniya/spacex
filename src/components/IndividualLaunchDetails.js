import React, { Component } from 'react'

export class IndividualLaunchDetails extends Component {
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
        const launchDateUnix=this.state.launchDetails.launch_date_unix;
        //console.log(launchDateUnix);
        let d=new Date(launchDateUnix*1000).toLocaleString();

        let a=d.split(',');
        let launch=this.state.launchDetails.launch_success;
        console.log(launch);
        if(launch===false){
            launch='Failure';
        }else{
            launch='Success';
        }

        return (
            <div style={{
                display:this.state.launchDetails.flight_number===undefined?'none':'block'
            }}>
                <h1 style={{
                    textAlign:'center',
                    
                }}>FlightNumber:{this.state.launchDetails.flight_number}</h1>
                <p>MissionName:{this.state.launchDetails.mission_name}</p>
                <p>LaunchYear:{this.state.launchDetails.launch_year}</p>
                <p style={DateStyle}>LaunchDate:{a[0]}</p>
                <p style={TimeStyle}>LaunchTime:{a[1]}</p>
                <p style={{
                    color:launch==='Failure'?'red':'green'
                }}>Launch:{launch}</p>
            </div>
        ) 
    }
}
const TimeStyle={
    color:'yellow',
    backgroundColor:'gray'
}
const DateStyle={
    color:'red',
    fontWeight:'bold'
}
export default IndividualLaunchDetails
