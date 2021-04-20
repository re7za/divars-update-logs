import "./style.css";
import React, { useState } from "react";

// Data
import data from "../../mock/data.json";

// Utils
import { filter } from "./utils";

// Misc
import FilterInputs from "../../components/FilterInputs";
import Table from "../../components/Table";

const Updates = () => {
  const [filters, setFilters] = useState([]);
  const [mutableData, setMutableData] = useState(data);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    filter(data, setMutableData, newFilters);
  };

  return (
    <div>
      <div className="updates-title">
        <h2>صفحه گزارش تغییرات آگهی ها</h2>
      </div>
      <div className="updates-content">
        <FilterInputs filters={filters} onFiltersChange={handleFiltersChange} />
        <div className="updates-table">
          <Table data={mutableData} setData={setMutableData} />
        </div>
      </div>
    </div>
  );
};

export default Updates;
