import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

// == IMPORT action creators
import { togglerMenu, getSelectedCity } from '../store/actions/meteo-actions';

const mapStateToProps = (state) => ({
  navCities: state.meteo.navCities,
});

const mapDispatchToState = (dispatch) => ({

  handleTogglerMenu: () => {
    dispatch(togglerMenu());
  },

  handleSelectedCity: (city) => {
    dispatch(getSelectedCity(city));
  },

});

export default connect(mapStateToProps, mapDispatchToState)(NavBar);