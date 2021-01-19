import React, { Component } from "react";
import Button from "../../UI/Button/Button";
import classes from "./ContactData.module.css";

export default class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data</h4>
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            className={classes.Input}
            type="email"
            name="email"
            placeholder="your email"
          />
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="street"
          />
          <input
            className={classes.Input}
            type="text"
            name="postal"
            placeholder="postal code"
          />
          <Button btnType="Success">Order</Button>
        </form>
      </div>
    );
  }
}
