import{FETCH_CAROSEL} from '../actions/types';

export default (state=[],action) => {
  switch(action.type){
    case FETCH_CAROSEL:
      return action.payload
    default:
      return state;
  };
};