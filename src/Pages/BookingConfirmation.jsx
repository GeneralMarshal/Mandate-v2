import React from 'react'
import "../Styles/BookingConfirmation.css"
import HeaderMain from '../Components/HeaderMain'
import Footer from "../Components/Footer";
import HostProfile from '../Components/Hostprofile'

const BookingConfirmation = () => {
  return (
    <>
      <HeaderMain />
      <main className=" max-w-[1120px] mx-auto px-[10px]">
        <div className="">
          <div className=" flex mb-[50px]">
            <span className=" flex align-center h-[42px]">
              <img
                src="Assets/icons/back-to.svg"
                alt="go back"
                className=" w-[6px] mr-[22px]"
              />
            </span>
            <div>
              <p className=" flex font-[600] text-[22px] md:text-[32px]">
                Your booking has been recieved
              </p>
              <p className=" flex font-[400] md:font-[600] text-[16px] md:text-[20px]">
                A confirmation email will be sent to you when booking is
                confirmed. Confirmation takes between 0-12 hours
              </p>
            </div>
          </div>
        </div>
        <div className="h-[300px] md:h-[400px]  xl:h-[560px] overflow-hidden rounded-[12px]">
          <img
            src="Assets/images/viewImages/outside.png"
            alt=""
            className="w-full h-full  object-cover object-center"
          />
        </div>
        <p className="flex font-[400] md:font-[600] text-[16px] md:text-[22px] my-[27px]">
          We've sent you your booking details and your receipt
        </p>
        <div className="">
          <h1 className=" font-[600] text-[22px] md:text-[32px] mb-[24px]">
            Reservation Details
          </h1>
          <div className=" mb-[15px]">
            <h3 className=" font-[600] text-[16px] ">Dates</h3>
            <p>Mar 1 - 6</p>
          </div>
          <div className=" mb-[15px]">
            <h3 className=" font-[600] text-[16px] ">Guests</h3>
            <p>Mar 1 - 6</p>
          </div>
          <div className="\">
            <h3 className=" font-[600] text-[16px] ">Total cost</h3>
            <p className="font-[600] text-[16px]">$568.93</p>
          </div>
        </div>
        <div className=" h-[1px] w-[100%] bg-[#dddddd] my-[27px]"></div>
        <HostProfile />
        <div className=' my-[70px] mb-[200px] md:mb-[400px]'>
          <button className=" py-[14px] px-[24px] bg-[#222222] text-[#ffffff] rounded-[8px] font-[600] text-[16px] mr-[38px]">
            Go Back
          </button>
          <button className=" py-[14px] px-[24px] text-[#222222] bg-[#ffffff] rounded-[8px] border-solid border-[1px] border-[#222222] font-[600] text-[16px]">
            Contact Host
          </button>
        </div>
      </main>
      <Footer links={false}/>
    </>
  );
}

export default BookingConfirmation
