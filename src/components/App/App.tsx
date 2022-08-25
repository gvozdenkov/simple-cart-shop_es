import React, { useState } from "react";
import Popup from "../Popup/Popup";
import CartIcon from "../CartIcon/CartIcon";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { PopupProvider, PopupContext } from "../contexts/PopupContext";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <PopupProvider>
        <CartIcon />
      </PopupProvider>
    </>
  );
}

export default App;
