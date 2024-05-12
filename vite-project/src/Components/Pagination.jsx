import React from "react";
import "./Pagination.css";
export default function Pagination(props) {
  let pages = [];
  for (let i = 1; i <= props.noOfPages; i++) {
    pages.push(i);
  }

  return (
    <>
      <div className="pagination">
        <h3 className="">Continue exploring apartments</h3>
        <div className="pagination-navigation">
          <button className="nav-prev" onClick={props.prevHandler}>
            <img src="Assets/icons/backward_arrow.svg" alt="" />
            Previous
          </button>
          <div className="nav-btn">
            {pages.map((nav) => (
              <button
                className={`page-nav ${
                  nav === props.currentPage ? "active" : ""
                }`}
                onClick={(e) => {
                  props.clickHandler(e);
                }}
                value={nav}
              >
                {nav}
              </button>
            ))}
          </div>
          <button className="nav-prev" onClick={props.nextHandler}>
            Next
            <img src="Assets/icons/forward_arrow.svg" alt="" />
            
          </button>
        </div>
      </div>
    </>
  );
}
