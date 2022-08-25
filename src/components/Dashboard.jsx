import React from "react";
import "./Dashboard.css";
import Statusbar from "./Statusbar";
import Topmanu from "./Topmanu";
import image from "../images/man.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faSquare,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
// import { faSquare, faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import BottomManu from "./BottomManu";
const Dashboard = () => {
  return (
    <div>
      <Statusbar />
      <Topmanu />
      <div className="dashboard">
        <div className="dashboard__userperson">
          <img src={image} alt="pic here" />
          <h1>Hello Petter!</h1>
        </div>
        <p
          style={{
            marginTop: "15px",
            marginLeft: "25px",
            marginRight: "40px",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Jobs to do at the week:
        </p>
        <div className="dashboard__day">
          <span id="monday">Monday</span>
          <span>Tuseday</span>
          <span>Wednesday</span>
          <span>Thursday</span>
          <span>Fri</span>
        </div>
        <p
          style={{
            marginLeft: "27px",
            marginTop: "20px",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          Jobs to do today
        </p>
        <div className="dashboard__shape">
          <FontAwesomeIcon id="Shapefacalendar" icon={faCalendarCheck} />
          <p>
            Work <br></br> done !
          </p>
          <p
            style={{
              color: "deeppink",
              fontWeight: "bold",
              marginTop: "15px",
              fontFamily: "sans-serif",
            }}
          >
            See All
          </p>
        </div>

        <div className="dashboard__Rectangle">
          <div className="dashboard__Firstblock">
            <p>Revisar inventario</p>
            <FontAwesomeIcon id="facheck" icon={faSquareCheck} />
          </div>
          <hr id="dashboadHR" />
          <div className="dashboard__Secondblock">
            <p>Limpiar materiales</p>
            <FontAwesomeIcon id="fasqure" icon={faSquare} />
          </div>
        </div>
        <h1 style={{ marginLeft: "30px", marginTop: "30px" }}>
          Employe Status:
        </h1>
        <div className="dashboar__Rectangle25">
          <p style={{ fontWeight: "bold" }}>Request days</p>
          <p style={{ paddingTop: "10px", fontWeight: "100" }}>Type</p>
          <p style={{ fontWeight: "100", paddingBottom: "20px" }}>
            Requested date
          </p>

          <div className="dashboard__Rect25Toggle">
            {" "}
            <p
              style={{
                background: "#ffffff",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              Accepted
            </p>
            <p style={{ marginLeft: "5px" }}>Refused</p>
          </div>
        </div>
        <div className="dashboard__Rectangle21-24">
          <div className="dashboard__Rectangle21">
            <p style={{ color: "deeppink", fontWeight: "bold" }}>Position</p>
            <p
              style={{
                color: "#106079",
                fontWeight: "bold",
                lineHeight: "1",
              }}
            >
              Warehouse manager
            </p>
          </div>
          <div className="dashboard__Rectangle21">
            <p style={{ color: "deeppink", fontWeight: "bold" }}>
              Days available
            </p>
            <p
              style={{
                color: "#106079",
                fontWeight: "bold",
                lineHeight: "1",
              }}
            >
              5
            </p>
          </div>
          <div className="dashboard__Rectangle21">
            <p
              style={{
                color: "deeppink",
                fontWeight: "bold",
                marginTop: "5px",
              }}
            >
              Schedule
            </p>
            <p
              style={{
                marginTop: "5px",
                color: "#106079",
                fontWeight: "bold",
                lineHeight: "1",
              }}
            >
              Monday<br></br> to Friday
            </p>
            <span style={{ marginLeft: "9px", color: "#106079" }}>
              9:30-18:30
            </span>
          </div>
          <div className="dashboard__Rectangle21">
            <p style={{ color: "deeppink", fontWeight: "bold" }}>Puntuality</p>
            <p
              style={{
                color: "#106079",
                fontWeight: "bold",
                lineHeight: "1",
              }}
            >
              95%
            </p>
          </div>
        </div>
        <h1
          style={{
            marginLeft: "30px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          Company News
        </h1>
        <div className="dashboard__emptydiv"></div>
        <BottomManu />
      </div>
    </div>
  );
};

export default Dashboard;
