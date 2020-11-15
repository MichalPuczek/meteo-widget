import React from 'react';

// == IMPORT Router
import { Link } from 'react-router-dom';

// == IMPORT Containers
import SearchBar from '../../containers/SearchBar';

// == IMPORT Styles
import './style.scss';

const NavBar = ({ navCities, handleTogglerMenu, handleSelectedCity }) => {

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
                    handleSelectedCity({
                      city: city.city,
                      main: city.main,
                    })
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