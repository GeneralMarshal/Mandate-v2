import "../Styles/PropertyCheck.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PropertyCheck( props){



    return (
      <>
        <div className=" p-[25px] border-[1px] border-solid border-[#dddddd] rounded-[12px] max-w-[372px]">
          <h1 className=" text-[22px] font-[600] mb-[24px]">
            $68
            <span className=" text-[16px] font-[400] mx-[6px]">night</span>
          </h1>
          <form action="">
            <div className="flex">
              {props.errors.checkIn && (
                <p className="flex-1 text-[red] font-[500]">
                  {props.errors.checkIn}
                </p>
              )}
              {props.errors.checkOut && (
                <p className="flex-1 text-[red] font-[500]">
                  {props.errors.checkOut}
                </p>
              )}
            </div>

            <div className="check-in-out   border-[1px] border-solid  border-[#B0B0B0] rounded-[6px]">
              <div className="check-in flex flex-col items-left border-r-[1px] px-[8px] py-[5px] border-solid border-[#B0B0B0]">
                <label htmlFor="check-in ">CHECK-IN</label>
                <input
                  type="date"
                  name="check-in"
                  className=" text-[15px] font-[600]  "
                  value={props.checkIn}
                  onChange={(e) => {
                    props.setCheckIn(e.currentTarget.value);
                  }}
                />
              </div>
              <div className=" check-out flex flex-col items-left border-r-[1px] px-[8px] py-[5px] border-solid border-[#B0B0B0]">
                <label htmlFor="check-out">CHECK-OUT</label>
                <input
                  type="date"
                  name="check-in"
                  className=" text-[15px]"
                  value={props.checkOut}
                  min={props.checkIn ? props.checkIn : ""}
                  onChange={(e) => {
                    props.setCheckOut(e.currentTarget.value);
                  }}
                />
              </div>
              <div className="guest-no border-t-[1px] p-[8px] border-solid border-[#B0B0B0]">
                <label htmlFor="" className="block text-[12px]">
                  Guests
                </label>
                {/* <select
                  name=""
                  id=""
                  className=" w-[100%]"
                  onChange={(e) => {
                    props.setGuests(e.target.value);
                  }}
                >
                  <option value="">select guests</option>
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="custom">custom</option>
                </select>
              </div> */}
                <input
                  type="number"
                  className=" w-[100%] border-solid border-[#B0B0B0] border-[1px] pl-[5px]"
                  value={props.guests}
                  onChange={(e) => {
                    props.setGuests(e.target.value);
                  }}
                  placeholder="1"
                ></input>
              </div>
            </div>
            {props.errors.guests && (
              <p className="flex-1 text-[red] font-[500]">
                {props.errors.guests}
              </p>
            )}

            <button
              className="reserve-btn w-[320px] h-[48px] rounded-[8px] text-[#ffffff] text-[16px] my-[15px]"
              onClick={(e) => props.handleCheck(e)}
              
            >
              Reserve
            </button>
          </form>
          <p className=" flex w-[100%] justify-center text-[14px] font-[400] mb-[24px]">
            You won't be charged yet
          </p>
          <div>
            <p className=" flex justify-between underline leading-[20px]">
              $68 x 5 nights<span>$339</span>
            </p>
            <p className=" flex justify-between underline leading-[20px]">
              Caution fee (Refundable to you on check out day )<span>$339</span>
            </p>
            <p className=" flex justify-between underline leading-[20px]">
              Mandates service fee<span>$339</span>
            </p>
          </div>
          <div className=" h-[1px] w-[100%] bg-[#dddddd] my-[24px]"></div>
          <p className=" flex justify-between font-[600] text-[600]">
            Total before Taxes<span>$430</span>
          </p>
          <p className=" flex w-[100%] justify-center text-center pt-[50px] font-[600] text-[#CC0000] ">
            To protect your payment, never transfer money or communicate outside
            of the Mandates.one website or app.
          </p>
        </div>
      </>
    );
}