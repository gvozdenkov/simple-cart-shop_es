import React from "react";
import "./InputField.css";

function InputField({ value, name, type, onChange }) {
  return (
    <input
      type={type}
      value={value}
      name={name}
      className="form__input"
      onChange={onChange}
      required
    />
  );
}

export default InputField;
