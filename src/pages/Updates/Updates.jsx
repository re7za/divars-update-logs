import "./style.css";
import React from "react";

// Data
import data from "../../mock/data.json";

// Misc
import FilterInputs from "../../components/FilterInputs";
import Table from "../../components/Table";

const Updates = () => {
  return (
    <div>
      <div className="updates-title">
        <h2>صفحه گزارش تغییرات آگهی ها</h2>
      </div>
      <div className="updates-content">
        <FilterInputs />
        <div className="updates-table">
          <Table data={data} />
        </div>
      </div>
    </div>
  );
};

export default Updates;
