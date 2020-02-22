import React from "react";
import BurgerIngredient from "../Burger/BurgerIngredients/BurgerIngredients";
import classes from "./Burger.css";
const burger = props => {
  let ingredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return (
          <BurgerIngredient
            type={igKey}
            key={igKey + i}
          />
        );
      });
    })
    .reduce((prev, next) => {
      return next.concat(prev);
    }, []);
  if (ingredients.length === 0) {
    ingredients = <p>Please add some ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="Bread-Top" />
      {ingredients}
      <BurgerIngredient type="Bread-Bottom" />
    </div>
  );
};

export default burger;
