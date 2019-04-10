import{FETCH_DISHLIST,FETCH_DISHITEM} from '../actions/types';
import _ from 'lodash';

export default (state={},action) => {
  switch(action.type){
    case FETCH_DISHLIST:
      return {...state,..._.mapKeys(action.payload, 'id')};
    case FETCH_DISHITEM:
      return {...state,[action.payload.id]:action.payload};
    default:
      return state;
  };
};