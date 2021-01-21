import React from "react";

import Classes from "./Order.css";

export const Order = (props) => {
  return (
    <div className={Classes.Order}>
      <p>ingredients: Salad (1)</p>
      <p>
        Price <strong>USD 5</strong>
      </p>
    </div>
  );
};
