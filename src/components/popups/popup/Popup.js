import React from "react";
import "./Popup.css";

function Popup({ isOpen, onClose, children }) {
  return (
    <div className={`popup ${isOpen ? "popup_is-open" : ""}`}>
      <div className="popup__content">
        <button className="popup__close-btn" onClick={onClose}></button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
