import React from "react";
import "./Statusbar.css";
import Image from "../images/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignal, faWifi, faBattery } from "@fortawesome/free-solid-svg-icons";
const Statusbar = () => {
  return (
    <div>
      <div class="StatusBar">
        <img src={Image} alt="" />
        <p>2:20</p>

        <FontAwesomeIcon id="signal" icon={faSignal} />
        <FontAwesomeIcon id="i" icon={faWifi} />
        <FontAwesomeIcon id="i" icon={faBattery} />
      </div>
    </div>
  );
};

export default Statusbar;
