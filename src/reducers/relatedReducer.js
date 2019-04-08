import{FETCH_Related} from '../actions/types';

export default (state={},action) => {
  switch(action.type){
    case FETCH_Related:
      return action.payload
    default:
      return state;
  };
};