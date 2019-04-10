import{FETCH_PLATESSETLIST,FETCH_PLATESSETITEM} from '../actions/types';
import _ from 'lodash';

export default (state={},action) => {
  switch(action.type){
    case FETCH_PLATESSETLIST:
      return {...state,..._.mapKeys(action.payload, 'id')};
    case FETCH_PLATESSETITEM:
      return {...state,[action.payload.id]:action.payload};
    default:
      return state;
  };
};