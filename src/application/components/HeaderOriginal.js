import React from "react";
import { makeStyles } from "@material-ui/core";
import Logo from "../images/Logo.png";

const useHeaderStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
  headerDocaskuj: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },

  headerLogo: {
    cursor: "pointer",
    width: "110px",
    marginRight: "20px",
  },

  headerMotto: {
    fontFamily: "Amatic SC",
    fontStyle: "cursive",
    fontSize: "80px",
  },
}));

export default function Header(props) {
  const { style } = props;
  const classes = useHeaderStyles();

  return (
    <header className={classes.headerDocaskuj}>
      <div>
        <img
          className={classes.headerLogo}
          src={Logo}
          alt="Logo"
          style={style || { display: "inline" }}
          onClick={() => window.open("https://zvieratkuj.sk/", "_blank")}
        ></img>
      </div>
      <div>
        <h1 className={classes.headerMotto}>Dočasky zachraňujú životy.</h1>
      </div>
    </header>
  );
}
