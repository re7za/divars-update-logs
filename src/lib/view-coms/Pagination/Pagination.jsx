import "./style.css";
import React from "react";

const Pagination = (props) => {
  const { currentPage, dataLength, itemPerPage, paginationOnClick } = props;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(dataLength / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination-numbers">
      {currentPage < 7 ? (
        <>
          {pageNumbers.map(
            (number) =>
              number < 10 && (
                <li
                  className={
                    number !== currentPage
                      ? "pagination-number"
                      : "pagination-number pagination-current"
                  }
                  key={number}
                  id={number}
                  onClick={() => paginationOnClick(number)}
                >
                  {number}
                </li>
              )
          )}
          <span className="pagination-space">...</span>
          <li
            className="pagination-number"
            key={pageNumbers.length}
            id={pageNumbers.length}
            onClick={() => paginationOnClick(pageNumbers.length)}
          >
            {pageNumbers.length}
          </li>
        </>
      ) : currentPage < pageNumbers.length - 7 ? (
        <>
          <li
            className="pagination-number"
            key={1}
            id={1}
            onClick={() => paginationOnClick(1)}
          >
            {1}
          </li>
          <span className="pagination-space">...</span>
          {Array.from({ length: 9 }, (v, i) => currentPage - 4 + i).map(
            (number) => (
              <li
                className={
                  number !== currentPage
                    ? "pagination-number"
                    : "pagination-number pagination-current"
                }
                key={number}
                id={number}
                onClick={() => paginationOnClick(number)}
              >
                {number}
              </li>
            )
          )}
          <span className="pagination-space">...</span>
          <li
            className="pagination-number"
            key={pageNumbers.length}
            id={pageNumbers.length}
            onClick={() => paginationOnClick(pageNumbers.length)}
          >
            {pageNumbers.length}
          </li>
        </>
      ) : (
        <>
          <li
            className="pagination-number"
            key={1}
            id={1}
            onClick={() => paginationOnClick(1)}
          >
            {1}
          </li>
          <span className="pagination-space">...</span>
          {Array.from({ length: 9 }, (v, i) => pageNumbers.length - 8 + i).map(
            (number) => (
              <li
                className={
                  number !== currentPage
                    ? "pagination-number"
                    : "pagination-number pagination-current"
                }
                key={number}
                id={number}
                onClick={() => paginationOnClick(number)}
              >
                {number}
              </li>
            )
          )}
        </>
      )}
    </ul>
  );
};

export default Pagination;
