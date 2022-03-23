import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { getMyUserThunk, identificate } from '../../hauntredux/reduserProfile';
import classes from './AuthComponent.module.css'

function AuthComponent () {    
  const navigate = useNavigate();

  const onLogOut = () => {
    navigate("/registration");
  };

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
      <Button variant="contained">Login</Button>
      <p class="message">Not registered? <a onClick={onLogOut} href="#">Create an account</a></p>
    </form>
  </div>
</div>
    )
      
  }


export default AuthComponent
