import React from "react";
import "./Framweek.css";
import image from "../images/man.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
const Framweek = () => {
  return (
    <div>
      <div class="dayweek">
        <span>maa</span>
        <span>din</span>
        <span>woe</span>
        <span>don</span>
        <span style={{ color: "#12121f" }}>vri</span>
        <span>zat</span>
        <span>zon</span>
        <div class="dayweek__date">
          <span>1</span>
          <span id="seashellspan">2</span>
          <span>3</span>
          <span>4</span>
          <span id="pinkspan">5</span>
          <span>6</span>
          <span>7</span>
        </div>
      </div>

      <span
        id="Week"
        style={{
          paddingTop: "20px",
          marginLeft: "60px",
          color: "deeppink",
          borderBottom: "4px solid",
          paddingBottom: "10px",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        This Week
      </span>
      <span
        id="Month"
        style={{
          paddingTop: "20px",
          marginLeft: "110px",
          paddingBottom: "10px",
          fontWeight: "bold",
          fontSize: "18px",
          color: "#797D7F",
        }}
      >
        This Month
      </span>
      <hr id="hrFramweek" style={{ marginTop: "11px" }} />
      <div className="Taskview">
        <p>
          Add features to the new app<br></br> design
        </p>
        <img src={image} alt="" />
        <div className="icons">
          <FontAwesomeIcon
            style={{ color: "gray" }}
            id="clock"
            icon={faClock}
          />{" "}
          <span>08:00 - 09:00</span>
        </div>
      </div>
      <div className="metting">
        <p>UX/UI metting</p>
        <img id="fimg" src={image} alt="" />
        <img src={image} alt="" />
        <div className="icons">
          <FontAwesomeIcon
            style={{ color: "#ffffff" }}
            id="clock"
            icon={faClock}
          />{" "}
          <span style={{ color: "#ffffff" }}>08:00 - 09:00</span>
        </div>
      </div>
      <hr id="hr" />
    </div>
  );
};

export default Framweek;
