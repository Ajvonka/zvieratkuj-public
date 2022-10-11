import React from "react";
import "../../application/App.css";
import Navbar from "../components/Navbar/Navbar";
import * as IconName from "react-icons/ri";

export default function Header() {
  return (
    <header className="header">
      <h1 class="logo">
        Pet Healthcare{" "}
        <IconName.RiHeartPulseLine
          style={{ color: "#009999", fontSize: "1.5em" }}
        />
      </h1>
      <Navbar />
    </header>
  );
}
