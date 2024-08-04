import "../Styles/PropertyFeatures.css";

export default function PropertyFeatures(props){
    return (
      <>
        <div className=" property-features flex flex-col justify-between h-[140px] w-[200px] border-[1px] p-[25px] border-[#dddddd] border-solid rounded-[12px] m-[10px]">
          <div className="features flex ">
            <img src={props.icon} alt="" />
          </div>
          <div>
            <h1>{props.area}</h1>
          </div>
          <div>
            <h3> {props.assets}</h3>
          </div>
        </div>
  
      </>
    );
}
