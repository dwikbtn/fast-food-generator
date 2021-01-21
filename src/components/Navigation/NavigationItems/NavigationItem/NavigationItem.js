import React from "react";

import classes from "./NavigationItem.module.css";
import { Navlink } from "react-router-dom";

const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <Navlink to={props.link}>{props.children}</Navlink>
    </li>
  );
};

export default NavigationItem;
