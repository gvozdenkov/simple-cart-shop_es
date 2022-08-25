import React, { useContext } from "react";
import { PopupContext } from "../contexts/PopupContext";
import OrderList from "../Order/OrderList/OrderList";
import "./CartIcon.css";

function CartIcon() {
  let { handlePopup } = useContext(PopupContext);
  return (
    <>
      <div
        className="cart-icon"
        onClick={() => handlePopup(<OrderList />)}
      ></div>
      <div className="cart-icon__count">7</div>
    </>
  );
}

export default CartIcon;
