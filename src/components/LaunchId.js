import React from 'react'
import { useParams } from 'react-router-dom'
import IndividualLaunchDetails from './IndividualLaunchDetails';
export default function LaunchId() {
    let {id}=useParams();
    
     // console.log(id)
    const a=`https://api.spacexdata.com/v3/launches/${id}`;   
    return (
        
        <div>
            <IndividualLaunchDetails url={a} />
        </div>
    )
}
