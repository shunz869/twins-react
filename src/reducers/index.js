import {combineReducers} from 'redux';
import logoReducer from './logoReducer';
import productsReducer from './productsReducer';
import caroselReducer from './caroselRdeducer';
import platesReducer from './platesReducer';


export default combineReducers({
  logo:logoReducer,
  products:productsReducer,
  carosel:caroselReducer,
  plates:platesReducer,
});