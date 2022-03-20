// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
const SHOWPLAYERS = 'SHOWPLAYERS';
const SETPLAYERS = 'SETPLAYERS';
const CLICKPAGE = 'CLICKPAGE';
// const SETUSERSCOUNT = 'SETUSERSCOUNT';
// const SWAPSLICEP = 'SWAPSLICEP';
// const SWAPSLICEM = 'SWAPSLICEM';
// const ISFATCH = 'ISFATCH';

let initialState = {
  players: [
    
  ],
  currentPage: 1
}

const reducerPlayers = (state = initialState, action) => {
  switch (action.type) {
    case CLICKPAGE: {
      return {
        ...state,
        currentPage: action.page
      };
    }
    case SHOWPLAYERS: {
      return {
        ...state,
        players: [...state.players]
      };
    }
        case SETPLAYERS: {
      return {
        ...state,
        players: [...action.players]
    }
  }
    default:
      return state;
  }
}

export let setPlayers = (players) => {
  debugger;
  return { type: SETPLAYERS, players: players };
}

export let clickPage = (page) => {
  return { type: CLICKPAGE, page: page };
}

export let onShowPlayers = () => {
  return { type: SHOWPLAYERS };
}

export default reducerPlayers;

// const reducerUsers = (state = initialState, action) => {
//   switch (action.type) {
//     case CLICKPAGE: {
//       return {
//         ...state,
//         currentPage: action.page
//       };
//     }
//     case ISFATCH: {
//         return {
//           ...state,
//           isFething: action.flag
//         };
//     }
//     case SWAPSLICEP: {
//       let newstart = state.startPage + 10;
//       let newend = state.endPage + 10;
//       return {
//         ...state,
//         startPage: newstart,
//         endPage: newend,
//         reversBut: true
//       };
//     }
//     case SWAPSLICEM: {
//       let newstart = state.startPage - 10;
//       let newend = state.endPage - 10;
//        if (newstart === 0) {
//         return {
//           ...state,
//           startPage: newstart,
//           endPage: newend,
//           reversBut: false
//         }
//        } else return {
//         ...state,
//         startPage: newstart,
//         endPage: newend
//       };
//     }
//     case SETUSERSCOUNT: {
//       return {
//         ...state,
//         totalUsersCount: action.count
//       };
//     }
//     case SHOWUSERS: {
//       return {
//         ...state,
//         users: [...state.users]
//       };
//     }
//     case FOLLOW: {
//       return {
//         ...state,
//         users: state.users.map(u => {
//           if (u.id === action.userId) {
//             return { ...u, followed: true }
//           }
//           return u;
//         })
//       };
//     }
//     case UNFOLLOW: {
//       return {
//         ...state,
//         users: state.users.map(u => {
//           if (u.id === action.userId){
//             return { ...u, followed: false}
//           }
//           return u;
//         })
//       };
//     }
//     case SETUSERS: {
//       // state.users[action.userId].friend = false;
//       // state.users[action.userId].status = "nnnn";
//       return {
//         ...state,
//         users: [...action.users]
//     }
//   }
//     default:
//       return state;
//   }
// }


// export let onShowUsers = () => {
//   return { type: SHOWUSERS };
// }
// export let onFollow = (id) => {
//   return { type: FOLLOW, userId: id };
// }
// export let unFollow = (id) => {
//   return { type: UNFOLLOW, userId: id };
// }
// export let setUsers = (users) => {
//   return { type: SETUSERS, users: users };
// }
// export let clickPage = (page) => {
//   return { type: CLICKPAGE, page: page };
// }
// export let setCountUsers = (count) => {
//   return { type: SETUSERSCOUNT, count: count };
// }
// export let swapSlice = (flag) => {
//   if (flag) return { type: SWAPSLICEP} 
//   else return { type: SWAPSLICEM }
// }
// export let isFethingBut = (flag) => {
//   return { type: ISFATCH, flag: flag  };
// }


