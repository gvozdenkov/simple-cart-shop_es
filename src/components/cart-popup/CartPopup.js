import React from "react";
import Form from "../Form";
import Order from "../Order/Order";
import "./CartPopup.css";

function CartPopup() {
  return (
    <div className="popup">
      <div className="popup__content">
        <button class="popup__close-btn"></button>
        <Order />
        <Form />
      </div>
    </div>
  );
}

export default CartPopup;
