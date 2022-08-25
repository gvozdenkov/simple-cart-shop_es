import React from "react";
import CartPopup from "../popups/cart-popup/CartPopup";
import CartIcon from "../CartIcon/CartIcon";
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
