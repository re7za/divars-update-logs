import "./style.css";
import React from "react";

// Misc
import FilterInputs from "../../components/FilterInputs";

const Updates = () => {
  return (
    <div>
      <div className="updates-title">
        <h2>صفحه گزارش تغییرات آگهی ها</h2>
      </div>
      <div className="updates-content">
        <FilterInputs />
        <div className="updates-table">table</div>
      </div>
    </div>
  );
};

export default Updates;
