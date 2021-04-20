import "./style.css";
import React from "react";

// Lib
import Input from "../../lib/view-coms/Input";

const FilterInputs = (props) => {
  const { filters, onFiltersChange } = props;

  const handleFiltersChange = (type, text) => {
    let existIndex = -1;
    for (const i in filters) {
      if (filters[i].type === type) {
        existIndex = i;
        break;
      }
    }

    if (existIndex === -1) {
      // add
      if (text) onFiltersChange([...filters, { type, text }]);
    } else {
      if (text) {
        // update
        onFiltersChange(
          filters.map((item) =>
            item.type !== type ? { ...item } : { type, text }
          )
        );
      } else {
        // remove
        onFiltersChange(filters.filter((item) => item.type !== type));
      }
    }
  };

  return (
    <div className="filterInputs-root">
      <div className="filterInputs-input flex-grow-3">
        <Input
          type={"name"}
          title="نام تغییر دهنده"
          isRTL={true}
          onValueChange={handleFiltersChange}
        />
      </div>
      <div className="filterInputs-input flex-grow-1">
        <Input
          type={"date"}
          title="تاریخ"
          onValueChange={handleFiltersChange}
        />
      </div>
      <div className="filterInputs-input flex-grow-5">
        <Input
          type={"title"}
          title="نام آگهی"
          isRTL={true}
          onValueChange={handleFiltersChange}
        />
      </div>
      <div className="filterInputs-input flex-grow-3">
        <Input
          type={"field"}
          title="فیلد"
          isRTL={true}
          onValueChange={handleFiltersChange}
        />
      </div>
    </div>
  );
};

export default FilterInputs;
