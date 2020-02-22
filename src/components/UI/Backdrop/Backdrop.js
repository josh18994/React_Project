import React from "react";
import classes from "./Backdrop.css";

const backdrop = (props) => {
  return (
      props.showBackdrop ? <div onClick={props.close} className={classes.Backdrop}></div> : null
  )
};

export default backdrop;
