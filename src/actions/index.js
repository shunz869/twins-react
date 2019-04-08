import{FETCH_LOGO,FETCH_PRODUCTS,FETCH_PRODUCT,FETCH_CAROSEL,FETCH_PLATES, FETCH_PLATE} from './types';
import fetchData from '../apis/fetchData';

export const fetchLogo = () => async dispatch => {
  const response = await fetchData.get('/logo');
  dispatch({
    type:FETCH_LOGO,
    payload:response.data
  });
};

export const fetchCarosel = () => async dispatch => {
  const response = await fetchData.get('/carosel');
  dispatch({
    type:FETCH_CAROSEL,
    payload:response.data
  });
};

export const fetchProducts = () => async dispatch => {
  const response = await fetchData.get('/bowel');
  dispatch({
    type:FETCH_PRODUCTS,
    payload:response.data
  });
};

export const fetchProduct = (id) => async dispatch => {
  const response = await fetchData.get(`/bowel/${id}`);
  dispatch({
    type:FETCH_PRODUCT,
    payload:response.data
  });
};

export const fetchPlates = () => async dispatch => {
  const response = await fetchData.get('/platesset');
  dispatch({
    type:FETCH_PLATES,
    payload:response.data
  });
};
export const fetchPlate = (id) => async dispatch => {
  const response = await fetchData.get(`/platesset/${id}`);
  dispatch({
    type:FETCH_PLATE,
    payload:response.data
  });
};
