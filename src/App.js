import React, { Component } from 'react'
import Flight from './components/Flight';
export class App extends Component {
  constructor(){
    super()
    this.state={
      projects:[],
      
    }
  }
   componentDidMount(){ // fetching data
     const axios=require('axios').default;
     const sendGetRequest=async()=>{
       try{
           const resp=await axios.get('https://api.spacexdata.com/v3/launches?limit=5')
           this.setState({
             projects:resp.data//all the projects with Flight number from 1 to 5
           })
       }catch(err){
          console.log('An error occured');
       }
     }
     sendGetRequest();
   }
  render() {
    console.log(this.state.projects[0]);
    return (
      <div>
          <h1>Hello </h1>
           {this.state.projects.map(project=>{
             return <Flight key={project.id} project={project}/>
           })}
      </div>
    )
  }
}

export default App
