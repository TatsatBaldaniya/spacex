import React, { Component } from 'react'
import Flight from './components/Flight';
import Header from './components/Header'
import IndividualLaunch from './components/IndividualLaunch';
import {BrowserRouter ,Switch,Route, Link} from 'react-router-dom';

import FilterDate from './components/FilterDate';

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
           const resp=await axios.get('https://api.spacexdata.com/v3/launches?limit=10')
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
    //console.log(this.state.projects[0]);
    return (
      <BrowserRouter>
           <Header />
            <Link to='/filerDate'>Filter By date</Link>
           <Route exact path='/' render={props=>(
             <React.Fragment>
                {this.state.projects.map(project=>{
                return <Flight key={project.id} project={project}/>
                })}
             </React.Fragment>
           )}/>{/*This Route is for Home Page */}
           
           <Route exact path='/:id' component={IndividualLaunch}/>
           <Route path='/filerDate' component={FilterDate} />
      </BrowserRouter>
    )
  }
}

export default App
