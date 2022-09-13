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
          Nombre
          <input
            type="text"
            name="name"
            className="form__input"
            required
          ></input>
        </label>
        <label className="form__field">
          Dirección de correo electrónico
          <input
            type="email"
            name="email"
            className="form__input"
            required
          ></input>
        </label>
        <label className="form__field">
          Número de teléfono
          <input type="tel" name="tel" className="form__input" required></input>
        </label>
        <button type="submit" className="form__submit">
          Comprar
        </button>
      </Form>
    </>
  );
}

export default Cart;
