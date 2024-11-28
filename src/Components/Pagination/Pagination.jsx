import React from "react";
import "./Pagination.css";

const Pagination = ({
  totalItems,
  itemsPerPage,
  setCurrentPage,
  currentPage,
  totalPages,
}) => {
  const getVisiblePageNumbers = () => {
    const visiblePages = 5;
    const pages = [];

    let startingPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));

    let endingPage = Math.min(totalPages, startingPage + visiblePages - 1);

    if (endingPage - startingPage < visiblePages - 1) {
      startingPage = Math.max(1, endingPage - visiblePages + 1);
    }

    for (let i = startingPage; i <= endingPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const visiblePageNumbers = getVisiblePageNumbers();

  return (
    <div className="pagination">
      <span
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        className={`pre-next-btn ${currentPage === 1 ? "disabled" : ""}`}
      >
        Prev
      </span>
      {visiblePageNumbers.map((page, index) => {
        return (
          <button
            className={page == currentPage ? "active" : ""}
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
      <span
        onClick={() =>
          currentPage < Math.ceil(totalItems / itemsPerPage) &&
          setCurrentPage(currentPage + 1)
        }
        className={`pre-next-btn ${
          currentPage === Math.ceil(totalItems / itemsPerPage) ? "disabled" : ""
        }`}
      >
        Next
      </span>
    </div>
  );
};

export default Pagination;
