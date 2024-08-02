import "../Styles/PropertyAmenities.css";
export default function PropertyAmenities(){
    return (
      <>
        <div className="   max-w-[700px] ">
          <h1>Amenities</h1>
          <ul className="amenities-list px-[30px] flex flex-wrap">
            <li>Kitchen</li>
            <li>Free driveway parking on premises – 2 spaces</li>
            <li>Free washer – In unit</li>
            <li>Private patio or balcony</li>
            <li>Hair dryer</li>
            <li>Wifi</li>
            <li>42" HDTV</li>
            <li>Central air conditioning</li>
            <li>Pack ’n play/Travel crib -available upon request</li>
            <li>Carbon monoxide alarm</li>
          </ul>
          <button className=" bg-[white] text-[black] border-[1px] rounded-[8px] border-solid px-[23.8px] py-[13.5px] text-[20px] font-[600] mb-[100px]">Show all amenitites</button>
        </div>
      </>
    );
}
