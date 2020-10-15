import React from 'react';

// == IMPORT Styles
import './style.scss';

const MeteoWidget = ({ 
  city, temp, feelsLike, tempMax, tempMin,
}) => {
  
  return (
    <div className="widget">

      { city ? 
        <div>
          <div className="city">
            {city}
          </div>
          <div className="info">
            <div className="info-temp">
              <p>Temp. : {Math.round(temp)}° [max: {Math.round(tempMax)} | min: {Math.round(tempMin)}]</p>
              <p>Temp. ressentie : {Math.round(feelsLike)}°</p>
            </div>
          </div>
        </div>
        : <p className="waiting">Waiting for the geolocation</p>
      }

    </div>
  )
};

export default MeteoWidget;