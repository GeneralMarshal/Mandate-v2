import "../Styles/PropertyReviews.css";
export default function PropertyReviews() {
  return (
    <div className="min-w-[40%] mt-[64px]">
      <div className=" max-w-[400px] ">
        <div className="flex">
          <div className=" rounded-[50%] h-[48px] w-[48px] bg-[#dddddd] mr-[10px]"></div>
          <div className=" flex flex-col">
            <span className=" font-[600] text-[16px]">Marshal</span>
            <span className=" font-[400] text-[14px]">Lagos, Nigeria</span>
          </div>
        </div>

        <div className=" flex flex-wrap">
          <img src="Assets/icons/fiveStars.svg" alt="" />
          <p className="mx-[10px] inline-flex align-middle leading-[13px] ">
            .
          </p>
          <p className=" font-[600] text-[16px]">September 2024</p>
          <p className="mx-[10px] inline-flex align-middle leading-[13px] ">
            .
          </p>
          <p className=" font-[400] text-[16px] text-[#939393]">
            stayed a few nights
          </p>
          <div className=" w-[100%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            corporis tempore consequuntur numquam sint, possimus, deleniti
            consectetur ipsum.
          </div>
        </div>
      </div>
    </div>
  );
}
