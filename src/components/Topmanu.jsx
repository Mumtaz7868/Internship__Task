import React from "react";
import "./Topmanu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEllipsis,
  faComment,
  faGear,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
const Topmanu = () => {
  return (
    <div>
      <div class="topmenu">
        <FontAwesomeIcon id="Bars" icon={faBars} />
        <p>Home</p>
        <FontAwesomeIcon id="Bell" icon={faBell} />
        <FontAwesomeIcon id="icon" icon={faComment} />
        <FontAwesomeIcon id="icon" icon={faGear} />
        <FontAwesomeIcon id="faellipsis" icon={faEllipsis} />
      </div>
    </div>
  );
};

export default Topmanu;
