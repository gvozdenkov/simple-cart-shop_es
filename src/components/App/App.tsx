import React from "react";
import CartPopup from "../cart-popup/CartPopup";
import CartIcon from "../CartIcon";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <CartIcon />
      <Main />
      <Footer />
      <CartPopup />
    </>
  );
}

export default App;
