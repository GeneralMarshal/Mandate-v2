import "./Filter.css";

export default function Filter() {
  return (
    <>
      <div className="filter-container">
        <div>
          <img src="Assets/filters/Verified.svg" className="filter-icon" />
          <p>Trending</p>
          
        </div>
        <div>
          <img src="Assets/filters/Group.svg" className="filter-icon" />
          <p>Top Offers</p>
        </div>
        <div>
          <img src="Assets/filters/amazing-pools.svg" className="filter-icon" />
          <p>Appartments</p>
        </div>
        <div>
          <img src="Assets/filters/condos.svg" className="filter-icon" />
          <p>Condos</p>
        </div>
        <div>
          <img src="Assets/filters/party-houses.svg" className="filter-icon" />
          <p>Party Houses</p>
        </div>
        <div>
          <img src="Assets/filters/chefs-kitchen.svg" className="filter-icon" />
          <p>Chef's kitchens</p>
        </div>
        <div>
          <img src="Assets/filters/beach-front.svg" className="filter-icon" />
          <p>Beach Front</p>
        </div>
        <div>
          <img src="Assets/filters/amazing-pools.svg" className="filter-icon" />
          <p>Amazing Pools</p>
        </div>
        <div>
          <img
            src="Assets/filters/creative-spaces.svg"
            className="filter-icon"
          />
          <p>Creative Spaces</p>
        </div>
        <div className="more-filters">
          <img src="/Assets/filters/filter-frame.svg " alt="" />
          <p>More filters</p>
        </div>
      </div>
    </>
  );
}
