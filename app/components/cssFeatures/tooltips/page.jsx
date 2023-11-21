import React from "react";

const ToolTip = ({ tipText, alignToolTipText, tooltipsText }) => {
  // Use a class named .tooltips for the parent HTML element
  return (
    <span className={`${tooltipsText} ${alignToolTipText}`}>{tipText}</span>
  );
};

export default ToolTip;
