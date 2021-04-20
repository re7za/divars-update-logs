import "./style.css";
import React, { useState } from "react";

// Lib
import Pagination from "../../lib/view-coms/Pagination";

const itemPerPage = 10;

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

  return (
    <div className="table-root">
      <table>
        <thead>
          <tr>
            <th>نام تغییر دهنده</th>
            <th>تاریخ</th>
            <th>نام آگهی</th>
            <th>فیلد</th>
            <th>مقدار قدیمی</th>
            <th>مقدار جدید</th>
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
