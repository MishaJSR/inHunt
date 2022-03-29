import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Context } from '../..';
import { getAllUser } from '../../inquiry/inquiry';
import classes from './AuthComponent.module.css'


function AuthComponent (props) {    
  const navigate = useNavigate();
  const {user} = useContext(Context)


  const [login, setLogin] = useState('')

  useEffect(async () => {
    user.setUser(await getAllUser())
});
  
  const sendEmail = () => {
    user.setMyUser(login);
    (user._isAuth) && navigate("/me");
  };


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
      <input onChange={e => setLogin(e.target.value)} type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <Button onClick={() => sendEmail()} variant="contained">Login</Button>
      <p class="message">Not registered? <a onClick={onLogOut} href="#">Create an account</a></p>
    </form>
  </div>
</div>
    )
      
  }

export default AuthComponent