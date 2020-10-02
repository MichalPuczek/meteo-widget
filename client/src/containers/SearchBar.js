// == IMPORT of the connect() function
import { connect } from 'react-redux';

// == IMPORT of the component
import SearchBar from '../components/SearchBar';

// == IMPORT of the action creator
import { getSearch, getSubmit } from '../store/actions/meteo-actions';

const mapStateToProps = (state) => ({
  searchInput: state.meteo.searchInput,
});

const mapDispatchToProps = (dispatch) => ({

  handleGetSearch: (text) => {
    dispatch(getSearch(text));
  },
  handleGetSubmit: () => {
    dispatch(getSubmit());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);