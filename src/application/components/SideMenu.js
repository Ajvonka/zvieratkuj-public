import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
  },
}));

//TODO: Use props
export default function SideMenu() {
  const classes = useStyles();
  return <div className={classes.sideMenu}></div>;
}
