import React from "react";
import Statusbar from "./Statusbar";
import image from "../images/keyboard.png";
import img from "../images/mumtaz.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCalendarDays,
  faClock,
  faHatCowboy,
  faBuilding,
  faToggleOff,
  faAlignLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Taskcreationfull.css";
const Taskcreationfull = () => {
  return (
    <div>
      <Statusbar />
      <div className="Taskcreation">
        <FontAwesomeIcon id="Xmark" icon={faXmark} />
        <h1>UI/UX meeting</h1>
        <img id="mumtazImg" src={img} alt="" />
      </div>
      <div className="department">
        <p>Development</p>
      </div>
      <hr />
      <div className="Taskcreation__setdate">
        <FontAwesomeIcon id="facalendarDays" icon={faCalendarDays} />
        <select>
          <option>Thursday 25</option>
          <option>22</option>
          <option>23</option>
        </select>
      </div>
      <hr />
      <div className="Taskcreation__hour">
        <FontAwesomeIcon id="faclock" icon={faClock} />
        <select>
          <option>13:00 - 14:00 </option>
          <option>22</option>
          <option>23</option>
        </select>
      </div>
      <hr />
      <div className="Taskcreation__remote">
        <FontAwesomeIcon id="facap" icon={faHatCowboy} />
        <p>Remote:</p>
        <i class="fa-solid fa-toggle-off"></i>
        <FontAwesomeIcon id="toggleon" icon={faToggleOff} />
      </div>
      <hr />
      <div className="Taskcreation__office">
        <FontAwesomeIcon id="fabulding" icon={faBuilding} />
        <p>Office:</p>
        <select>
          <option>Office name</option>
          <option>22</option>
          <option>23</option>
        </select>
      </div>
      <hr />
      <div className="Taskcreation__description">
        <FontAwesomeIcon id="faAlign" icon={faAlignLeft} />
        {/* <input type={text} placeholder="Add description" /> */}
        <p>Lorem This is a dumy text</p>
        <FontAwesomeIcon id="faArrow" icon={faArrowRight} />
      </div>
      <img id="image" src={image} alt="" />
    </div>
  );
};

export default Taskcreationfull;
