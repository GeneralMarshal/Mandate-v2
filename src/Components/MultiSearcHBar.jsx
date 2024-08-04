import "../Styles/MultiSearchBar.css"

import { IoSearchCircle } from "react-icons/io5";
export default function MultiSearchBar(){


    return (
      <>
        <div className="multi-search">
          <div className="location">
            <p>Where</p>
            <input type="text" placeholder="search destinations" />
          </div>
          <span className="search-border"></span>
          <div className="in-check">
            <p>Check in</p>
            <input type="text" placeholder="Add Dates" />
          </div>
          <span className="search-border"></span>
          <div className="out-check">
            <p>Check out</p>
            <input type="text" placeholder="Add Dates" />
          </div>
          <span className="search-border"></span>
          <div className="who">
            <p>Who</p>
            <input type="text" placeholder="Add guests" />
            <span className="search-icon">
              <IoSearchCircle className="search" />
            </span>
          </div>
        </div>
      </>
    );
}

