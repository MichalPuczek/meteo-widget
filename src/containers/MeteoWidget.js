import { connect } from 'react-redux';
import MeteoWidget from '../components/MeteoWidget';

const mapToStateProps = (state) => ({
  
  city: state.meteo.city,
  temp: state.meteo.main.temp,
  feelsLike: state.meteo.main.feels_like,
  tempMax: state.meteo.main.temp_max,
  tempMin: state.meteo.main.temp_min,

});

const mapDispatchToProps = null;

export default connect(mapToStateProps, mapDispatchToProps)(MeteoWidget);