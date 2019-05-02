import React from "react";
import "./index.css";
import auth from "./../../auth";

export default function index(props) {
  const { push } = props.history;
  const { role, authenticated } = auth.isAuthenticated();
  if (authenticated) push(`/${role}`);
  return (
    <div className="home-container">
      <button onClick={() => push("/student")} className="home-btn">
        Student
      </button>
      <button onClick={() => push("/staff")} className="home-btn">
        EL / Employee
      </button>
    </div>
  );
}
