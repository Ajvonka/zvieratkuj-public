import React from "react";
import { MenuItems } from "./MenuItems";
import "../../../application/App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="main-nav">
      {MenuItems.map((item, index) => {
        return (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Navbar;
