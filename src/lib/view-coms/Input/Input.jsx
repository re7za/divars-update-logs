import "./style.css";
import React, { useState } from "react";

const Input = (props) => {
  const { title, type, isRTL, inputType, onValueChange } = props;

  const [value, setValue] = useState("");
  const [valueTimeout, setValueTimeout] = useState();

  const handleChangeValue = (e) => {
    clearTimeout(valueTimeout);

    const text = e.target.value;
    setValue(text);

    setValueTimeout(
      setTimeout(() => {
        onValueChange(type, text);
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
