import React from 'react';

// == IMPORT from Router
import { Link } from 'react-router-dom';

// == IMPORT Styles and Icons (react-icons)
import './style.scss';
import { HiMenu } from 'react-icons/hi';

const NavToggler = ({ handleTogglerMenu }) => {


  return (
    <div className="menu">
      <Link>
        <HiMenu size={38}
          onClick={() => {
            handleTogglerMenu();
          }}
        />
      </Link>
    </div>
  )
};

export default NavToggler;