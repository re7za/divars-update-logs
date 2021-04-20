import "./style.css";
import React, { useState } from "react";

// Lib
import Pagination from "../../lib/view-coms/Pagination";

// Utils
import { sortData } from "./utils";

const itemPerPage = 10;
const sortInfo = {
  soryBy: "",
  sortOrder: "",
};

const Table = (props) => {
  const { data } = props;

  /* eslint-disable */
  const [mutableData, setMutableData] = useState(data);
  /* eslint-enable */
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRow = currentPage * itemPerPage;
  const indexOfFirstRow = indexOfLastRow - itemPerPage;
  const currentData = mutableData.slice(indexOfFirstRow, indexOfLastRow);

  const handlePaginationClick = (newPage) => {
    setCurrentPage(Number(newPage));
  };

  const handleHeaderClick = async (value) => {
    if (sortInfo.soryBy === value) {
      sortInfo.sortOrder === "topToBottom"
        ? (sortInfo.sortOrder = "bottomToTop")
        : (sortInfo.sortOrder = "topToBottom");
    } else {
      sortInfo.soryBy = value;
      sortInfo.sortOrder = "topToBottom";
    }

    sortData([...mutableData], setMutableData, sortInfo);
  };

  return (
    <div className="table-root">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleHeaderClick("name")}>نام تغییر دهنده</th>
            <th onClick={() => handleHeaderClick("date")}>تاریخ</th>
            <th onClick={() => handleHeaderClick("title")}>نام آگهی</th>
            <th onClick={() => handleHeaderClick("field")}>فیلد</th>
            <th onClick={() => handleHeaderClick("old_value")}>مقدار قدیمی</th>
            <th onClick={() => handleHeaderClick("new_value")}>مقدار جدید</th>
          </tr>
        </thead>
        <tbody>
          {currentData?.map((row) => (
            <tr key={row.id}>
              <td data-column="نام تغییر دهنده">{row.name}</td>
              <td data-column="تاریخ">{row.date}</td>
              <td data-column="نام آگهی">{row.title}</td>
              <td data-column="فیلد">{row.field}</td>
              <td data-column="مقدار قدیمی">{row.old_value}</td>
              <td data-column="مقدار جدید">{row.new_value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-pagination">
        <Pagination
          currentPage={currentPage}
          dataLength={mutableData.length}
          itemPerPage={itemPerPage}
          paginationOnClick={handlePaginationClick}
        />
      </div>
    </div>
  );
};

export default Table;
