import React from "react";
import OrderItem from "../OrderItem/OrderItem";
import "./OrderList.css";

function OrderList() {
  return (
    <section className="order-list">
      <h2 className="order__title">Your order:</h2>
      <ul className="order__items">
        <li className="order__item">
          <OrderItem />
        </li>
        <li className="order__item">
          <OrderItem />
        </li>
        <li className="order__item">
          <OrderItem />
        </li>
      </ul>
      <p className="order__total">Total: 40$</p>
    </section>
  );
}

export default OrderList;
