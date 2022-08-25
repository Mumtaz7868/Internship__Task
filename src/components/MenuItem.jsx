import React from "react";
import { Link } from "react-router-dom";

const MenuItem = () => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          fontSize: "20px",
          listStyle: "none",
          fontWeight: "bold",
        }}
      >
        <li
          style={{
            padding: "5px ",
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
        </li>
        <li style={{ padding: "5px " }}>
          <Link style={{ textDecoration: "none" }} to="/Taskview ">
            Taskview
          </Link>
        </li>
        <li style={{ padding: "5px " }}>
          <Link style={{ textDecoration: "none" }} to="/Taskcreation ">
            Taskcreation{" "}
          </Link>
        </li>
        <li style={{ padding: "5px " }}>
          <Link style={{ textDecoration: "none" }} to="/Taskcreationfull">
            Taskcreationfull
          </Link>
        </li>
        <li style={{ padding: "5px " }}>
          <Link style={{ textDecoration: "none" }} to="/Calendar">
            Calendar
          </Link>
        </li>
        <li style={{ padding: "5px " }}>
          <Link style={{ textDecoration: "none" }} to="/Dashboard ">
            Dashboard{" "}
          </Link>
        </li>
        <li style={{ padding: "5px " }}>
          <Link style={{ textDecoration: "none" }} to="/Profile ">
            Profile{" "}
          </Link>
        </li>
        <li style={{ padding: "5px " }}>
          <Link style={{ textDecoration: "none" }} to="/Setting ">
            Setting{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuItem;
