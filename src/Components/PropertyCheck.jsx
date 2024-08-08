import "../Styles/PropertyCheck.css"

export default function PropertyCheck(){
    return (
      <>
        <div className=" p-[25px] border-[1px] border-solid border-[#dddddd] rounded-[12px] max-w-[372px]">
          <h1 className=" text-[22px] font-[600] mb-[24px]">
            $68
            <span className=" text-[16px] font-[400] mx-[6px]">night</span>
          </h1>
          <div className="check-in-out   border-[1px] border-solid  border-[#B0B0B0] rounded-[6px]">
            <div className="check-in flex items-center border-r-[1px] px-[8px] border-solid border-[#B0B0B0]">
              <label htmlFor="check-in "></label>
              <input type="date" name="check-in" className=" text-[15px]" />
            </div>
            <div className="check-out flex justify-center pr-[8px] items-center">
              <label htmlFor="check-in"></label>
              <input type="date" name="check-in" className=" text-[15px]" />
            </div>
            <div className="guest-no border-t-[1px] p-[8px] border-solid border-[#B0B0B0]">
              <label htmlFor="" className="block text-[12px]">
                Guests
              </label>
              <select name="" id="" className=" w-[100%]">
                <option value="">1 guest</option>
                <option value="">2 guests</option>
                <option value="">3 guests</option>
                <option value="">more...</option>
              </select>
            </div>
          </div>
          <button className="reserve-btn w-[320px] h-[48px] rounded-[8px] text-[#ffffff] text-[16px] my-[15px]">
            Reserve
          </button>
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