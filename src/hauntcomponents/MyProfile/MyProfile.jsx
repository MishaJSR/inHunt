import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

class MyProfile extends React.Component {

componentDidMount () {

}

render() {
  let a = this.props;

  // let a = "bogda@list.ru"
  return <div>

    {(this.props.myUser === null)? <span> Null </span>: 
    this.props.myUser.map(e => <div>{e.email}</div>)}
	  
  </div>
}

}

export default MyProfile