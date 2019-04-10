import{FETCH_POTLIST,FETCH_POTITEM} from '../actions/types';
import _ from 'lodash';

export default (state={},action) => {
  switch(action.type){
    case FETCH_POTLIST:
      return {...state,..._.mapKeys(action.payload, 'id')};
    case FETCH_POTITEM:
      return {...state,[action.payload.id]:action.payload};
    default:
      return state;
  };
};