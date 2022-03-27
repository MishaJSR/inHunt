import { applyMiddleware, combineReducers, createStore } from "redux";
import reducerPlayers from "./reduserPlayers";
import reducerTeams from "./reduseTeams";
import thunkMiddleWare from "redux-thunk"
import reducerAuth from "./reduserAuth";

let reducers = combineReducers({
    playersPage: reducerPlayers,
    teamsPage: reducerTeams,
    authPage: reducerAuth
    
});

let store =  createStore(reducers, applyMiddleware(thunkMiddleWare));



export default store;