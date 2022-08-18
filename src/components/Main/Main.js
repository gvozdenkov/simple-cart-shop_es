import React from "react";
import Card from "../Card/Card";
import "./Main.css";
import data from "../../utils/data";

function Main() {
  const { products } = data;
  return (
    <main className="main page__section">
      <h1 className="main__title">High quality, local producers</h1>
      <section className="cards">
        <ul className="cards__list">
          {products.map((product) => {
            return (
              <li key={product._id}>
                <Card product={product} />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
