import React from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Aux";
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
  return (
    <Aux>
        <Backdrop close={props.close} showBackdrop={props.showModal}/>
      <div
        className={classes.Modal}
        style={{
          transform: props.showModal ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.showModal ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default modal;
