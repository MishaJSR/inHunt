import React, { useEffect, useState } from 'react';
import Play from './StartPage';
import axios from "axios";

class Players extends React.Component {

  componentDidMount() {
    axios.get(`http://83.220.174.93:2048/Players`)
    .then(
        response => {
          debugger
            return response
        })
  }
    
  render() {
    
    return (<div></div>
    // <div>
    //   <Play pl={this.props.players} gU={this.getUsers}/>
    //   <button onClick={this.getUsers}>Нажми</button>
    //       {this.props.players.map(Elem =>
    //         <button>{Elem.Email}</button>)}
    //   </div>
    )
      
      
  }
}


export default Players;