import{FETCH_CUPLIST,FETCH_CUPITEM} from '../actions/types';
import _ from 'lodash';

export default (state={},action) => {
  switch(action.type){
    case FETCH_CUPLIST:
      return {...state,..._.mapKeys(action.payload, 'id')};
    case FETCH_CUPITEM:
      return {...state,[action.payload.id]:action.payload};
    default:
      return state;
  };
};