import React from "react";
import Statusbar from "./Statusbar";
import Topmanu from "./Topmanu";
import Bigtoggle from "./Bigtoggle";
import "./Taskview.css";
import image from "../images/man.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
const Taskview = () => {
  return (
    <div>
      <Statusbar />
      <Topmanu />
      <Bigtoggle />
      <div className="Todo">
        <span id="linkspan">To Do</span>
        <span>Doing</span>
        <span>Done</span>
      </div>
      <div className="Taskview">
        <img src={image} alt="" />
        <p>
          Add features to the new app<br></br> design
        </p>
        <div className="icons">
          <FontAwesomeIcon id="calendar" icon={faCalendarDays} />{" "}
          <span>Friday 10</span>
          <FontAwesomeIcon id="clock" icon={faClock} />{" "}
          <span>08:00 - 09:00</span>
        </div>
      </div>
      <div className="metting">
        <img id="fimg" src={image} alt="" />
        <img src={image} alt="" />
        <p>UX/UI metting</p>
        <div className="icons">
          <FontAwesomeIcon id="calendar" icon={faCalendarDays} />{" "}
          <span>Friday 10</span>
          <FontAwesomeIcon id="clock" icon={faClock} />{" "}
          <span>08:00 - 09:00</span>
        </div>
      </div>
      <div class="cardwhite">
        <FontAwesomeIcon id="plus" icon={faPlus} />
      </div>
      <hr id="line" />
    </div>
  );
};

export default Taskview;
