import "../Styles/ConfirmPay.css";
import Footer from "../Components/Footer.jsx";
import Main from "../Components/Main.jsx";
import HeaderMain from "../Components/HeaderMain.jsx";
import { useState } from "react";

export default function ConfirmPay() {
  const [paymentMethod, setPayment] = useState("");

  function paymentHandler(e) {
    setPayment(e.target.value);
  }
  console.log(paymentMethod);

  return (
    <>
      <HeaderMain search={false} />

      <div className="flex flex-wrap justify-center w-[100vw]">
        <div className="max-w-[560px] w-[100%] my-[20px]">
          <div className="flex align-center w-[100%]">
            <span className="flex align-center mr-[15px]">
              {" "}
              <img className="" src="Assets/icons/back-to.svg" alt="" />
            </span>
            <h1 className="font-[600] text-[32px]">Confirm and Pay</h1>
          </div>
          <div className="reservation">
            <h1 className=" font-[600] text-[22px] mb-[24px]">
              Your Reservation
            </h1>
            <div className="reserve-date mb-[15px]">
              <span className=" flex  justify-between ">
                <h3 className=" font-[600] text-[16px] ">Dates</h3>
                <h3 className=" font-[600] text-[16px] underline">Edit</h3>
              </span>
              <p>Mar 1 - 6</p>
            </div>
            <div className="reserve-date">
              <span className=" flex  justify-between ">
                <h3 className=" font-[600] text-[16px] ">Guests</h3>
                <h3 className=" font-[600] text-[16px] underline">Edit</h3>
              </span>
              <p>Mar 1 - 6</p>
            </div>
          </div>
          <div className=" w-[100%] h-[1px] bg-[#E9E9E9] my-[32px]"></div>

          <div className="method-payment">
            <h1 className="font-[600] text-[22px] mb-[24px]">
              Choose how to pay
            </h1>
            <div className=" border-solid border-[1px] border-[#DDDDDD] p-[16px] rounded-t-[8px]">
              <span className=" flex  justify-between max-w-[560px]">
                <h3 className=" font-[600] text-[16px] ">
                  Pay with debit card
                </h3>
                <input
                  type="radio"
                  name="paymentMethod"
                  className=" w-[22px] "
                  value="debitCard"
                  onChange={paymentHandler}
                />
              </span>
              <p className=" font-[400] text-[16px]">
                Pay the total ($568.01).
              </p>
            </div>
            <div className="border-solid border-[1px] border-[#DDDDDD] p-[16px] ">
              <span className=" flex  justify-between max-w-[560px]">
                <h3 className=" font-[600] text-[16px] ">Pay via USSD code</h3>
                <input
                  type="radio"
                  name="paymentMethod"
                  className=" w-[22px] "
                  value="ussdCode"
                  onChange={paymentHandler}
                />
              </span>
              <p className=" font-[400] text-[16px]">
                Make your payments using your bank's ussd code
              </p>
            </div>
            <div className="border-solid border-[1px] border-[#DDDDDD] p-[16px] rounded-b-[8px]">
              <span className=" flex  justify-between max-w-[560px]">
                <h3 className=" font-[600] text-[16px] ">
                  Pay with Mandates credit
                </h3>
                <input
                  type="radio"
                  name="paymentMethod"
                  className=" w-[22px] "
                  value="mandatesCredit"
                  onChange={paymentHandler}
                />
              </span>
              <p className=" font-[400] text-[16px]">
                Pay using your Mandates credit in your wallet
              </p>
            </div>
          </div>

          <div className=" w-[100%] h-[1px] bg-[#E9E9E9] my-[32px]"></div>

          <div className=" mb-[18px]">
            <div className=" flex justify-between">
              <h1 className="font-[600] text-[20px]">Log in to book</h1>
              <h1 className="font-[600] text-[16px]">
                Don't have an account?{" "}
                <span className="font-[600] text-[20px] text-[#0066FF] ml-[10px]">
                  Sign Up
                </span>
              </h1>
            </div>
          </div>
          <div className="mb-[32px]">
            <form action="">
              <input
                className=" w-[100%] border-solid border-[1px] h-[57px] border-[#DDDDDD] p-[10px] rounded-t-[8px]"
                type="text"
                placeholder="Email address"
              />
              <input
                className=" w-[100%] h-[57px] border-solid border-[1px] border-[#DDDDDD] p-[10px] rounded-b-[8px]"
                type="text"
                placeholder="Password"
              />
            </form>
          </div>
          <button className="w-[100%] rounded-[8px] h-[57px] mb-[12px] bg-gradient-to-r from-[#0066FF] via-[#007BE5] to-[#0E3FF2] text-[#ffffff]">
            Continue
          </button>
          <div className=" w-[100%] relative h-[1px] bg-[#dddddd] my-[23px]">
            <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[50px] text-center text-[12px]">
              or
            </p>
          </div>
          <div className="flex gap-[10px]">
            <div className="flex flex-1 justify-center align-center border-solid border-[1px] border-[#000] rounded-[8px] h-[50px]">
              <img
                className=" w-[20px]"
                src="Assets/icons/colored-facebook-icon.svg"
                alt=""
              />
            </div>
            <div className="flex flex-1 justify-center align-center border-solid border-[1px] border-[#000] rounded-[8px] h-[50px]">
              <img
                className=" w-[20px]"
                src="Assets/icons/google-icon.svg"
                alt=""
              />
            </div>
            <div className="flex flex-1 justify-center align-center border-solid border-[1px] border-[#000] rounded-[8px] h-[50px]">
              <img
                className=" w-[20px]"
                src="Assets/icons/apple-icon.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="max-w-[460px] mx-[50px] w-full">
          <div className=" w-full mb-[20px] border-solid border-[1px] border-[#E9E9E9] rounded-[8px] p-[25px] pt-[30px]">
            <div className="flex">
              <div className="h-[105px] w-[105px] rounded-[8px] overflow-hidden mr-[15px]">
                <img
                  className="min-w-[100%] min-h-[100%] w-[auto] h-[auto] "
                  src="Assets/images/viewImages/outside.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className=" font-[600] text-20px]">
                  2 Bedroom Apartment <br /> Lekki 1 Right
                </h1>
                <p>Apartment</p>
                <p className=" flex font-[600] text-[14px]">
                  <img
                    className="mr-[4px]"
                    src="Assets/icons/star.svg"
                    alt=""
                  />{" "}
                  4.84{" "}
                  <span className=" font-[400] ml-[4px]">(95 reviews)</span>
                </p>
              </div>
            </div>
            <div className=" w-[100%] h-[1px] bg-[#dddddd] my-[24px] "></div>

            <div className=" ">
              <h1 className=" font-[600] text-[20px] mb-[20px]">
                Price details
              </h1>
              <div className=" w-[100%]">
                <span className=" flex justify-between ">
                  <p>$106.15 x 5 nights</p>
                  <p>$530.75</p>
                </span>
                <span className=" flex justify-between my-[15px]">
                  <p className=" underline">Cleaning fee</p>
                  <p>$530.75</p>
                </span>
                <span className=" flex justify-between ">
                  <p className=" underline">Taxes</p>
                  <p>$530.75</p>
                </span>
                <div className=" w-[100%] h-[1px] bg-[#dddddd] my-[24px] "></div>
                <span className=" flex justify-between font-[600]">
                  <p className=" ">
                    Total <span className=" underline">(usd)</span>
                  </p>
                  <p>$530.75</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
