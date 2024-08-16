import "../Styles/MultiSearchBar.css"

import { IoSearchCircle } from "react-icons/io5";
export default function MultiSearchBar(){


    return (
      <>
        <div className="multi-search ">
          <div className="location location-long ">
            <p clas>Where</p>
            <input type="text" placeholder="search destinations" />
          </div>

          {/* This div is for shorter screen width */}
          <div className=" location-short block md:hidden w-[100%] ml-[20px]" >
            <p className="">Where To</p>
            <input type="text" placeholder="Any where . Any week . Add guests " className=" w-[100%]" />
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
            <p className=" who-p">Who</p>
            <input className="who-i" type="text" placeholder="Add guests" />
            <span className="search-icon">
              <IoSearchCircle className="search" />
            </span>
          </div>
        </div>
      </>
    );
}

