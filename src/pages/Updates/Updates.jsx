import "./style.css";
import React, { useState } from "react";

// Data
import data from "../../mock/data.json";

// Utils
import { filter } from "./utils";
import { replaceUrlParams } from "../../lib/utils/replaceUrlParams/replaceUrlParams";

// Misc
import FilterInputs from "../../components/FilterInputs";
import Table from "../../components/Table";

const Updates = () => {
  // url
  // const urlParams = new URLSearchParams(window.location.search);
  // const myParam = urlParams.get("page");

  // fliters
  const [filters, setFilters] = useState([]);
  const [mutableData, setMutableData] = useState(data);

  const handleFiltersChange = (newFilters) => {
    replaceUrlParams({ queryParam: "page", value: 1 });
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
