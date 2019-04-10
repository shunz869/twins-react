import{FETCH_LARGEPLATELIST,FETCH_LARGEPLATEITEM} from '../actions/types';
import _ from 'lodash';

export default (state={},action) => {
  switch(action.type){
    case FETCH_LARGEPLATELIST:
      return {...state,..._.mapKeys(action.payload, 'id')};
    case FETCH_LARGEPLATEITEM:
      return {...state,[action.payload.id]:action.payload};
    default:
      return state;
  };
};