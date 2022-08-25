import React, { useState } from "react";

export default () => {
  let [popup, setPopup] = useState(false);
  let [popupContent, setPopupContent] = useState("I am a popup!");

  let handlePopup = (content = false) => {
    setPopup(!popup);
    if (content) {
      setPopupContent(content);
    }
  };

  return { popup, popupContent, handlePopup };
};
