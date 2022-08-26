import React from "react";
import { useShoppingCart } from "../contexts/CartContext";
import "./Card.css";

function Card({ product }) {
  const newTickerStyle = `card__new-ticker ${
    product.is_new === true ? "" : "card__new-ticker_hidden"
  }`;

  const { getItemQuantity, increaseCartQuantity } = useShoppingCart();
  const quantity = getItemQuantity(product._id);
  return (
    <article className="card" onClick={() => increaseCartQuantity(product._id)}>
      <div className="card__img-wrap">
        <img src={product.image} alt={product.title} className="card__img" />
      </div>
      <div className={newTickerStyle}>new</div>
      <div className="card__descriptin">
        <p className="card__title">{product.title}</p>
        <p className="card__price">${product.price}</p>
        <div>
          {quantity === 0 ? <p>Not Added</p> : <p>Added {quantity} times</p>}
        </div>
      </div>
    </article>
  );
}

export default Card;
