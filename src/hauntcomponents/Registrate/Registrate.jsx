
import { Button } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Context } from '../..';
import { getAllUser } from '../../inquiry/inquiry';
import classes from '../Auth/AuthComponent.module.css'

function Registrate () {
  const navigate = useNavigate();
  const {user} = useContext(Context)


  const [login, setLogin] = useState('')
  const [isClick, setClick] = useState(false)

  useEffect(async () => {
    user.setUser(await getAllUser())
});
  
  const sendEmail = () => {
    setClick(true);
    user.setMyUser(login);
    (user._isAuth) && navigate("/me");
  };


  const onLogOut = () => {
    navigate("/login");
  };

  return <div>
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
      <input type="text" placeholder="email address"/>
      
      <Button onClick={() => sendEmail()} variant="contained">Create</Button>
      {(!user.isAuth) && (isClick) && 
      <p class="message">Already registered? <a onClick={onLogOut} href="">Sign In</a></p>}
      
    </form>
  </div>
</div>
  </div>

}


export default Registrate;