import { applyMiddleware, combineReducers, createStore } from "redux";
import reducerPlayers from "./reduserPlayers";
import reduserProfile from "./reduserProfile";
import reducerTeams from "./reduseTeams";
import thunkMiddleWare from "redux-thunk"

let reducers = combineReducers({
    profilePage: reduserProfile,
    playersPage: reducerPlayers,
    teamsPage: reducerTeams
    
});

let store =  createStore(reducers, applyMiddleware(thunkMiddleWare));



export default store;