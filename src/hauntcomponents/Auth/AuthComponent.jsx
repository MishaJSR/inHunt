import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getMyUserThunk, identificate } from '../../hauntredux/reduserProfile';
import classes from './AuthComponent.module.css'



class AuthComponent extends React.Component {

  componentDidMount() {
    this.props.getMyUserThunk()
    this.props.identificate("bogda@list.ru")
  }

    
  render() {
    
    return (
      <div className={classes.login_page}>
  <div class={classes.form}>
    <form class={classes.register_form}>
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <form class={classes.login_form}>
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>

      <NavLink  to={"/me"} className={classes.buttonStart}>Login</NavLink>
      <p class="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
    )
      
  }
}

let mapStateToProps = (state) => {
  return {
    myUser: state.profilePage.myUser
  }
}

export default connect (mapStateToProps, {identificate, getMyUserThunk}) (AuthComponent)
