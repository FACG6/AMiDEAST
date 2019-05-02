import React from "react";
import Link from "../Link";
import axios from "axios";

import auth from "./../../auth";
import { toast } from "react-toastify";

import "./index.css";

function Linklist(props) {
  const { links, history } = props;
  return (
    <li
      className="sidebar-li-links"
      onClick={
        links.title === "Logout"
          ? () => {
              auth.logout(() => {
                axios.get("/api/v1/logout/").then(() => {
                  toast.success("Goodbye");
                  history.push("/login");
                });
              });
            }
          : null
      }
    >
      <i className={links.fontawesome} />
      {links.title}
      <ul className="sidebar-ul-li-ul">
        {links.links.map(({ title, to }, index) => (
          <Link key={index} title={title} to={to} />
        ))}
      </ul>
    </li>
  );
}
export default Linklist;
