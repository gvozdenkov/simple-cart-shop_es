import React, { useState } from "react";
import CartPopup from "../popups/cart-popup/CartPopup";
import CartIcon from "../CartIcon/CartIcon";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.css";

function App() {
  const [isCartPopupOpen, setCartPopupOpen] = useState(false);

  const handleCartIconClick = () => {
    setCartPopupOpen(true);
  };

  const closeAllPopups = () => {
    setCartPopupOpen(false);
  };

  return (
    <>
      <Header />
      <CartIcon onClick={handleCartIconClick} />
      <Main />
      <Footer />
      <CartPopup isOpen={isCartPopupOpen} onClose={closeAllPopups} />
    </>
  );
}

export default App;
