import{FETCH_KNIVESLIST,FETCH_KNIVESITEM} from '../actions/types';
import _ from 'lodash';

export default (state={},action) => {
  switch(action.type){
    case FETCH_KNIVESLIST:
      return {...state,..._.mapKeys(action.payload, 'id')};
    case FETCH_KNIVESITEM:
      return {...state,[action.payload.id]:action.payload};
    default:
      return state;
  };
};
