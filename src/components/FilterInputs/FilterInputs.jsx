import "./style.css";
import React from "react";

// Lib
import Input from "../../lib/view-coms/Input";

const FilterInputs = () => {
  return (
    <div className="filterInputs-root">
      <div className="filterInputs-input flex-grow-3">
        <Input title="نام تغییر دهنده" isRTL={true} />
      </div>
      <div className="filterInputs-input flex-grow-1">
        <Input title="تاریخ" />
      </div>
      <div className="filterInputs-input flex-grow-5">
        <Input title="نام آگهی" isRTL={true} />
      </div>
      <div className="filterInputs-input flex-grow-3">
        <Input title="فیلد" isRTL={true} />
      </div>
    </div>
  );
};

export default FilterInputs;
