// == IMPORT from REDUX
import { createStore, compose, applyMiddleware } from 'redux';

// == IMPORT : local
import rootReducer from '../store/reducers';
import meteoMiddleware from '../middlewares/meteoMiddleware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    meteoMiddleware,
  ),
);

// == STORE
const store = createStore(
  rootReducer,
  enhancers,
);

// == Export
export default store;