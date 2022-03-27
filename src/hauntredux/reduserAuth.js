import { getAllUser } from "../inquiry/inquiry";

const FIND_USER = 'FIND_USER';
const SET_ALL_USERS = 'SET_ALL_USERS';

let initialState = {
  users: [
    
  ],
  isAuth: false
}

const reducerAuth = (state = initialState, action) => {
  switch (action.type) {
    case FIND_USER: {
      return {
        ...state,
        currentPage: action.page
      };
    }
    case SET_ALL_USERS: {
      return {
        ...state,
        users: [...state.users]
      };
    }
  //       case SETPLAYERS: {
  //     return {
  //       ...state,
  //       players: [...action.players]
  //   }
  // }
    default:
      return state;
  }
}

export let findEmail = (email) => {
  return { type: FIND_USER, email: email };
}

export let setUsers = (users) => {
  return { type: SET_ALL_USERS, users: users };
}


export const getAuthThunk = (email) => {
  return (dispatch) => {
    getAllUser()
    .then(response => {
      debugger
      dispatch(findEmail(response.data));
    });
  }
}

export const getAllUsersThunk = () => {
  return (dispatch) => {
    getAllUser()
    .then(response => {
      dispatch(setUsers(response.data));
    });
  }
}

export default reducerAuth;