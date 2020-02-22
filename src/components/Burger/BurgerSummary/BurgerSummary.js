import React from "react";
import classes from "./BurgerSummary.css";
import Button from "../../UI/Button/Button";

const burgerSummary = props => {
  let orderSummary = Object.keys(props.ingredients).map(inKey => {
    if (props.ingredients[inKey] !== 0)
      return (
        <li key={inKey + props.ingredients[inKey]}>
          {inKey}: {props.ingredients[inKey]}
        </li>
      );
    else return null;
  });
  return (
    <div className={classes}>
      You've ordered the following:
      <ul>{orderSummary}</ul>
      {props.total <= 4 ? null : <p>Your Total is: ${props.total}</p>}
      <Button type="Danger" click={props.closeModal}>
        Cancel
      </Button>
      <Button type="Success">Submit</Button>
    </div>
  );
};

export default burgerSummary;
