import "../../Styles/ManageListings.css";
import HeaderMain from "../../Components/HeaderMain";
import Footer from "../../Components/Footer";
import Counter from "../../Components/Counter"

import { useState } from "react";

export default function ManageListingsThree() {

  const [dayCounter, setDay] = useState()
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
      <main className=" max-w-[1124px] mx-[auto] px-[20px]">
        <div className=" flex gap-[15px] md:gap-[50px]">
          <img src="./Assets/icons/back-to.svg" alt="" />
          <h1 className=" font-[600] text-[32px]">Add a listing</h1>
        </div>
        <section className=" place-desc my-[75px]">
          <h1 className=" text-[24px] font-[600] mb-[50px]">
            How much is your property?
          </h1>
          <div className="price-listing w-full">
            <div className=" flex w-full gap-[15px] md:gap-[10%]">
              <div className=" flex-1 list-input">
                <label htmlFor="country">Price per night in NGN</label>
                <input type="number" placeholder="N" />
              </div>
              <div className=" flex-1 list-input">
                <label htmlFor="state">Caution fee(if applicable)</label>
                <input type="number" placeholder="N" />
              </div>
            </div>
          </div>
          <div className="price-listing w-full">
            <div className=" flex w-full gap-[15px] md:gap-[10%]">
              <div className=" flex-1 list-input">
                <label htmlFor="country">
                  Promotion discount in percentage (optional)
                </label>
                <input type="number" placeholder="%" />
              </div>
              <div className=" flex-1 list-input">
                <label htmlFor="country">Minimum number of booking days</label>

                <Counter
                  count={1}
                  name={"Days"}
                  // addBtn={addBtn}
                  // subBtn={subBtn}
                />
              </div>
            </div>
            <p className=" inline-block italic rounded-[5px] px-[10px] text-[red] text-[20px] font-[400] bg-[#FFE6E6] my-[20px]">
              Note: Mandate charges 20% fee applied tothe price of your property
            </p>
          </div>
          <div className=" mt-[44px] mb-[240px]">
            <div className=" text-center ">
              <p className=" font-[600] text-[20px] mb-[16px]">
                Total amount that goes to your account
              </p>
              <input
                className=" h-[100px] rounded-[12px] border-solid border-[1px] border-[#BABABA] w-[100%] font-[600] text-[36px] text-center"
                type="number"
                placeholder="N0,000,000.00"
              />
              <p className=" inline-block italic rounded-[5px] px-[10px] text-[#0066FF] text-[20px] font-[400] bg-[#E6F0FF] my-[20px]">
                This is the amount that goes to the host after deduction of
                charges
              </p>
            </div>
          </div>
        </section>
        <div className=" mt-[100px] mb-[500px] ">
          <div className=" h-[6px] w-[100%] border-[1px] border-solid border-[black] rounded-[10px] mb-[90px]">
            <div className=" h-[100%] w-[100%] bg-[black] "></div>
          </div>
          <div className=" flex gap-[15px] justify-between">
            <button className=" h-[48px] w-[144px] border-solid border-[1px] border-[black] bg-[black] text-[#ffffff] rounded-[8px] font-[600] text-[16px]">
              Back
            </button>
            <div className=" flex gap-[10px]">
              <button
                className=" h-[48px] w-[144px] border-solid border-[1px] border-[black] rounded-[8px] font-[600] text-[16px] "
                onClick={() => draftHandler()}
              >
                Save and exit
              </button>
              <button className=" h-[48px] w-[144px]  bg-[#0066FF] text-[#ffffff] rounded-[8px] font-[600] text-[16px]">
                Finish
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
