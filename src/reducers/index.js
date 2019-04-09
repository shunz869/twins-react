import {combineReducers} from 'redux';
import logoReducer from './logoReducer';
import productsReducer from './productsReducer';
import platesReducer from './platesReducer';
import mainProReducer from './mainProReducer';


export default combineReducers({
  logo:logoReducer,
  products:productsReducer,
  plates:platesReducer,
  main:mainProReducer
});