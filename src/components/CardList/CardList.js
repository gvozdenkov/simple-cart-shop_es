import React from "react";
import Card from "../Card/Card";
import "./CardList.css";

function CardList({ products }) {
  return (
    <ul className="card-list">
      {products.map((product) => {
        return (
          <li key={product._id}>
            <Card product={product} />
          </li>
        );
      })}
    </ul>
  );
}

export default CardList;
