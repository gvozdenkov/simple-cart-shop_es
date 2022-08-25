import React from "react";
import "./CartIcon.css";

function CartIcon({ onClick }) {
  return (
    <>
      <div className="cart-icon" onClick={onClick}></div>
      <div className="cart-icon__count">7</div>
    </>
  );
}

export default CartIcon;
