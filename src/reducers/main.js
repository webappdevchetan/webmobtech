import * as types from '../actions/actionTypes';

const initialState = {
   movie : [],
   category:'NOW_PLAYING',
   search:''
};

const main = (state = initialState, action) => {
     switch (action.type) {
      case types.SET_MOVIE:
        return {
          ...state,
          movie: action.data,
        };
      case types.SET_CATEGORY:
        return {
          ...state,
          category: action.data,
        };
      case types.SET_SEARCH:
        return {
          ...state,
          search: action.data,
        };
      default:
        return state;
    }
  };
  
  export default main;
  