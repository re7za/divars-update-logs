import "./style.css";
import React, { useState } from "react";

const Input = (props) => {
  const { title, type, isRTL, inputType, onValueChange } = props;

  const urlParams = new URLSearchParams(window.location.search);
  const urlParam = urlParams.get(type);

  const [value, setValue] = useState(urlParam ?? "");
  const [valueTimeout, setValueTimeout] = useState();

  const handleChangeValue = (e) => {
    clearTimeout(valueTimeout);

    const value = e.target.value;
    setValue(value);

    setValueTimeout(
      setTimeout(() => {
        onValueChange(type, value);
      }, 500)
    );
  };

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
          value={value}
          onChange={handleChangeValue}
        />
      </div>
    </div>
  );
};

export default React.memo(Input);
