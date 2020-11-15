// == IMPORT axios
import axios from 'axios';

import { toast } from 'react-toastify';

// == IMPORT types and action creators
import { 
  GET_SUBMIT, getSubmitSuccess, getSubmitError, 
  GET_SELECTED_CITY, getSelectedCitySuccess, getSelectedCityError,
  GET_GEOLOCATION, getGeolocationSuccess, getGeolocationError,
} from '../store/actions/meteo-actions';

// == middleware
const meteoMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {

    // MV launched by useEffect() to get data about of geolocalisation
    case GET_GEOLOCATION: {

      const { lat, lon } = action.payload;
      const API_KEY = process.env.REACT_APP_API_KEY;
      const url = `${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
      axios({
        method: 'get',
        url
      })
        .then((res) => {
          store.dispatch(getGeolocationSuccess(res.data));
        })
        .catch((e) => {
          store.dispatch(getGeolocationError('Geolocation failed'));
        });
      break;
    }   

    // MV that is called each ...
    case GET_SUBMIT: {
      const city = store.getState().meteo.searchInput;
      const API_KEY = process.env.REACT_APP_API_KEY;
      const url = `${process.env.REACT_APP_API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;

      axios({
        method: 'get',
        url
      })
        .then((res) => {
          store.dispatch(getSubmitSuccess(res.data.main));
        })
        .catch((e) => {
          store.dispatch(getSubmitError('Searched location has not been found'));
          toast.error('Searched location has not been found');
        });
      break;
    }

    // MV
    case GET_SELECTED_CITY: {
      const { city } = action.payload;
      const API_KEY = process.env.REACT_APP_API_KEY;
      const url = `${process.env.REACT_APP_API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;

      axios({
        method: 'get',
        url
      })
        .then((res) => {
          store.dispatch(getSelectedCitySuccess(res.data.main));
        })
        .catch((e) => {
          store.dispatch(getSelectedCityError('Searched location has not been found'));
        });
      break;
    }
    default:
  }
};

export default meteoMiddleware;