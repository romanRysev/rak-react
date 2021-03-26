import "./Pagination.css";
import { useState } from "react";

function Pagination(props) {
  const paginationItemsNumber = Math.ceil(
    props.itemsLength / props.itemsPerPage
  );
  const paginationItems = [];

  const [currentPageId, setCurrentPageId] = useState(0);

  for (let i = 0; i < paginationItemsNumber; i++) {
    paginationItems.push(
      <button
        className={`pagination__item ${
          currentPageId === i ? "pagination__item_active" : ""
        }`}
        key={i}
        onClick={() => {
          props.onPaginationClick(i);
          setCurrentPageId(i);
        }}
      >
        {i + 1}
      </button>
    );
  }

  return <div className="pagination">{paginationItems}</div>;
}

export default Pagination;
