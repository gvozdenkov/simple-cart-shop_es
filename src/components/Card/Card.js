import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="card__img-wrap">
        <img
          src="https://cdn-icons-png.flaticon.com/512/71/71905.png"
          alt="milk bottle"
          className="card__img"
        />
      </div>
      <div className="card__new-ticker">new</div>
      <div className="card__descriptin">
        <p className="card__title">Fairlife Whole Milk, 52 oz</p>
        <p className="card__price">$4.23</p>
      </div>
    </div>
  );
}

export default Card;
