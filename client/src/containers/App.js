import { connect } from 'react-redux';
import App from '../components/App';

// == IMPORT action creators
import { getSavedLocationData } from '../store/actions/meteo-actions';

const mapStateToProps = (state) => ({
  navOpen: state.meteo.navOpen,
});

const mapDispatchToState = (dispatch) => ({

  handleSavedLocationData: () => {
    dispatch(getSavedLocationData());
  },

});

export default connect(mapStateToProps, mapDispatchToState)(App);