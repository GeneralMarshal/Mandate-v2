export default function Counter(props) {
  return (
    <div className=" flex justify-between w-[300px] my-[25px]">
        <div className=" font-[600] text-[16px]">{props.name}</div>
      <div className=" flex gap-[10px]">
        <div
          className=" flex w-[20px] h-[20px] rounded-full text-[20px] bg-[#E9E9E9] relative leading-[16px] justify-center"
          onClick={props.subBtn}
        >
          -
        </div>
        <div className=" flex w-[20px] h-[20px] text-[20px]relative leading-[16px] justify-center">
          {props.count}
        </div>
        <div
          className=" flex w-[20px] h-[20px] rounded-full text-[20px] bg-[#E9E9E9] relative leading-[16px] justify-center"
          onClick={props.addBtn}
        >
          +
        </div>
      </div>
    </div>
  );
}
