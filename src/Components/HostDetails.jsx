export default function HostDetails() {
  return (
    <>
      <div className=" w-[100%] h-[1px] bg-[#dddddd] mt-[100px] mb-[50px] "></div>
      <div className="">
        <div className="host-profile flex">
          <div className=" w-[64px] h-[64px] bg-[#dddddd] rounded-[50%] mr-[16px]"></div>
          <div>
            <p className=" font-[600] text-[22px] ">Hosted by Marshal</p>
            <p className=" font-[400] text-[14px] leading-[18px] text-[#717171]">
              Joined in October 2018
            </p>
          </div>
        </div>
        <div className=" flex flex-wrap justify-between  ">
          <div className="  ">
            <div className="host-achievements flex max-w-[400px] justify-between mb-[37px]">
              <span className=" flex">
                <img
                  className=" mr-[12px] w-[16px]"
                  src="Assets/icons/star.svg"
                  alt=""
                />
                <p>132 Reviews</p>
              </span>
              <span className=" flex">
                <img
                  className=" mr-[12px] w-[16px]"
                  src="Assets/icons/verified-badge.svg"
                  alt=""
                />
                <p>Identity Verified</p>
              </span>
            </div>
            <div>
              <p className=" font-[600] text-[16px]">During your stay</p>
              <ul className="text-[16px]">
                <li>we live close by and are reachable by phone.</li>
              </ul>
            </div>
          </div>
          <div className="min-w-[40%]">
            <p>Registration number: D00206</p>
            <p>Response rate: 100%</p>
            <p>Response time: within a few hours</p>
          </div>
        </div>
      </div>
      <div className=" w-[100%] h-[1px] bg-[#dddddd] mt-[100px] mb-[50px] "></div>
      <div>
        <h1 className=" font-[600] text-[22px]">Things to know</h1>
        <div className=" flex justify-between flex-wrap">
          <div className="house-rules leading-[36px] mb-[20px] mr-[20px]">
            <div>
              <p className=" font-[600] text-[16px]">House Rules</p>
              <ul>
                <li>Check-in: 4:00 PM - 8:00 PM</li>
                <li>Checkout before 10:00 AM</li>
                <li>4 guests maximum</li>
              </ul>
              <p className=" underline"> Show more</p>
            </div>
          </div>
          <div className="house-rules leading-[36px] mb-[20px] mr-[20px]">
            <div>
              <p className=" font-[600] text-[16px] mb-[20px] mr-[20px]">
                Safety & Property
              </p>
              <ul>
                <li>Check-in: 4:00 PM - 8:00 PM</li>
                <li>Checkout before 10:00 AM</li>
                <li>4 guests maximum</li>
              </ul>
              <p className=" underline"> Show more</p>
            </div>
          </div>
          <div className="house-rules leading-[36px] mb-[20px] mr-[20px]">
            <div>
              <p className=" font-[600] text-[16px]">Cancellation Property</p>
              <ul>
                <li>Check-in: 4:00 PM - 8:00 PM</li>
                <li>Checkout before 10:00 AM</li>
                <li>4 guests maximum</li>
              </ul>
              <p className=" underline"> Show more</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
