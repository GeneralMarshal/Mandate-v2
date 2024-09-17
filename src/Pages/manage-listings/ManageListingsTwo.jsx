import "../../Styles/ManageListings.css";
import HeaderMain from "../../Components/HeaderMain";
import Footer from "../../Components/Footer";

import { useState } from "react";

export default function ManageListingsTwo() {
  const [checkedFeatures, setCheckedFeatures] = useState([]);
  const [checkedSpecialFeatures, setSpecial] = useState([]);
  const [ uploadPhotos, setUploadPhotos] = useState([])
  const [coverPhoto, setCoverPhoto] = useState();
  const [isCover, setIsCover] = useState(0)
  const [errors, setErrors] = useState({})
  const [draft, setDraft] = useState()
  
  var propertyFeatures = [
    "Wifi",
    "Gym",
    "Pool",
    "Washer",
    "Tv",
    "Pool table",
    "Security cameras",
    "Balcony",
    "Garage",
    "Free parking",
    "Bar",
    "Kitchen",
    "Dedicated workspace",
    "Hair dryer",
  ];

  var specialFeatures = [
    {
      name: "Party houses",
      icon: "/Assets/specialFeaturesIcons/Party houses.svg",
    },
    {
      name: "Chef's kitchen",
      icon: "/Assets/specialFeaturesIcons/Chef's kitchen.svg",
    },
    {
      name: "Amazing pools",
      icon: "/Assets/specialFeaturesIcons/Amazing pools.svg",
    },
    {
      name: "Beach access",
      icon: "/Assets/specialFeaturesIcons/Beach area.svg",
    },
    {
      name: "Barbeque",
      icon: "/Assets/specialFeaturesIcons/BBQ grill.svg",
    },
    {
      name: "Outdoor dining",
      icon: "/Assets/specialFeaturesIcons/Outdoor dining.svg",
    },
    {
      name: "Gym",
      icon: "/Assets/specialFeaturesIcons/Gym.svg",
    },
    {
      name: "Hot tub",
      icon: "/Assets/specialFeaturesIcons/Hot tub.svg",
    },
    {
      name: "Ceative spaces",
      icon: "/Assets/specialFeaturesIcons/Creative spaces.svg",
    },
  ];

  function handleCheck(e) {
    var { value, checked } = e.currentTarget;
    if (checked) {
      setCheckedFeatures([...checkedFeatures, value]);
    } else if (!checked) {
      const index = checkedFeatures.indexOf(value);
      const updatedFeatures = [...checkedFeatures];
      updatedFeatures.splice(index, 1);
      setCheckedFeatures(updatedFeatures);
    }
  }
  function handleCheckSpecial(e) {
    var { value, checked } = e.currentTarget;
    if (checked) {
      setSpecial([...checkedSpecialFeatures, value]);
    } else if (!checked) {
      const index = checkedSpecialFeatures.indexOf(value);
      const newCheckSpecial = [...checkedSpecialFeatures];
      newCheckSpecial.splice(index, 1);
      setSpecial(newCheckSpecial);
    }
  }
  
  function fileUploader(e){
    const files = Array.from(e.target.files)
    if (files.length + (uploadPhotos.length ? uploadPhotos.length : 0) > 6){
      alert("You can only upload 6 photos")
      return;
    }
    const prevPhotos = [...uploadPhotos];
    const newPhotos =  [...prevPhotos, ...files]
    setUploadPhotos(newPhotos)
    newPhotos && newPhotos[0] ? setCoverPhoto(URL.createObjectURL(newPhotos[0])) : console.log("funciton not running")
    
    
  }

  function removeBtn(index){

    const newPhotos = [...uploadPhotos]
    newPhotos.splice(index, 1)
    setUploadPhotos(newPhotos)

  }
  
  function coverHandler(photos, index){
    setCoverPhoto(URL.createObjectURL(photos));
    setIsCover(index);
  }
  function draftHandler(){
    var error = {}


    function errorHandler(){
      if (!uploadPhotos.length) {
        error.photos = "please add your photos";
      }
    }
    errorHandler()
    setErrors(error)
    
    var draft = {
      "Features": checkedFeatures,
      "SpecialFeatures": checkedSpecialFeatures,
      "Photos": uploadPhotos,
      "Cover Photo":coverPhoto,
    }

    if(!Object.keys(error).length){
      var listingsOne = JSON.parse(localStorage.getItem("mandateOneV2_draft"));
      var listingsTwo = {...listingsOne, ...draft}
      console.log(listingsTwo)
    }else(
      alert("please fill all the reuired fields")
    )
    
    

    
  }

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
        <section className=" w-[100%] mb-[70px]">
          <div className=" mb-[100px]">
            <h1 className=" text-[24px] font-[600] mb-[50px]">
              What does your property offer?
            </h1>
            <div
              className=" flex max-w-[856px] w-full  flex-wrap pl-[100px]"
            >
              {propertyFeatures.map((feature, index) => {
                return (
                  <div
                    className="flex w-[300px] my-[15px] gap-[20px] text-[16px] font-[400]"
                    key={index}
                  >
                    <input
                      type="checkbox"
                      className=" w-[19px]"
                      value={feature}
                      onClick={(e) => handleCheck(e)}
                    />
                    <label htmlFor="">{feature}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className=" text-[24px] font-[600] mb-[50px]">
              What makes your place special?
            </h1>
            <div className="flex max-w-[] w-full  flex-wrap pl-[100px]">
              {specialFeatures.map((features, index) => {
                return (
                  <div
                    className="flex items-center w-[300px] my-[15px] gap-[20px] text-[16px] font-[400]"
                    key={index}
                  >
                    <input
                      type="checkbox"
                      className=" w-[19px] h-[19px]"
                      value={features.name}
                      onClick={(e) => handleCheckSpecial(e)}
                    />
                    <label
                      htmlFor=""
                      className=" flex items-center gap-[6px] font-[600] text-[20px]"
                    >
                      <img
                        src={features.icon}
                        alt=""
                        className=" text-]24px] font-[600]"
                      />
                      {features.name}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className=" w-[100%] mb-[100px]">
          <h1 className=" text-[24px] font-[600]"> Add photos</h1>
          <div className=" w-[100%] h-[400px] mb-[7px] rounded-[15px] bg-[#E9E9E9] relative overflow-hidden object-center">
            <img
              className=" min-w-[100%] min-h-[100%] w-full h-full object-cover object-center absolute"
              src={coverPhoto}
              alt=""
            />
            <input
              className=" absolute z-10 w-[100%] h-[100%] opacity-0"
              type="file"
              multiple
              onChange={(e) => fileUploader(e)}
            />
            <label
              htmlFor=""
              className=" absolute font-[600] text-[20px] text-[grey] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
            >
              Click or drag to add photos
            </label>
          </div>
          {errors.photos ? <p className="listings-error">{errors.photos}</p> : ""}
          <div className=" flex justify-between">
            <p className=" font-[600] text-[20px] ">
              {uploadPhotos.length} of 6 Added
            </p>
            <p className=" inline-block italic rounded-[5px] px-[10px] text-[#0066FF] text-[20px] font-[400] bg-[#E6F0FF] ">
              Maximum photo size is 8MB. Formats; jpeg, jpg, png
            </p>
          </div>

          <div className=" mt-[20px] flex gap-[20px] flex-wrap">
            {uploadPhotos.map((photos, index) => {
              return (
                <div
                  className=" flex flex-col items-center gap-[5px]"
                  key={index}
                  onClick={() => coverHandler(photos, index)}
                >
                  <div className=" relative upload-photos w-[105px] h-[80px] rounded-[15px] overflow-hidden object-center">
                    <img
                      className=" min-w-[100%] w-full min-h-[100%] h-[full] "
                      src={URL.createObjectURL(photos)}
                      alt=""
                      onLoad={() => URL.revokeObjectURL(photos)}
                    />
                    {index === isCover ? (
                      <p className="overlay font-[600] text-[20px]">Cover</p>
                    ) : (
                      ""
                    )}
                  </div>
                  <button
                    className=" w-[100px] h-[30px] border-solid border-[1px] border-[black] bg-[#E9E9E9] rounded-[5px]"
                    onClick={() => removeBtn(index)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
          <div>
            <p className=" inline-block italic rounded-[5px] px-[10px] text-[red] text-[20px] font-[400] bg-[#FFE6E6] my-[20px]">
              Select your cover photo
            </p>
          </div>
        </section>
        <section>
          <div>
            <h1 className=" text-[24px] font-[600] mb-[50px]">
              Add virtual tour link
            </h1>
            <input
              className=" border-solid border-[1px] border-[#BABABA] w-[100%] rounded-[12px] pl-[45px] py-[15px] text-["
              type="text"
              name=""
              id=""
              placeholder="Tour link"
            />
          </div>

          <div className=" mt-[100px] mb-[500px] ">
            <div className=" h-[6px] w-[100%] border-[1px] border-solid border-[black] rounded-[10px] mb-[90px]">
              <div className=" h-[100%] w-[67%] bg-[black] "></div>
            </div>
            <div className=" flex gap-[15px] justify-between">
              <button className=" h-[48px] w-[144px] border-solid border-[1px] border-[black] bg-[black] text-[#ffffff] rounded-[8px] font-[600] text-[16px]">
                Back
              </button>
              <div className=" flex gap-[10px]">
                <button className=" h-[48px] w-[144px] border-solid border-[1px] border-[black] rounded-[8px] font-[600] text-[16px] " onClick={()=>draftHandler()}>
                  Save and exit
                </button>
                <button className=" h-[48px] w-[144px] border-solid border-[1px] border-[black] bg-[black] text-[#ffffff] rounded-[8px] font-[600] text-[16px]">
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
