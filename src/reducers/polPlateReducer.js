import{FETCH_POLPLATELIST,FETCH_POLPLATEITEM} from '../actions/types';
import _ from 'lodash';

export default (state={},action) => {
  switch(action.type){
    case FETCH_POLPLATELIST:
      return {...state,..._.mapKeys(action.payload, 'id')};
    case FETCH_POLPLATEITEM:
      return {...state,[action.payload.id]:action.payload};
    default:
      return state;
  };
};