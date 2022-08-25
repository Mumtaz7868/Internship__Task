import React from "react";
import "./BottomManu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBriefcase,
  faMessage,
  faWallet,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const BottomManu = () => {
  return (
    <div>
      <div class="BottomMenu">
        <FontAwesomeIcon id="fahouse" icon={faHouse} />
        <FontAwesomeIcon id="faBottomManu" icon={faBriefcase} />
        <FontAwesomeIcon id="faBottomManu" icon={faMessage} />
        <FontAwesomeIcon id="faBottomManu" icon={faWallet} />
        <FontAwesomeIcon id="faBottomManu" icon={faUser} />
      </div>
    </div>
  );
};

export default BottomManu;
