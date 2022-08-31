import { useEffect, useState } from "react";

const usePopup = () => {
  let [popup, setPopup] = useState(false);
  let [popupContent, setPopupContent] = useState("I am a popup!");

  useEffect(() => {
    const handlePopupOpen = () => {
      if (popup) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    };
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

export default usePopup;
