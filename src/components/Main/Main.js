import React from "react";
import "./Main.css";
import data from "../../utils/data";
import CardList from "../CardList/CardList";

function Main() {
  const { products } = data;
  return (
    <main className="main page__section">
      <h1 className="main__title">Alta calidad, productores locales</h1>
      <section className="cards">
        <CardList products={products} />
      </section>
    </main>
  );
}

export default Main;
