import{FETCH_LOGO} from '../actions/types';

export default (state=[],action) => {
  switch(action.type){
    case FETCH_LOGO:
      return action.payload
    default:
      return state;
  };
};