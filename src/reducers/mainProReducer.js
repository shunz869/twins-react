import{FETCH_MAIN} from '../actions/types';

export default (state={},action) => {
  switch(action.type){
    case FETCH_MAIN:
      return action.payload
    default:
      return state;
  };
};
