import React, { useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// == IMPORT Styles
import "./style.scss";

// == IMPORT Containers
import MeteoWidget from "../../containers/MeteoWidget";
import NavToggler from "../../containers/NavToggler";
import NavBar from "../../containers/NavBar";

// == IMPORT Components
import Logo from "../Logo";

// COMPONENT APP
const App = ({ handleGeolocation, navOpen }) => {
  // Launchement of the first API request in order to upload data about geolocation or the saved location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        console.log(navigator.permissions.query);
        handleGeolocation({ lat, lon });
      });
    } else {
      alert(
        "Your browser doesn't support geolocalisation, in order to use the application, please select a city"
      );
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="wrapper">
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName="toast"
      />
      <Logo />
      {navOpen ? <NavBar /> : <MeteoWidget />}
      <NavToggler />
    </div>
  );
};

export default App;
