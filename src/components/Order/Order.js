import React from "react";
import "./Order.css";

function Order() {
  return (
    <section className="order">
      <h2 className="order__title">Your order:</h2>
      <ul classNmae="order__items">
        <li className="order__item">item 01</li>
        <li className="order__item">item 02</li>
        <li className="order__item">item 03</li>
      </ul>
      <p className="order__total">Total: 40$</p>
    </section>
  );
}

export default Order;
