import{
  FETCH_LOGO,
  FETCH_BOWELLIST,
  FETCH_BOWELITEM,
  FETCH_PLATESSETLIST,
  FETCH_PLATESSETITEM,
  FETCH_MAIN,
  FETCH_CUPLIST,
  FETCH_CUPITEM,
  FETCH_KNIVESLIST,
  FETCH_KNIVESITEM,
  FETCH_DISHLIST,
  FETCH_DISHITEM,
  FETCH_POTLIST,
  FETCH_POTITEM,
  FETCH_MIDPLATELIST,
  FETCH_MIDPLATEITEM,
  FETCH_LARGEPLATELIST,
  FETCH_LARGEPLATEITEM,
  FETCH_POLPLATELIST,
  FETCH_POLPLATEITEM
} from './types';
import fetchData from '../apis/fetchData';

export const fetchLogo = () => async dispatch => {
  const response = await fetchData.get('/logo');
  dispatch({
    type:FETCH_LOGO,
    payload:response.data
  });
};

export const fetchBowelList = () => async dispatch => {
  const response = await fetchData.get('/bowel');
  dispatch({
    type:FETCH_BOWELLIST,
    payload:response.data
  });
};

export const fetchBowelItem = (id) => async dispatch => {
  const response = await fetchData.get(`/bowel/${id}`);
  dispatch({
    type:FETCH_BOWELITEM,
    payload:response.data
  });
};

export const fetchPlatesSetList = () => async dispatch => {
  const response = await fetchData.get('/platesset');
  dispatch({
    type:FETCH_PLATESSETLIST,
    payload:response.data
  });
};
export const fetchPlatesSetItem = (id) => async dispatch => {
  const response = await fetchData.get(`/platesset/${id}`);
  dispatch({
    type:FETCH_PLATESSETITEM,
    payload:response.data
  });
};

export const fetchMain = () => async dispatch => {
  const response = await fetchData.get('/main');
  dispatch({
    type:FETCH_MAIN,
    payload:response.data
  });
};

export const fetchCupsList = () => async dispatch => {
  const response = await fetchData.get('/cups');
  dispatch({
    type:FETCH_CUPLIST,
    payload:response.data
  });
};
export const fetchCupItem = (id) => async dispatch => {
  const response = await fetchData.get(`/cups/${id}`);
  dispatch({
    type:FETCH_CUPITEM,
    payload:response.data
  });
};

export const fetchKnivesList = () => async dispatch => {
  const response = await fetchData.get('/knives');
  dispatch({
    type:FETCH_KNIVESLIST,
    payload:response.data
  });
};

export const fetchKnivesItem = (id) => async dispatch => {
  const response = await fetchData.get(`/knives/${id}`);
  dispatch({
    type:FETCH_KNIVESITEM,
    payload:response.data
  });
};

export const fetchDishList = () => async dispatch => {
  const response = await fetchData.get('/dishes');
  dispatch({
    type:FETCH_DISHLIST,
    payload:response.data
  });
};
export const fetchDishItem = (id) => async dispatch => {
  const response = await fetchData.get(`/dishes/${id}`);
  dispatch({
    type:FETCH_DISHITEM,
    payload:response.data
  });
};

export const fetchPotList = () => async dispatch => {
  const response = await fetchData.get('/teapot');
  dispatch({
    type:FETCH_POTLIST,
    payload:response.data
  });
};
export const fetchPotItem = (id) => async dispatch => {
  const response = await fetchData.get(`/teapot/${id}`);
  dispatch({
    type:FETCH_POTITEM,
    payload:response.data
  });
};

export const fetchMidPlateList = () => async dispatch => {
  const response = await fetchData.get('/middleplate');
  dispatch({
    type:FETCH_MIDPLATELIST,
    payload:response.data
  });
};
export const fetchMidPlateItem = (id) => async dispatch => {
  const response = await fetchData.get(`/middleplate/${id}`);
  dispatch({
    type:FETCH_MIDPLATEITEM,
    payload:response.data
  });
};

export const fetchLargePlateList = () => async dispatch => {
  const response = await fetchData.get('/largeplate ');
  dispatch({
    type:FETCH_LARGEPLATELIST,
    payload:response.data
  });
};
export const fetchLargePlateItem = (id) => async dispatch => {
  const response = await fetchData.get(`/largeplate/${id}`);
  dispatch({
    type:FETCH_LARGEPLATEITEM,
    payload:response.data
  });
};

export const fetchPolPlateList = () => async dispatch => {
  const response = await fetchData.get('/polygonplate ');
  dispatch({
    type:FETCH_POLPLATELIST,
    payload:response.data
  });
};
export const fetchPolPlateItem = (id) => async dispatch => {
  const response = await fetchData.get(`/polygonplate/${id}`);
  dispatch({
    type:FETCH_POLPLATEITEM,
    payload:response.data
  });
};