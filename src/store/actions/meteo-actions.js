export const GET_SEARCH = 'GET_SEARCH';

export const GET_SUBMIT = 'GET_SUBMIT';
export const GET_SUBMIT_SUCCESS = 'GET_SUBMIT_SUCCESS';
export const GET_SUBMIT_ERROR = 'GET_SUBMIT_ERROR';

export const TOGGLER_MENU = 'TOGGLER_MENU';

export const GET_GEOLOCATION = 'GET_GEOLOCATION';
export const GET_GEOLOCATION_SUCCESS = 'GET_GEOLOCATION_SUCCESS';
export const GET_GEOLOCATION_ERROR = 'GET_GEOLOCATION_ERROR';

export const GET_SELECTED_CITY = 'GET_SELECTED_CITY';
export const GET_SELECTED_CITY_SUCCESS = 'GET_SELECTED_CITY_SUCCESS';
export const GET_SELECTED_CITY_ERROR = 'GET_SELECTED_CITY_ERROR';


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

// GEOLOCATON
export const getGeolocation = (payload) => ({
  type: GET_GEOLOCATION,
  payload,
});

export const getGeolocationSuccess = (payload) => ({
  type: GET_GEOLOCATION_SUCCESS,
  payload,
});

export const getGeolocationError = (payload) => ({
  type: GET_GEOLOCATION_ERROR,
  payload,
});

// SELECTED CiTY
export const getSelectedCity = (payload) => ({
  type: GET_SELECTED_CITY,
  payload,
});

export const getSelectedCitySuccess = (payload) => ({
  type: GET_SELECTED_CITY_SUCCESS,
  payload,
});

export const getSelectedCityError = (payload) => ({
  type: GET_SELECTED_CITY_ERROR,
  payload
});

// TOGGLER MENU
export const togglerMenu = () => ({
  type: TOGGLER_MENU,
});
