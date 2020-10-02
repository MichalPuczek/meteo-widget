import { connect } from 'react-redux';
import MeteoWidget from '../components/MeteoWidget';

const mapToStateProps = (state) => ({
  city: state.meteo.savedCity,
  temp: state.meteo.mainSavedCity.temp,
  feelsLike: state.meteo.mainSavedCity.feels_like,
  tempMax: state.meteo.mainSavedCity.temp_max,
  tempMin: state.meteo.mainSavedCity.temp_min,
});

const mapDispatchToProps = null;

export default connect(mapToStateProps, mapDispatchToProps)(MeteoWidget);