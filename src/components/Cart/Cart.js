import React from "react";
import { useShoppingCart } from "../contexts/CartContext";
import OrderList from "../Order/OrderList/OrderList";

function Cart() {
  const { cartItems } = useShoppingCart();
  return <OrderList items={cartItems} />;
}

export default Cart;
