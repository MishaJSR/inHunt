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
import { Link } from 'react-router-dom';
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

          {/* <Typography variant="h6" className={classes.title}>
            InHunt
          </Typography>
          <div className={classes.rightToolbar}>
            <Button color="inherit" component={Link} to="/">
              StartPage
            </Button>
          </div> */}
          {(user.isAuth ?
            <nav>
            <div class="nav-wrapper green darken-4">
              <a href="/" class="brand-logo pd-3r left">InHunt</a>
              <ul id="nav-mobile" class="ml-12r hide-on-med-and-down">
                <li><a href="me">My Profile</a></li>
                <li><a href="myTeams">MyTeams</a></li>
                <li><a href="options">Options</a></li>
              </ul>
              <a class="right pd-2r" href="/login" onClick={() => user.setIsAuth(false)}>Unlogin</a>
            </div>
          </nav>
            // <div className={classes.rightToolbar}>
            //   <Button color="inherit" component={Link} to="/me">
            //     My Profile
            //   </Button>
            //   <Button color="inherit" component={Link} to="/myTeams">
            //     My teams
            //   </Button>
            //   <Button color="inherit" component={Link} to="/findPlayer">
            //     Find Players
            //   </Button>
            //   <Button color="inherit" component={Link} to="/topTeams">
            //     Top Teams
            //   </Button>
            //   <Button color="inherit" component={Link} to="/options">
            //     Options
            //   </Button>
            //   <>
            //   <Button color="inherit" component={Link} to="/me">
            //     firstName lastName
            //   </Button>
            //   <Button onClick={() => user.setIsAuth(false)}  color="inherit" component={Link} to="/login">
            //     Log out
            //   </Button>
            //   </>
            // </div> 
            :
            <>
            <nav>
            <div class="nav-wrapper green darken-4">
              <a href="/" class="brand-logo pd-3r left">InHunt</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="login">Login</a></li>
                <li><a href="registration">Registration</a></li>
              </ul>
              <a class="right pd-2r" href="/me" onClick={() => user.setIsAuth(true)}>Login</a>
            </div>
          </nav>
              </>)
          }

      <AppRoutes />
    </div>
  );

})

export default App;
