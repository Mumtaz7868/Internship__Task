import React from "react";
import Statusbar from "./Statusbar";
import image from "../images/man.jpg";
import "./Setting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToggleOff,
  faSquareEnvelope,
  faBug,
  faStar,
  faLock,
  faBookOpen,
  faCircleInfo,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
const Setting = () => {
  return (
    <div className="body">
      <Statusbar />
      <div className="setting">
        <p
          style={{
            marginLeft: "20px",
            marginBottom: "20px",
            fontSize: "20px",
            fontFamily: "sans-serif",
          }}
        >
          General
        </p>
        <div className="setting__name">
          <img src={image} alt="" />
          <div className="setting__position">
            <b> Mumtaz Ahmad</b>
            <p>JavaScript Developer</p>
          </div>
        </div>
        <div className="setting__editprofile">
          <p style={{ marginLeft: "20px" }}>Edit Profile</p>
          <FontAwesomeIcon id="Angleright" icon={faAngleRight} />
        </div>
        <div className="setting__dark">
          <p>Dark Mode</p>
          <FontAwesomeIcon id="fatoggleoff" icon={faToggleOff} />
        </div>
        <p style={{ marginLeft: "20px", marginTop: "10px", fontSize: "20px" }}>
          Support
        </p>
        <div className="setting__contact">
          <div className="setting__contactUs">
            <FontAwesomeIcon id="famessage" icon={faSquareEnvelope} />
            <p style={{ color: "grey", fontSize: "20px", marginTop: "12px" }}>
              Contact Us
            </p>
          </div>

          <hr style={{ marginLeft: "20px", marginRight: "20px" }} />
          <div className="setting__contactUs">
            <FontAwesomeIcon id="famessage" icon={faBug} />
            <p style={{ color: "grey", fontSize: "20px", marginTop: "15px" }}>
              Report a Bug
            </p>
          </div>
          <hr
            style={{
              marginLeft: "20px",
              marginRight: "20px",
            }}
          />
          <div className="setting__contactUs">
            <FontAwesomeIcon id="famessage" icon={faStar} />
            <p style={{ color: "grey", fontSize: "20px", marginTop: "15px" }}>
              Rate the App
            </p>
          </div>
        </div>
        <p style={{ marginLeft: "20px", marginTop: "10px", fontSize: "20px" }}>
          More
        </p>
        <div className="setting__police">
          <div className="setting__privacy">
            <FontAwesomeIcon id="falock" icon={faLock} />
            <p
              style={{
                color: "grey",
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: "15px",
              }}
            >
              Privacy Policy
            </p>
          </div>
          <hr style={{ marginLeft: "20px", marginRight: "20px" }} />
          <div className="setting__privacy">
            <FontAwesomeIcon id="fabook" icon={faBookOpen} />
            <p
              style={{
                color: "grey",
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: "15px",
              }}
            >
              {" "}
              Terms of use
            </p>
          </div>
          <hr style={{ marginLeft: "20px", marginRight: "20px" }} />
          <div className="setting__privacy">
            <FontAwesomeIcon id="falock" icon={faCircleInfo} />
            <p
              style={{
                color: "grey",
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: "15px",
              }}
            >
              Version 1.0.1
            </p>
          </div>
        </div>
        <div className="setting__logout">
          <p>Log Out</p>
        </div>
      </div>
      <hr id="hr" />
    </div>
  );
};

export default Setting;
