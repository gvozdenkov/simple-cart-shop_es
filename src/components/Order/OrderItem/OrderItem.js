import React from "react";
import "./OrderItem.css";
import "../../../../src/blocks/svg-button/svg-button.css";
import data from "../../../utils/data";
import { useShoppingCart } from "../../contexts/CartContext";

function OrderItem({ item }) {
  const { products } = data;
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const elem = products.find((i) => i._id === item.id);
  const elem_image = { backgroundImage: `url(${elem.image})` };
  return (
    <>
      <div className="order-item__image" style={elem_image}></div>
      <div className="order-item__wrp">
        <p className="order-item__title">{elem.title}</p>
        <div className="order-item__control-wrp">
          <div className="order-item__amount-wrp">
            <button
              className="svg-button svg-button_minus"
              onClick={() => decreaseCartQuantity(item.id)}
            ></button>
            <span className="order-item__amount">{item.quantity}</span>
            <button
              className="svg-button svg-button_plus"
              onClick={() => increaseCartQuantity(item.id)}
            ></button>
          </div>
          <span className="order-item__sum">
            ${Math.round(elem.price * item.quantity * 100) / 100}
          </span>
        </div>
      </div>
      <div className="order-item__remove">
        <button
          className="svg-button svg-button_remove"
          onClick={() => removeFromCart(item.id)}
        ></button>
      </div>
    </>
  );
}

export default OrderItem;
