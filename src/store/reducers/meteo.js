import {
  GET_SEARCH, GET_SUBMIT, GET_SUBMIT_SUCCESS, GET_SUBMIT_ERROR,
  TOGGLER_MENU,
  GET_SELECTED_CITY, GET_SELECTED_CITY_SUCCESS, GET_SELECTED_CITY_ERROR,
  GET_GEOLOCATION, GET_GEOLOCATION_SUCCESS, GET_GEOLOCATION_ERROR,
} from '../actions/meteo-actions';

// == Initial state of SearchBar
export const initialState = {
  searchInput: '',
  navCities: [],
  city: '',
  main: {},
  error: '',
  navOpen: false,
};

// == REDUCER fonction
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SEARCH:
      return {
        ...state,
        searchInput: action.payload,
      };
    case GET_SUBMIT:
      return {
        ...state,
      };
    case GET_SUBMIT_SUCCESS:
      return {
        ...state,
        navCities: [
          ...state.navCities,
          {
            city: state.searchInput,
            main: action.payload,
          }
        ],
        searchInput: '',
      };
    case GET_SUBMIT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case TOGGLER_MENU:
      return {
        ...state,
        navOpen: !state.navOpen,
      };
    case GET_GEOLOCATION:
      return {
        ...state,
      };
    case GET_GEOLOCATION_SUCCESS:
      return {
        ...state,
        city: action.payload.name,
        main: action.payload.main,
      }
    case GET_GEOLOCATION_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case GET_SELECTED_CITY:
      return {
        ...state,
        city: action.payload.city,
      };
    case GET_SELECTED_CITY_SUCCESS:
      return {
        ...state,
        main: action.payload,
      };
    case GET_SELECTED_CITY_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};