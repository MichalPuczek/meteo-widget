import React from 'react';

// == IMPORT Router
import { Link } from 'react-router-dom';

// == IMPORT Containers
import SearchBar from '../../containers/SearchBar';

// == IMPORT Styles
import './style.scss';

const NavBar = ({ navCities, handleTogglerMenu, handleClickedCity }) => {

  return (
    <div className="locations">
      <SearchBar />
      
        {
          navCities.map((city) => {
            return (
              <div className="location">
              <Link to={'/'}>
                <button
                  onClick={() => {
                    handleTogglerMenu();
                    handleClickedCity({
                      city: city.city,
                      main: city.main,
                    })
                    console.log('clicked city', city);
                  }}
                >
                  {city.city}
                </button>
              </Link>
              </div>
            )
          })
        }
      
    </div>
  )
};

export default NavBar;