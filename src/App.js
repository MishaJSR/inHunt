import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthComponent from './hauntcomponents/Auth/AuthComponent';
import StartPage from './hauntcomponents/StartPage/StartPage';
import MyTeams from './hauntcomponents/MyTeams/MyTeams';
import MyProfile from './hauntcomponents/MyProfile/MyProfile';
import FindPlayers from './hauntcomponents/FindPlayers/FindPlayers';
import TopTeams from './hauntcomponents/TopTeams/TopTeams';
import Options from './hauntcomponents/Options/Options';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
        <StartPage />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path="login/*" element={<AuthComponent />} />
              <Route path="me/*" element={<MyProfile />} />
              <Route path="myTeams/*" element={<MyTeams />} />
              <Route path="findPlayer/*" element={<FindPlayers />} />
              <Route path="topTeams/*" element={<TopTeams />} />
              <Route path="options/*" element={<Options />} />
            </Routes>
          </div>
  
        </div>
      </BrowserRouter>
    );
  }
 
}

export default App;
