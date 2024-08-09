export default function HostProfile() {
  return (
    <>
      <div className="host-profile flex py-[27px]">
        <div className=" w-[64px] h-[64px] bg-[#dddddd] rounded-[50%] mr-[16px]"></div>
        <div>
          <p className=" font-[600] text-[22px] ">Hosted by Marshal</p>
          <p className=" font-[400] text-[14px] leading-[18px] text-[#717171]">
            Joined in October 2018
          </p>
        </div>
      </div>
      <div className=" ">
        <div className="  ">
          <div className="host-achievements flex mb-[37px]">
            <span className=" flex mr-[25px]">
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
        </div>
        <div>
          <p>Response time: within a few hours</p>
          <p>Response rate: 100%</p>
        </div>

      </div>
    </>
  );
}
