import React from "react";
import { useShoppingCart } from "../contexts/CartContext";
import Form from "../form/Form";
import OrderList from "../Order/OrderList/OrderList";

function Cart() {
  const { cartItems } = useShoppingCart();
  return (
    <>
      <OrderList items={cartItems} />
      <Form name="order">
        <label className="form__field">
          Name
          <input
            type="text"
            name="name"
            className="form__input"
            required
          ></input>
        </label>
        <label className="form__field">
          Email address
          <input
            type="email"
            name="email"
            className="form__input"
            required
          ></input>
        </label>
        <label className="form__field">
          Telephone number
          <input type="tel" name="tel" className="form__input" required></input>
        </label>
        <button type="submit" className="form__submit">
          Check out
        </button>
      </Form>
    </>
  );
}

export default Cart;
