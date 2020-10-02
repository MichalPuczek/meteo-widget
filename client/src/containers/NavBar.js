import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

// == IMPORT action creators
import { togglerMenu, getClickedCity } from '../store/actions/meteo-actions';

const mapStateToProps = (state) => ({
  navCities: state.meteo.navCities,
});

const mapDispatchToState = (dispatch) => ({

  handleTogglerMenu: () => {
    dispatch(togglerMenu());
  },

  handleClickedCity: (city) => {
    dispatch(getClickedCity(city));
  },

});

export default connect(mapStateToProps, mapDispatchToState)(NavBar);