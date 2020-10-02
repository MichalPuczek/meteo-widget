import React, { useEffect } from 'react';

// import { Switch, Route } from 'react-router-dom';

// == IMPORT Styles
import './style.scss';

// == IMPORT Containers
import MeteoWidget from '../../containers/MeteoWidget';
import NavToggler from '../../containers/NavToggler';
import NavBar from '../../containers/NavBar';

// == IMPORT Components
import Logo from '../Logo';

// COMPONENT APP
const App = ({ handleSavedLocationData, navOpen }) => {

  // Launchement of the first API request in order to upload data about the saved location
  useEffect(() => {
    handleSavedLocationData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="wrapper">
      <Logo />
      <MeteoWidget />
      {navOpen? <NavBar /> : <NavToggler />}
      {/* <Switch>
        <Route path="/">
          <MeteoWidget />
        </Route>
        
        <Route path="cities">
          <NavBar />
        </Route>
      </Switch> */}
    </div>
  )
};

export default App;