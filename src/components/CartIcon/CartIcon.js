import React, { useContext } from "react";
import { useShoppingCart } from "../contexts/CartContext";
import { PopupContext } from "../contexts/PopupContext";
import OrderList from "../Order/OrderList/OrderList";
import "./CartIcon.css";

function CartIcon() {
  let { handlePopup } = useContext(PopupContext);
  const { cartQuantity } = useShoppingCart();
  if (cartQuantity > 0) {
    return (
      <>
        <div
          className="cart-icon"
          onClick={() => handlePopup(<OrderList />)}
        ></div>
        <div className="cart-icon__count">{cartQuantity}</div>
      </>
    );
  } else return null;
}

export default CartIcon;
