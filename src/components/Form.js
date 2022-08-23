import React from "react";
import "./Form.css";

function Form() {
  return (
    <form className="form">
      <label className="form__field">
        Name
        <input
          className="form__input form__input_type_name"
          type="text"
          name="name"
          id=""
          minlength="2"
          maxlength="30"
          required
        />
      </label>
      <label className="form__field">
        Email adress
        <input
          className="form__input form__input_type_mail"
          type="email"
          name="mail"
          id=""
          required
        />
      </label>
      <label className="form__field">
        Telephone number
        <input
          className="form__input form__input_type_phone"
          type="tel"
          name="phone"
          id=""
          required
        />
      </label>
      <button type="submit" class="form__button form__button_type_submit">
        Check out
      </button>
    </form>
  );
}

export default Form;
