import "./style.css";
import React, { useState, useEffect } from "react";

// Lib
import Pagination from "../../lib/view-coms/Pagination";

// Utils
import { sortData } from "./utils";
import { replaceUrlParams } from "../../lib/utils/replaceUrlParams/replaceUrlParams";

const itemPerPage = 10;
const sortInfo = {
  soryBy: "",
  sortOrder: "",
};

const Table = (props) => {
  const { data, setData } = props;

  // url
  const urlParams = new URLSearchParams(window.location.search);
  const urlParamsPage = Number(urlParams.get("page"));

  const [currentPage, setCurrentPage] = useState(
    urlParamsPage ? urlParamsPage : 1
  );
  const indexOfLastRow = currentPage * itemPerPage;
  const indexOfFirstRow = indexOfLastRow - itemPerPage;
  const currentData = data.slice(indexOfFirstRow, indexOfLastRow);

  const handlePaginationClick = (newPage) => {
    replaceUrlParams({ queryParam: "page", value: newPage });
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

    sortData([...data], setData, sortInfo);
  };

  /* eslint-disable */
  useEffect(() => {
    const urlPageNumber = Number(urlParams.get("page"));
    if (urlPageNumber != currentPage) setCurrentPage(urlPageNumber);
  });
  /* eslint-enable */

  const Row = ({ row }) => {
    const [star, setStar] = useState(!!localStorage.getItem(row.id + "-star"));

    return (
      <tr>
        <td
          className="star"
          data-column="*"
          onClick={() => {
            let newState = !localStorage.getItem(row.id + "-star");

            if (newState) {
              localStorage.setItem(row.id + "-star", newState);
            } else {
              localStorage.removeItem(row.id + "-star");
            }

            setStar(newState);
          }}
        >
          {star ? "*" : "-"}
        </td>
        <td data-column="?????? ?????????? ??????????">{row.name}</td>
        <td data-column="??????????">{row.date}</td>
        <td data-column="?????? ????????">{row.title}</td>
        <td data-column="????????">{row.field}</td>
        <td data-column="?????????? ??????????">{row.old_value}</td>
        <td data-column="?????????? ????????">{row.new_value}</td>
      </tr>
    );
  };

  return (
    <div className="table-root">
      <table>
        <thead>
          <tr>
            <th>*</th>
            <th onClick={() => handleHeaderClick("name")}>?????? ?????????? ??????????</th>
            <th onClick={() => handleHeaderClick("date")}>??????????</th>
            <th onClick={() => handleHeaderClick("title")}>?????? ????????</th>
            <th onClick={() => handleHeaderClick("field")}>????????</th>
            <th onClick={() => handleHeaderClick("old_value")}>?????????? ??????????</th>
            <th onClick={() => handleHeaderClick("new_value")}>?????????? ????????</th>
          </tr>
        </thead>
        <tbody>
          {currentData?.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </tbody>
      </table>
      <div className="table-pagination">
        <Pagination
          currentPage={currentPage}
          dataLength={data.length}
          itemPerPage={itemPerPage}
          paginationOnClick={handlePaginationClick}
        />
      </div>
    </div>
  );
};

export default Table;
