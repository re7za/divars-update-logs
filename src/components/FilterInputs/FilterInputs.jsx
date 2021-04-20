import "./style.css";
import React, { useEffect } from "react";

// Lib
import Input from "../../lib/view-coms/Input";

// Utils
import { modifyFiltersInUrl, getUrlFilterParams } from "./utils";
import { replaceUrlParams } from "../../lib/utils/replaceUrlParams/replaceUrlParams";

const FilterInputs = (props) => {
  const { filters, onFiltersChange } = props;

  const changeFilter = (newFilters) => {
    replaceUrlParams({ queryParam: "page", value: 1 });
    modifyFiltersInUrl(newFilters);

    onFiltersChange(newFilters);
  };

  const handleFiltersChange = (type, value) => {
    let existIndex = -1;
    for (const i in filters) {
      if (filters[i].type === type) {
        existIndex = i;
        break;
      }
    }

    if (existIndex === -1) {
      // add
      if (value) changeFilter([...filters, { type, value }]);
    } else {
      if (value) {
        // update
        changeFilter(
          filters.map((item) =>
            item.type !== type ? { ...item } : { type, value }
          )
        );
      } else {
        // remove
        changeFilter(filters.filter((item) => item.type !== type));
      }
    }
  };

  /* eslint-disable */
  useEffect(() => {
    onFiltersChange(getUrlFilterParams());
  }, []);
  /* eslint-enable */

  return (
    <div className="filterInputs-root">
      <div className="filterInputs-input flex-grow-3">
        <Input
          type="name"
          title="نام تغییر دهنده"
          isRTL={true}
          onValueChange={handleFiltersChange}
        />
      </div>
      <div className="filterInputs-input flex-grow-1">
        <Input type="date" title="تاریخ" onValueChange={handleFiltersChange} />
      </div>
      <div className="filterInputs-input flex-grow-5">
        <Input
          type="title"
          title="نام آگهی"
          isRTL={true}
          onValueChange={handleFiltersChange}
        />
      </div>
      <div className="filterInputs-input flex-grow-3">
        <Input
          type="field"
          title="فیلد"
          isRTL={true}
          onValueChange={handleFiltersChange}
        />
      </div>
    </div>
  );
};

export default FilterInputs;
