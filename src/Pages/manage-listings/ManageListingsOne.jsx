import '../../Styles/ManageListingsOne.css'
import HeaderMain from "../../Components/HeaderMain"

export default function ManageListingsOne(){
    return (
      <>
        <HeaderMain />
        <nav className=" my-[36px]">
          <div className=" flex gap-[10px] md:gap-[36px] justify-center ">
            <p className=" p-[10px]">Listings</p>
            <p className=" p-[10px]">Bookings</p>
            <p className=" p-[10px]">Calender</p>
            <p className=" p-[10px]">Inbox</p>
            <p className=" p-[10px]">Revenue</p>
          </div>
        </nav>
        <main className=" max-w-[1124px] mx-[auto]">
          <div className=" flex gap-[15px] md:gap-[50px]">
            <img src="./Assets/icons/back-to.svg" alt="" />
            <h1 className=" font-[600] text-[32px]">Add a listing</h1>
          </div>
          {/* specific styles for each filters are located in the style sheet */}
          <section className=" place-desc my-[75px]">
            <h1 className=" font-[600] text-[24px] mb-[50px]">
              {" "}
              What best describes your place?
            </h1>
            <div className=" desc-opt flex justify-between">
              <div>
                <img src="Assets/filters/Verified.svg" className="" />
                <p>Trending</p>
              </div>
              <div>
                <img src="Assets/filters/Group.svg" className="" />
                <p>Top Offers</p>
              </div>
              <div>
                <img src="Assets/filters/amazing-pools.svg" className="" />
                <p>Appartments</p>
              </div>
              <div>
                <img src="Assets/filters/condos.svg" className="" />
                <p>Condos</p>
              </div>
              <div>
                <img src="Assets/filters/party-houses.svg" className="" />
                <p>Party Houses</p>
              </div>
              <div>
                <img src="Assets/filters/chefs-kitchen.svg" className="" />
                <p>Chef's kitchens</p>
              </div>
              <div>
                <img src="Assets/filters/beach-front.svg" className="" />
                <p>Beach Front</p>
              </div>
            </div>
          </section>
          <section className=" desc-place w-[100%]">
            <h1 className=" text-[24px] font-[600] mb-[50px]">
              Where is it located?
            </h1>
            <div className=" w-full">
              <div className=" flex w-full gap-[15px] md:gap-[10%]">
                <div className=" flex-1 ">
                  <label htmlFor="country">Country/Region</label>
                  <input type="text" placeholder="Nigeria" />
                </div>
                <div className=" flex-1">
                  <label htmlFor="state">Country/Region</label>
                  <input type="text" placeholder="Lagos" />
                </div>
              </div>
              <div className=" flex w-full gap-[15px] md:gap-[10%]">
                <div className=" flex-1 ">
                  <label htmlFor="city">city</label>
                  <input type="text" placeholder="city" />
                </div>
                <div className=" flex-1">
                  <label htmlFor="code">Postal code</label>
                  <input type="text" placeholder="Nigeria" />
                </div>
              </div>
              <div>
                <label htmlFor="address">Street address</label>
                <input type="text" placeholder="" />
              </div>
              <div className=' flex'>
                <p className="address-note bg-[#FFE6E6] mr-[auto] italic text-[#FF0000] text-[20px] font-[400] px-[10px]">
                  This address will not be visible to the guest until the
                  booking is comfirmed
                </p>
              </div>
            </div>
          </section>
          <section className=' little-more'>

          </section>
        </main>
      </>
    );
}