import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { PopupContext } from "../contexts/PopupContext";
import "./Popup.css";

const Popup = () => {
  let { popup, popupContent, handlePopup } = useContext(PopupContext);
  if (popup) {
    return createPortal(
      <div className="popup popup_is-open">
        <div className="wrap2">
          <div className="wrap3">
            <div className="wrap4">
              <div className="popup__content">
                <button
                  className="popup__close-btn"
                  onClick={() => handlePopup()}
                ></button>
                {popupContent}
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.querySelector("#modal-root")
    );
  } else return null;
};

export default Popup;
