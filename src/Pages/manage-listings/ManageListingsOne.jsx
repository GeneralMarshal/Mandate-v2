import "../../Styles/ManageListings.css";
import HeaderMain from "../../Components/HeaderMain";
import Footer from "../../Components/Footer";
import Counter from "../../Components/Counter";
import { useState } from "react";
import { db } from "../../Components/Firebase"
import { collection, addDoc } from "firebase/firestore"; 


import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

export default function ManageListingsOne() {
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [code, setCode] = useState();
  const [address, setAddress] = useState();
  const [shortDesc, setShortDesc] = useState();
  const [longDesc, setLongDesc] = useState();

  const [guests, setGuests] = useState(1);
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [pets, setPets] = useState(false);

  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [filterer, setFilter] = useState();
  const [formDraft, setFormDraft] = useState([]);

  const [error, setError] = useState({});

  var filters = [
    {
      name: "Apartment",
      src: "Assets/filters/apartment.svg",
    },
    {
      name: "Condos",
      src: "Assets/filters/condos.svg",
    },
    {
      name: "Party Houses",
      src: "Assets/filters/party-houses.svg",
    },
    {
      name: "Chef's kitchens",
      src: "Assets/filters/chefs-kitchen.svg",
    },
    {
      name: "Beach Front",
      src: "Assets/filters/beach-front.svg",
    },
    {
      name: "Amazing Pools",
      src: "Assets/filters/amazing-pools.svg",
    },
    {
      name: "Creative Spaces",
      src: "Assets/filters/creative-spaces.svg",
    },
  ];

  function filterSelect(filter) {
    setFilter(filter);
  }

  function draftHandler() {
    console.log("draft saved");

    let errors = {};

    function errorHandler(){
    if(!filterer){
      errors.filter = "please select a filter"
    }
    if (!country) {
      errors.country = "Please specify a country";
    }
    if (!state) {
      errors.state =   "Please specify a state"
    }
    if(!city){
      errors.city = "Please specify a city"
    }
    if(!code){
      errors.code = "Please specify a postalCode"
    }
    if (!address) {
      errors.address = "Please specify an Adress";
    }
    if (!shortDesc) {
      errors.shortDesc = "Please add a short description of your place";
    }
    if (!longDesc) {
      errors.longDesc = "Please add a description of your place";
    }
    setError(errors)
    }
    errorHandler()
    var draft = {
      "Filter":filterer,
      "country":country,
      "state":state,
      "city":city,
      "code":code,
      "address":address,
      "shortDesc":shortDesc,
      "longDesc":longDesc,
      "guests":guests,
      "bedrooms":bedrooms,
      "bathrooms":bathrooms,
      "pets":pets,
    }

    // if (Object.keys(errors).length < 1) {
    //   addDoc(collection(db, "listings"), draft)
    //     .then(() => {
    //       alert("draft has been saved");
    //     })
    //     .catch((error) => {
    //       alert(error.message);
    //     });
    // } else {
    //   alert("fill the form completely");
    // }

    if (Object.keys(errors).length < 1){
      localStorage.setItem("mandateOneV2_draft", JSON.stringify(draft));
      console.log(JSON.parse(localStorage.getItem("mandateOneV2_draft")));
    }else{
      alert("fill the form completely")
    }
    



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
        {/* specific styles for each filters are located in the style sheet */}
        <section className=" place-desc my-[75px]">
          <h1 className=" font-[600] text-[24px] mb-[50px]">
            {" "}
            What best describes your place?
          </h1>
          <div className=" desc-opt flex justify-between">
            {filters.map((filter) => {
              return (
                <div
                  className=" desc-filters"
                  onClick={() => filterSelect(filter.name)}
                >
                  <img src={filter.src} className="" />
                  <p>{filter.name}</p>
                  {filterer === filter.name ? (
                    <div className=" w-[100%] h-[3px] bg-[black] "></div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}

            {/* <div>
                <img src="Assets/filters/apartment.svg" className="" />
                <p>Trending</p>
              </div>
              <div>
                <img src="Assets/filters/condos.svg" className="" />
                <p>Top Offers</p>
              </div>
              <div>
                <img src="Assets/filters/party-houses.svg" className="" />
                <p>Appartments</p>
              </div>
              <div>
                <img src="Assets/filters/chefs-kitchen.svg" className="" />
                <p>Condos</p>
              </div>
              <div>
                <img src="Assets/filters/beach-front.svg" className="" />
                <p>Party Houses</p>
              </div>
              <div>
                <img src="Assets/filters/amazing-pools.svg" className="" />
                <p>Chef's kitchens</p>
              </div>
              <div>
                <img src="Assets/filters/creative-spaces.svg" className="" />
                <p>Beach Front</p>
              </div> */}
          </div>
          <p className="listings-error">{error.filter}</p>
        </section>
        <section className=" desc-place w-[100%]">
          <h1 className=" text-[24px] font-[600] mb-[50px]">
            Where is it located?
          </h1>
          <div className=" w-full">
            <div className=" flex w-full gap-[15px] md:gap-[10%]">
              <div className=" flex-1 list-input">
                <label htmlFor="country">Country/Region</label>
                <input
                  type="text"
                  placeholder="Nigeria"
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                />
                <p className=" listings-error">{error.country}</p>
              </div>
              <div className=" flex-1 list-input">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  placeholder="Lagos"
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                />
                <p className=" listings-error">{error.state}</p>
              </div>
            </div>
            <div className=" flex w-full gap-[15px] md:gap-[10%]">
              <div className=" flex-1 list-input">
                <label htmlFor="city">city</label>
                <input
                  type="text"
                  placeholder="city"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
                <p className=" listings-error">{error.city}</p>
              </div>
              <div className=" flex-1 list-input">
                <label htmlFor="code">Postal code</label>
                <input
                  type="text"
                  placeholder="Nigeria"
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                />
                <p className=" listings-error">{error.city}</p>
              </div>
            </div>
            <div list-input>
              <label htmlFor="address">Street address</label>

              <input
                type="text"
                placeholder=""
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
              <p className=" listings-error">{error.address}</p>
            </div>
            <div className=" flex">
              <p className="address-note bg-[#FFE6E6] mr-[auto] italic text-[#FF0000] text-[20px] font-[400] px-[10px]">
                This address will not be visible to the guest until the booking
                is comfirmed
              </p>
            </div>
          </div>
        </section>
        <section className=" little-more">
          <h1 className=" text-[24px] font-[600] mb-[50px] mt-[72px]">
            Tell us a little more
          </h1>
          <div className=" list-input">
            <label htmlFor="">Short description</label>
            <input
              type="text"
              placeholder="2 Bedroom Apartment in Lagos"
              onChange={(e) => {
                setShortDesc(e.target.value);
              }}
            />
            <p className=" listings-error">{error.shortDesc}</p>
          </div>
          <div className=" list-input">
            <label htmlFor=""> Write a description about your place</label>
            <textarea
              name=""
              id=""
              onChange={(e) => {
                setLongDesc(e.target.value);
              }}
            ></textarea>
            <p className=" listings-error">{error.longDesc}</p>
          </div>
          <div>
            <Counter
              name={"Guests"}
              count={guests}
              addBtn={() => {
                setGuests(guests + 1);
              }}
              subBtn={() => {
                guests > 0 ? setGuests(guests - 1) : setGuests(guests);
              }}
            />
            <Counter
              name={"Bedrooms"}
              count={bedrooms}
              addBtn={() => {
                setBedrooms(bedrooms + 1);
              }}
              subBtn={() => {
                bedrooms > 0
                  ? setBedrooms(bedrooms - 1)
                  : setBedrooms(bedrooms);
              }}
            />
            <Counter
              name={"Bathrooms"}
              count={bathrooms}
              addBtn={() => {
                setBathrooms(bathrooms + 1);
              }}
              subBtn={() => {
                bathrooms > 0
                  ? setBathrooms(bathrooms - 1)
                  : setBathrooms(bathrooms);
              }}
            />
            <div className=" w-[300px] flex items-center justify-between">
              <p className=" font-[600] text-[16px]">Pets</p>
              <FormControlLabel
                value={pets}
                control={<Switch color="primary" />}
                label={pets ? "Yes" : "No"}
                labelPlacement="start"
                className=" translate-x-[-8px]"
                onClick={(e) => {
                  setPets(!pets);
                }}
              />
            </div>
          </div>
        </section>
        <div className=" mt-[300px] mb-[500px] ">
          <div className=" h-[6px] w-[100%] border-[1px] border-solid border-[black] rounded-[10px] mb-[90px]">
            <div className=" h-[100%] w-[33%] bg-[black] "></div>
          </div>
          <div className=" flex gap-[15px] justify-end">
            <button
              className=" h-[48px] w-[144px] border-solid border-[1px] border-[black] rounded-[8px] font-[600] text-[16px]"
              onClick={() => draftHandler()}
            >
              Save and exit
            </button>
            <button className=" h-[48px] w-[144px] border-solid border-[1px] border-[black] bg-[black] text-[#ffffff] rounded-[8px] font-[600] text-[16px]">
              Next
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
