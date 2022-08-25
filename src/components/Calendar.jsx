import React from "react";
import Statusbar from "./Statusbar";
import Topmanu from "./Topmanu";
import "./Calendar.css";
import Framweek from "./Framweek";
import Bigtoggle from "./Bigtoggle";

const Calendar = () => {
  return (
    <div>
      <Statusbar />
      <Topmanu />
      <Bigtoggle />
      <div className="Calendar">
        <span
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
          This Month
        </span>
        <span
          style={{
            paddingTop: "20px",
            marginLeft: "110px",
            color: "deeppink",
            paddingBottom: "10px",
            fontWeight: "bold",
            fontSize: "18px",
            color: "#797D7F",
          }}
        >
          This Week
        </span>
      </div>
      <hr style={{ marginTop: "11px" }} />
      <p
        style={{
          margin: "30px",
          fontSize: "20px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        Oct,10,Friday
      </p>
      <Framweek />
    </div>
  );
};

export default Calendar;
