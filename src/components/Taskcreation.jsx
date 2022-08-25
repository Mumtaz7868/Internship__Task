import React from "react";
import Statusbar from "./Statusbar";
import image from "../images/keyboard.png";
import { text } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faPlus,
  faUserPlus,
  faCalendarDays,
  faClock,
  faHatCowboy,
  faBuilding,
  faToggleOn,
  faAlignLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Taskcreation.css";
const Taskcreation = () => {
  return (
    <div>
      <Statusbar />
      <div className="Taskcreation">
        <FontAwesomeIcon id="Xmark" icon={faXmark} />
        <input type={text} placeholder="Task Name" />
      </div>
      <div className="Taskcreation__department">
        <FontAwesomeIcon id="faplus" icon={faPlus} />
        <p>Department</p>
        <FontAwesomeIcon id="fauser" icon={faUserPlus} />
      </div>
      <hr />
      <div className="Taskcreation__setdate">
        <FontAwesomeIcon id="facalendarDays" icon={faCalendarDays} />
        <select>
          <option>Set Date</option>
          <option>22</option>
          <option>23</option>
        </select>
      </div>
      <hr />
      <div className="Taskcreation__hour">
        <FontAwesomeIcon id="faclock" icon={faClock} />
        <select>
          <option>Hours </option>
          <option>22</option>
          <option>23</option>
        </select>
      </div>
      <hr />
      <div className="Taskcreation__remote">
        <FontAwesomeIcon id="facap" icon={faHatCowboy} />
        <p>Remote:</p>
        <i class="fa-solid fa-toggle-off"></i>
        <FontAwesomeIcon id="toggleon" icon={faToggleOn} />
      </div>
      <hr />
      <div className="Taskcreation__office">
        <FontAwesomeIcon id="fabulding" icon={faBuilding} />
        <p>Office:</p>
        <select>
          <option>+ Select</option>
          <option>22</option>
          <option>23</option>
        </select>
      </div>
      <hr />
      <div className="Taskcreation__description">
        <FontAwesomeIcon id="faAlign" icon={faAlignLeft} />
        <input type={text} placeholder="Add description" />
        <FontAwesomeIcon id="faArrow" icon={faArrowRight} />
      </div>
      <img id="image" src={image} alt="" />
    </div>
  );
};

export default Taskcreation;
