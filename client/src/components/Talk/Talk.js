import React, { useState } from "react";
import Popup from "./Popup";
import "./Talk.css";

const Talk = () => {
  return (
    <div className="Container">
      <div className="Talk">
        <h1>Talk</h1>
      </div>
      <img src="/gify.png" alt="talk" className="talk_gif" />
    </div>
  );
};

export default Talk;
