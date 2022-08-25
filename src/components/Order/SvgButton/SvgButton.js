import React from "react";
import "./SvgButton.css";

function SvgButton({ width, height, img }) {
  const styles = {
    minWidth: width,
    maxWidth: width,
    minHeight: height,
    maxHeight: height,
    backgroundImage: `url(${img})`,
  };

  return <button className="svg-button" style={styles}></button>;
}

export default SvgButton;
