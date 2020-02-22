import React from "react";
import Aux from "../../hoc/Aux";
import classes from './Layout.css'

const layout = props => (
  <Aux>
    <div>Toolbar, Navigation, Backdrop</div>
    <main className={classes.Layout}>{props.children}</main>
  </Aux>
);

export default layout;
