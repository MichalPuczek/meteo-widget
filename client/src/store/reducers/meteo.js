import {
  GET_SEARCH, GET_SUBMIT, GET_SUBMIT_SUCCESS, GET_SUBMIT_ERROR,
  TOGGLER_MENU,
  GET_SAVED_LOCATION_DATA, GET_SAVED_LOCATION_DATA_SUCCESS, 
  GET_SAVED_LOCATION_DATA_ERROR,
  GET_CLICKED_CITY, GET_CLICKED_CITY_SUCCESS, GET_CLICKED_CITY_ERROR,
} from '../actions/meteo-actions';

// == Initial state of SearchBar
export const initialState = {
  searchInput: '',
  savedCity: 'Warsaw',
  mainSavedCity: {temp: 0, feels_like: 0},
  navCities: [
    {city: 'Paris',
     main: {},
    },
    {city: 'Chorzow',
     main: {},
    },
  ],
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
        ]
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
    case GET_SAVED_LOCATION_DATA:
      return {
        ...state,
      };
    case GET_SAVED_LOCATION_DATA_SUCCESS:
      return {
        ...state,
        mainSavedCity: action.payload,
      };
    case GET_SAVED_LOCATION_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_CLICKED_CITY:
      return {
        ...state,
        savedCity: action.payload.city,
      };
    case GET_CLICKED_CITY_SUCCESS:
      return {
        ...state,
        mainSavedCity: action.payload,
      };
    case GET_CLICKED_CITY_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};