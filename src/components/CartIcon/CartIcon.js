import React, { useContext } from "react";
import Cart from "../Cart/Cart";
import { useShoppingCart } from "../contexts/CartContext";
import { PopupContext } from "../contexts/PopupContext";
import "./CartIcon.css";

function CartIcon() {
  let { handlePopup } = useContext(PopupContext);
  const { cartQuantity } = useShoppingCart();
  if (cartQuantity > 0) {
    return (
      <>
        <div className="cart-icon" onClick={() => handlePopup(<Cart />)}></div>
        <div className="cart-icon__count">{cartQuantity}</div>
      </>
    );
  } else return null;
}

export default CartIcon;
