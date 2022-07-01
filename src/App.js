import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { Context } from "./index";
import './App.css';
import AppRoutes from './Routes/routes';
import { observer } from "mobx-react-lite";
import 'materialize-css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rightToolbar: {
    flexGrow: 1,
  },
  title: {
    marginRight: theme.spacing(2),
  },
}));

const App = observer(() => {

  const { user } = useContext(Context)
  const classes = useStyles();

  return (
    <div className={classes.root}>
          {(user.isAuth ?
            <nav>
            <div class="nav-wrapper green darken-4">
            <Link class="brand-logo pd-3r left" to="/">InHunt</Link>
              {/* <a href="/" class="brand-logo pd-3r left">InHunt</a> */}
              <ul id="nav-mobile" class="ml-12r hide-on-med-and-down">
              <li>
              <NavLink to="/me">My Profile</NavLink>
              </li>
              <li>
              <NavLink to="/myTeams">MyTeams</NavLink>
              </li>
              <li>
              <NavLink to="/options">Options</NavLink>
              </li>
              </ul>
              <Link class="right pd-2r" to="/login" onClick={() => user.setIsAuth(false)}>Unlogin</Link>
            </div>
          </nav>
            :
            <>
            <nav>
            <div class="nav-wrapper green darken-4">
              <Link to="/" class="brand-logo pd-3r left">InHunt</Link>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><Link to="login">Login</Link></li>
                <li><Link to="registration">Registration</Link></li>
              </ul>
              <Link class="right pd-2r" to="/me" onClick={() => {
user.setIsAuth(true);
user.setActiveId(22)//user ID
              }}>log</Link>
            </div>
          </nav>
              </>)
          }

      <AppRoutes />
    </div>
  );

})

export default App;
