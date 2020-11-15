import { connect } from 'react-redux';
import NavToggler from '../components/NavToggler';

// == IMPORT of action creators
import { togglerMenu } from '../store/actions/meteo-actions';

const mapStateToProps = null;

const mapDispatchToState = (dispatch) => ({
  
  handleTogglerMenu: () => {
    dispatch(togglerMenu());
  },

});

export default connect(mapStateToProps, mapDispatchToState)(NavToggler);