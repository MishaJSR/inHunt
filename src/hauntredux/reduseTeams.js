const SHOWTEAMS = 'SHOWTEAMS';
const CLICKPAGE = 'CLICKPAGE';

let initialState = {
  teams: [
   
  ],
  currentPage: 1
}

const reducerTeams = (state = initialState, action) => {
  switch (action.type) {
    case CLICKPAGE: {
      return {
        ...state,
        currentPage: action.page
      };
    }
    case SHOWTEAMS: {
      return {
        ...state,
        teams: [...state.teams]
      };
    }
    default:
      return state;
  }
}


export let onShowTeams = () => {
  return { type: SHOWTEAMS };
}

export let clickPage = (page) => {
  return { type: CLICKPAGE, page: page };
}

export default reducerTeams;