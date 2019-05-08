import React from "react";

import "./index.css";
import spinner from "./../../assets/Image/loader_ease.gif";

export default function index() {
  return (
    <div className="loading-page">
      <img className="loading-spinner" src={spinner} alt="logo"/>
    </div>
  );
}
