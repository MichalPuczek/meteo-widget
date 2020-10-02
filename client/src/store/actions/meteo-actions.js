export const GET_SEARCH = 'GET_SEARCH';
export const GET_SUBMIT = 'GET_SUBMIT';
export const GET_SUBMIT_SUCCESS = 'GET_SUBMIT_SUCCESS';
export const GET_SUBMIT_ERROR = 'GET_SUBMIT_ERROR';
export const TOGGLER_MENU = 'TOGGLER_MENU';
export const GET_SAVED_LOCATION_DATA = 'GET_SAVED_LOCATION_DATA';
export const GET_SAVED_LOCATION_DATA_SUCCESS = 'GET_SAVED_LOCATION_DATA_SUCCESS';
export const GET_SAVED_LOCATION_DATA_ERROR = 'GET_SAVED_LOCATION_DATA_ERROR';
export const GET_CLICKED_CITY = 'GET_CLICKED_CITY';
export const GET_CLICKED_CITY_SUCCESS = 'GET_CLICKED_CITY_SUCCESS';
export const GET_CLICKED_CITY_ERROR = 'GET_CLICKED_CITY_ERROR';

export const getSearch = (payload) => ({
  type: GET_SEARCH,
  payload,
});

export const getSubmit = () => ({
  type: GET_SUBMIT,
});

export const getSubmitSuccess = (payload) => ({
  type: GET_SUBMIT_SUCCESS,
  payload,
});

export const getSubmitError = (payload) => ({
  type: GET_SUBMIT_ERROR,
  payload,
});

export const getSavedLocationData = () => ({
  type: GET_SAVED_LOCATION_DATA,
});

export const getSavedLocationDataSuccess = (payload) => ({
  type: GET_SAVED_LOCATION_DATA_SUCCESS,
  payload,
});

export const getSavedLocationDataError = (payload) => ({
  type: GET_SAVED_LOCATION_DATA_ERROR,
  payload,
});

export const getClickedCity = (payload) => ({
  type: GET_CLICKED_CITY,
  payload,
});

export const getClickedCitySuccess = (payload) => ({
  type: GET_CLICKED_CITY_SUCCESS,
  payload,
});

export const getClickedCityError = (payload) => ({
  type: GET_CLICKED_CITY_ERROR,
  payload
});

export const togglerMenu = () => ({
  type: TOGGLER_MENU,
});
