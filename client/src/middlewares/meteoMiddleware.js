// == IMPORT axios
import axios from 'axios';

// == IMPORT types and action creators
import { 
  GET_SUBMIT, getSubmitSuccess, getSubmitError, 
  GET_SAVED_LOCATION_DATA, getSavedLocationDataSuccess, getSavedLocationDataError,
  GET_CLICKED_CITY, getClickedCitySuccess, getClickedCityError,
} from '../store/actions/meteo-actions';

// == middleware
const meteoMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {

    // MV that launches useEffect to get data about the saved city
    case GET_SAVED_LOCATION_DATA: {

      const city = store.getState().meteo.savedCity;
      const API_KEY = process.env.REACT_APP_API_KEY;
      const url = `${process.env.REACT_APP_API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;

      axios({
        method: 'get',
        url
      })
        .then((res) => {
          store.dispatch(getSavedLocationDataSuccess(res.data.main));
        })
        .catch((e) => {
          console.log('je suis dans le rrror');
          store.dispatch(getSavedLocationDataError('upsss'));
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
          store.dispatch(getSubmitError('PB'));
        });
      break;
    }

    // MV
    case GET_CLICKED_CITY: {
      const { city } = action.payload;
      const API_KEY = process.env.REACT_APP_API_KEY;
      const url = `${process.env.REACT_APP_API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;

      axios({
        method: 'get',
        url
      })
        .then((res) => {
          store.dispatch(getClickedCitySuccess(res.data.main));
          console.log('resssss', res.data);
        })
        .catch((e) => {
          store.dispatch(getClickedCityError('PB'));
        });
      break;
    }
    default:
  }
};

export default meteoMiddleware;