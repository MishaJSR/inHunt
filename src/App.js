import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import AppRoutes from './Routes/routes';

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

function App () {
  const classes = useStyles();


    return (
      <div className={classes.root}>
      <AppBar position="static" color="#00ff00">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            InHunt
          </Typography>
          <div className={classes.rightToolbar}>
            <Button color="inherit" component={Link} to="/">
             Start Page
            </Button>
          </div>
          <div className={classes.rightToolbar}>
            <Button color="inherit" component={Link} to="/myTeams">
              My teams
            </Button>
            <Button color="inherit" component={Link} to="/findPlayer">
              Find Players
            </Button>
            <Button color="inherit" component={Link} to="/topTeams">
              Top Teams
            </Button>
            <Button color="inherit" component={Link} to="/options">
              Options
            </Button>
          </div>
          {true &&
            (false ? (
              <>
                <Button color="inherit" component={Link} to="/me">
                  firstName lastName
                </Button>
                <Button color="inherit" >
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/registration">
                  Registration
                </Button>
              </>
            ))}
        </Toolbar>
      </AppBar>

        <AppRoutes />
      </div>
    );

}

export default App;
