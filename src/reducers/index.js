import {combineReducers} from 'redux';
import logoReducer from './logoReducer';
import productsReducer from './bowelsReducer';
import platesSetReducer from './platesSetReducer';
import mainProReducer from './mainProReducer';
import cupsReducer from './cupsReducer';
import knivesReducer from './knivesReducer';
import dishReducer from './dishReducer';
import teaPotReducer from './teaPotReducer';
import midPlateReducer from './midPlateReducer';
import largePlateReducer from './largePlateReducer';
import polPlateReducer from './polPlateReducer';


export default combineReducers({
  logo:logoReducer,
  bowels:productsReducer,
  plates:platesSetReducer,
  main:mainProReducer,
  cups:cupsReducer,
  knives:knivesReducer,
  dishes:dishReducer,
  teapots:teaPotReducer,
  midplates:midPlateReducer,
  largeplates:largePlateReducer,
  polplates:polPlateReducer
});