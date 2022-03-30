import { Button } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Context } from '../..';
import { getAllUser } from '../../inquiry/inquiry';
import classes from './AuthComponent.module.css'


const AuthComponent = observer( () => {    
  const navigate = useNavigate();
  const {user} = useContext(Context)


  const [login, setLogin] = useState('')
  const [isClick, setClick] = useState(false)

  useEffect(async () => {
    user.setUser(await getAllUser());
    user.setIsAuth(false)
});
  
  const sendEmail = () => {
    setClick(true);
    user.setMyUser(login);
    (user._isAuth) && navigate("/me");
  };


  const onLogOut = () => {
    navigate("/registration");
  };

    return (
      <div className={classes.login_page}>
  <div class={classes.form}>
    <form class={classes.login_form}>
      <input onChange={e => setLogin(e.target.value)} type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <Button onClick={() => sendEmail()} variant="contained">Login</Button>
      {(!user.isAuth) && (isClick) && 
      <p class="message">Not registered? <a onClick={onLogOut} href="">Create an account</a></p>}
      
    </form>
  </div>
</div>
    )
      
  }
)

export default AuthComponent