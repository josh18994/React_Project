import React from "react";
import classes from './BuildController.css'

const buildController = (props) => (
  <div className={classes.BuildController}>
      <label className={classes.Label}>{props.label}</label>
      <button disabled={props.disabled} onClick={props.removeIngredient} className={classes.Less}>Less</button>
      <button onClick={props.addIngredient} className={classes.More}>More</button>
  </div>
);

export default buildController;
