import React, { useState } from "react";
import Form from "../../form/Form";
import InputField from "../../form/input-field/InputField";
import OrderList from "../../Order/OrderList/OrderList";
import Popup from "../popup/Popup";
import "./CartPopup.css";

function CartPopup() {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { name, email, phone } = inputValue;

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(inputValue);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("submit this: ", inputValue);
  };
  return (
    <Popup isOpen={true}>
      <OrderList />
      <Form name="order">
        <label className="form__filed">
          Name
          <InputField
            value={name}
            type={"text"}
            name={"name"}
            onChange={handleChange}
          />
        </label>
        <label className="form__filed">
          Email
          <InputField
            value={email}
            type={"email"}
            name={"email"}
            onChange={handleChange}
          />
        </label>
        <label className="form__filed">
          Telephone number
          <InputField
            value={phone}
            type={"tel"}
            name={"phone"}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="form__button form__button_type_submit">
          Check out
        </button>
      </Form>
    </Popup>
  );
}

export default CartPopup;
