import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { getMyUserThunk } from '../../hauntredux/reduserProfile';

class MyProfile extends React.Component {

componentDidMount () {
  this.props.getMyUserThunk()
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

let mapStateToProps = (state) => {
  return {
    users: state.profilePage.users,
    myUser: state.profilePage.myUser
  }
}

export default connect (mapStateToProps, {getMyUserThunk}) (MyProfile)