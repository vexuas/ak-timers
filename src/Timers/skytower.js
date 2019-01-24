import React, { Component } from "react";
import Header from "../Header/header.js";
import { link } from "./home.json";

class Skytower extends Component {
  render() {
    return (
      <div id="skyTower">
        <Header
          timerName="Raids"
          timerColor={{ color: "#66b2ff" }}
          link={link}
        />
      </div>
    );
  }
}

export default Skytower;
