import{FETCH_PLATES,FETCH_PLATE} from '../actions/types';
import _ from 'lodash';

export default (state={},action) => {
  switch(action.type){
    case FETCH_PLATES:
      return {...state,..._.mapKeys(action.payload, 'id')};
    case FETCH_PLATE:
      return {...state,[action.payload.id]:action.payload};
    default:
      return state;
  };
};