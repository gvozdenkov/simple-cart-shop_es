import React from "react";
import OrderItem from "../OrderItem/OrderItem";
import "./OrderList.css";

function OrderList({ items }) {
  return (
    <section className="order-list">
      <h2 className="order__title">Your order:</h2>
      <ul className="order__items">
        {items.map((item) => {
          return (
            <li className="order__item" key={item.id}>
              <OrderItem item={item} />
            </li>
          );
        })}
      </ul>
      <p className="order__total">Total: 40$</p>
    </section>
  );
}

export default OrderList;
