import React, { createContext } from "react";
import usePopup from "../Popup/hooks/usePopup";
import Popup from "../Popup/Popup";

export let PopupContext;
let { Provider } = (PopupContext = createContext());

export let PopupProvider = ({ children }) => {
  let { popup, popupContent, handlePopup } = usePopup();
  return (
    <Provider value={{ popup, popupContent, handlePopup }}>
      <Popup />
      {children}
    </Provider>
  );
};

// export default { PopupContext, PopupProvider };