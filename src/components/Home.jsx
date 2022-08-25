import React from "react";
import image from "../images/correct.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import Statusbar from "./Statusbar";
import Topmanu from "./Topmanu";
import Bigtoggle from "./Bigtoggle";

function Home() {
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
      <div className="taskassign">
        <p>You have no tasks assigned yet.</p>
      </div>
      <div class="cardwhite">
        <FontAwesomeIcon id="plus" icon={faPlus} />
      </div>
      <hr id="line" />

      {/* <div className="heading">
        <span className="heading">
          <img src={image} alt="" />
        </span>
        <span style={{ fontSize: "30px", fontWeight: "bold" }}>App Name</span>
        <div class="empty"></div>
        <div class="h1anp">
          <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
            Your Job organized
          </h1>
          <p style={{ textAlign: "center", fontSize: "larger" }}>
            Lorem ipsum dolor sit consenter,
            <br />
            cuspidate perspiciatis.
          </p>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <button>Get Started</button>
        <hr />
      </div> */}
    </div>
  );
}

export default Home;
