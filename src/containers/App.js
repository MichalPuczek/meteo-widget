import { connect } from 'react-redux';
import App from '../components/App';

// == IMPORT action creators
import { getGeolocation } from '../store/actions/meteo-actions';

const mapStateToProps = (state) => ({
  navOpen: state.meteo.navOpen,
});

const mapDispatchToState = (dispatch) => ({

  handleGeolocation: ({lat, lon}) => {
    dispatch(getGeolocation({lat, lon}));
  },

});

export default connect(mapStateToProps, mapDispatchToState)(App);