import React, { useEffect, useState } from "react";

export default () => {
  let [popup, setPopup] = useState(false);
  let [popupContent, setPopupContent] = useState("I am a popup!");

  let handlePopupOpen = () => {
    if (popup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  useEffect(() => {
    handlePopupOpen();
  }, [popup]);

  let handlePopup = (content = false) => {
    setPopup(!popup);
    if (content) {
      setPopupContent(content);
    }
  };

  return { popup, popupContent, handlePopup };
};
