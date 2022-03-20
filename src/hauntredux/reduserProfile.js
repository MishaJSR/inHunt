import { getMyUser } from "../inquiry/inquiry";

const PUSH_USERS = 'PUSH_USERS';
const ADD_MY_USER = 'ADD_MY_USER';


// let initialState = {}
let initialState = {
  users: null,
  myUser: null
};

const reduserProfile = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_USERS: {
      return {
        ...state,
        users: [...action.users]
      };
    }
    case ADD_MY_USER: {
      state.users.map(e => {
        if (e.email === action.email) return {
          ...state,
          myUser: e
        };
      })
    }
    default:
      return state;
  }
}

export let addUsers = (users) => {
  return { type: PUSH_USERS, users };
}
export let addMyUser = (email) => {
  debugger
  return { type: ADD_MY_USER, email };
}


export const getMyUserThunk = () => {
  return (dispatch) => {
    // dispatch(isFethingBut(true));
    getMyUser()
    .then(response => {
      dispatch(addUsers(response));
    });
  }
}

export const identificate = (email) => {
  return (dispatch) => {
    getMyUser()
    .then(response => {
      dispatch(addUsers(response));
    });
    dispatch(addMyUser(email));
  }
}

export default reduserProfile;