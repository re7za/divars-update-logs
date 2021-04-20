import "./style.css";
import React from "react";

const Pagination = (props) => {
  const { currentPage, dataLength, itemPerPage, paginationOnClick } = props;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(dataLength / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {dataLength ? (
        <ul className="pagination-numbers">
          {currentPage < 5 ? (
            <>
              {pageNumbers.map(
                (number) =>
                  number < 6 &&
                  number > 0 && (
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
          ) : currentPage < pageNumbers.length - 3 ? (
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
              {Array.from({ length: 5 }, (v, i) => currentPage - 2 + i).map(
                (number) =>
                  number > 0 && (
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
              {Array.from(
                { length: 5 },
                (v, i) => pageNumbers.length - 4 + i
              ).map(
                (number) =>
                  number > 0 && (
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
      ) : (
        <div>موردی یافت نشد!</div>
      )}
    </>
  );
};

export default Pagination;
