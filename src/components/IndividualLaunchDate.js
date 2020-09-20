import React, { Component } from 'react'

export class IndividualLaunchDate extends Component {
    constructor(){
        super()
        this.state={
            launchDetails:[]
        }
    }
    componentDidMount(){
        const api=`https://api.spacexdata.com/v3/launches/start=${this.props.startDate}&end=${this.props.endDate}`;
        console.log(api)
        const axios=require('axios').default
        const sendGetRequest=async()=>{
               try{
                       const resp=await axios.get(api)
                       console.log(resp.data);
               }catch(err){
                        console.log('ERROR');
               }
        }
        sendGetRequest();
    }
    render() {
        return (
            <div style={{
                display:this.props.startDate==' '||this.props.endDate==' '?'none':'block'
            }}>
               <h1 style={{
                    display:this.state.launchDetails!==[]?'none':'block'
               }}>Data Not Found</h1>
            </div>
        )
    }
}

export default IndividualLaunchDate
