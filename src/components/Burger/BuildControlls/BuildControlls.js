import React from "react";
import BuildController from "./BuildController/BuildController";
import classes from "./BuildControlls.css";
const controlInformation = [
  { label: "Salad", type: "Salad" },
  { label: "Bacon", type: "Bacon" },
  { label: "Cheese", type: "Cheese" },
  { label: "Meat", type: "Meat" }
];

const buildControlls = props => (
  <div className={classes.BuildControlls}>
    <p>
      Total Price: <strong>${props.totalPrice}</strong>
    </p>
    {controlInformation.map(item => {
      return (
        <BuildController
          addIngredient={() => props.addIngredient(item.type)}
          removeIngredient={() => props.removeIngredient(item.type)}
          label={item.label}
          key={item.type}
          disabled={props.disabled[item.type]}
        />
      );
    })}

    <button
      onClick={props.showSummary}
      disabled={props.buttonDisable}
      className={classes.OrderButton}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControlls;
