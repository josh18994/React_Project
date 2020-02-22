import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BurgerControlls from "../../components/Burger/BuildControlls/BuildControlls";
import Modal from "../../components/UI/Modal/Modal";
import BurgerSummary from "../../components/Burger/BurgerSummary/BurgerSummary";

const EACH_INGREDIENT_COST = {
  Salad: 2,
  Cheese: 2,
  Meat: 4,
  Bacon: 2
};

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Meat: 0,
      Cheese: 0,
      Salad: 0,
      Bacon: 0
    },
    totalCost: 4,
    showModal: false
  };

  onAddIngredient = ingredient => {
    //Adding the ingrdient
    const oldIngredientCount = this.state.ingredients[ingredient];
    const updatedIngredientCount = oldIngredientCount + 1;
    let updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[ingredient] = updatedIngredientCount;

    //Adding to Total Cost
    const costOfIngredient = EACH_INGREDIENT_COST[ingredient];
    const updatedCost = this.state.totalCost + costOfIngredient;
    let updatedTotalCost = { ...this.state.totalCost };
    updatedTotalCost = updatedCost;
    this.setState({
      ingredients: updatedIngredients,
      totalCost: updatedTotalCost
    });
  };

  onRemoveIngredient = ingredient => {
    const oldIngredientCount = this.state.ingredients[ingredient];
    const updatedIngredientCount = oldIngredientCount - 1;
    let updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[ingredient] = updatedIngredientCount;

    //Subtracting from Total Cost
    const costOfIngredient = EACH_INGREDIENT_COST[ingredient];
    const updatedCost = this.state.totalCost - costOfIngredient;
    let updatedTotalCost = { ...this.state.totalCost };
    updatedTotalCost = updatedCost;
    this.setState({
      ingredients: updatedIngredients,
      totalCost: updatedTotalCost
    });
  };

  controlModalView = () => {
      let showModal = this.state.showModal;
      this.setState({showModal: !showModal})
  }


  render() {

    let disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderNowDisabledStatus = this.state.totalCost <= 4;

    return (
      <Aux>
        <Modal close={this.controlModalView} showModal={this.state.showModal}>
          <BurgerSummary
            total={this.state.totalCost}
            ingredients={this.state.ingredients}
            closeModal={this.controlModalView}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControlls
          disabled={disabledInfo}
          addIngredient={this.onAddIngredient}
          removeIngredient={this.onRemoveIngredient}
          totalPrice={this.state.totalCost}
          buttonDisable={orderNowDisabledStatus}
          showSummary={this.controlModalView}
        />
      </Aux>
    );
  }
}
