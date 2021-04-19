import "./style.css";
import React from "react";

const Input = ({ title, isRTL, inputType }) => {
  return (
    <div>
      <div className="input-title">
        <span>{title}</span>
      </div>
      <div>
        <input
          className="input-input"
          type={inputType ?? "text"}
          dir={isRTL ? "rtl" : "ltr"}
        />
      </div>
    </div>
  );
};

export default Input;
