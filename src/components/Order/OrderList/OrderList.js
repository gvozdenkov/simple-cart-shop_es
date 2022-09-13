import React from "react";
import data from "../../../utils/data";
import OrderItem from "../OrderItem/OrderItem";
import "./OrderList.css";

function OrderList({ items }) {
  const { products } = data;
  const total = items.reduce((total, cartItem) => {
    const item = products.find((i) => i._id === cartItem.id);
    return total + item.price * cartItem.quantity;
  }, 0);

  return (
    <section className="order-list">
      <h2 className="order__title">Tu pedido:</h2>
      <ul className="order__items">
        {items.map((item) => {
          return (
            <li className="order__item" key={item.id}>
              <OrderItem item={item} />
            </li>
          );
        })}
      </ul>
      <p className="order__total">Total: {Math.round(total * 100) / 100}$</p>
    </section>
  );
}

export default OrderList;
