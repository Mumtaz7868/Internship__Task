import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import image from "../images/man.jpg";
import { text } from "@fortawesome/fontawesome-svg-core";
import "./Profile.css";
import Statusbar from "./Statusbar";

const Profile = (props) => {
  return (
    <div className="body">
      <Statusbar />
      <div className="profile">
        <FontAwesomeIcon id="AngleLeft" icon={faAngleLeft} />
        <span>Edit Profle</span>
        <div className="profile__edit">
          <img src={image} alt="pic here" /> <p>Change Photo</p>
        </div>
        <div className="profile__name">
          <p>Full Name</p>
          <input type={text} placeholder="Mumtaz Ahmad" />
          <hr style={{ marginTop: "5px" }} />
        </div>
        <div className="profile__name">
          <p>Position</p>
          <input type={text} placeholder="JavaScript Developer" />
          <hr style={{ marginTop: "5px" }} />
        </div>
        <div className="profile__department">
          <p>Department</p>
          {/* <input type={text} placeholder="Development" /> */}
          <select>
            <option>Development</option>
          </select>
        </div>
        <div className="profile__name">
          <p>Email</p>
          <input type={text} placeholder="mumtazkhan@gmail.com" />
          <hr style={{ marginTop: "5px" }} />
        </div>
        <div className="profile__change">
          {" "}
          <button>Save Change</button>
        </div>
      </div>
      <hr id="hr" />
    </div>
  );
};

export default Profile;
