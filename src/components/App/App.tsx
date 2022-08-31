import React from "react";
import CartIcon from "../CartIcon/CartIcon";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { PopupProvider } from "../contexts/PopupContext";
import "./App.css";
import { ShoppingCartProvider } from "../contexts/CartContext";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Header />
        <Main />
        <Footer />
        <PopupProvider>
          <CartIcon />
        </PopupProvider>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
