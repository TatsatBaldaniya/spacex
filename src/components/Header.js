import React, { Component } from 'react'
import logo from './spacex.png';
export class Header extends Component {
    render() {
        return (
            <div style={HeaderColor}>
                <img src={logo} style={{
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      height:'100px',
                      width:'100px'

                }}/>
                <h1 style={HeaderStyle}>SpaceX</h1>
            </div>
        )
    }
}
const HeaderStyle={
    textAlign:'center',
    color:'yellowgreen'
    
}
const HeaderColor={
    backgroundColor:'#C6E2FF'
}

export default Header
