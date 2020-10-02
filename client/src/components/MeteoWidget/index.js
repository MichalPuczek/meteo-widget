import React from 'react';

// == IMPORT Styles
import './style.scss';

const MeteoWidget = ({ city, temp, feelsLike, tempMax, tempMin }) => {
  
  return (
    <div className="widget">
      <div className="city">
       {city}
      </div>
      <div className="info">
        <div className="info-temp">
           <p>Temp. : {Math.round(temp)}°</p>
           <p>Temp. ressentie : {Math.round(feelsLike)}°</p>
        </div>
        <div className="info-temp-mix-min">
          <p>Max: {Math.round(tempMax)} | Min: {Math.round(tempMin)}</p>
        </div>
      </div>
    </div>
  )
};

export default MeteoWidget;