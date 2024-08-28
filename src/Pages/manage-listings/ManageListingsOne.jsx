import '../../Styles/ManageListingsOne.css'
import HeaderMain from "../../Components/HeaderMain"
import Footer from "../../Components/Footer"
import Counter from '../../Components/Counter';
import { useState } from 'react';

import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function ManageListingsOne(){
    const [country, setCountry] = useState()
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const [code, setCode] = useState();
    const [address, setAddress] = useState();
    const [shortDesc, setShortDesc] = useState();
    const [longDesc, setLongDesc] = useState();




    const [guests, setGuests] = useState(1)
    const [bedrooms, setBedrooms] = useState(1);
    const [bathrooms, setBathrooms] = useState(1);
    const [pets, setPets] = useState(false)

    const label = { inputProps: { "aria-label": "Switch demo" } }; 
    const [filterer, setFilter] = useState()
    const [formDraft, setFormDraft] = useState([])

    const [errors, setErrors] = useState({})

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

    function filterSelect(filter){
      setFilter(filter)
      
    }
  
    function draftHandler(){
      console.log("draft saved")

      
      
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
                  <div>
                    <img
                      src={filter.src}
                      className=""
                      onClick={() => filterSelect(filter.name)}
                    />
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
          </section>
          <section className=" desc-place w-[100%]">
            <h1 className=" text-[24px] font-[600] mb-[50px]">
              Where is it located?
            </h1>
            <div className=" w-full">
              <div className=" flex w-full gap-[15px] md:gap-[10%]">
                <div className=" flex-1 ">
                  <label htmlFor="country">Country/Region</label>
                  <input
                    type="text"
                    placeholder="Nigeria"
                    onChange={() => {
                      setCountry(e.target.value);
                    }}
                  />
                </div>
                <div className=" flex-1">
                  <label htmlFor="state">Country/Region</label>
                  <input
                    type="text"
                    placeholder="Lagos"
                    onChange={() => {
                      setState(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className=" flex w-full gap-[15px] md:gap-[10%]">
                <div className=" flex-1 ">
                  <label htmlFor="city">city</label>
                  <input
                    type="text"
                    placeholder="city"
                    onChange={() => {
                      setCity(e.target.value);
                    }}
                  />
                </div>
                <div className=" flex-1">
                  <label htmlFor="code">Postal code</label>
                  <input
                    type="text"
                    placeholder="Nigeria"
                    onChange={() => {
                      setCode(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="address">Street address</label>
                setCode(e.target.value);
                <input
                  type="text"
                  placeholder=""
                  onChange={() => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
              <div className=" flex">
                <p className="address-note bg-[#FFE6E6] mr-[auto] italic text-[#FF0000] text-[20px] font-[400] px-[10px]">
                  This address will not be visible to the guest until the
                  booking is comfirmed
                </p>
              </div>
            </div>
          </section>
          <section className=" little-more">
            <h1 className=" text-[24px] font-[600] mb-[50px] mt-[72px]">
              Tell us a little more
            </h1>
            <div>
              <label htmlFor="">Short description</label>
              <input
                type="text"
                placeholder="2 Bedroom Apartment in Lagos"
                onChange={() => {
                  setLongDesc(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="">
                {" "}
                Write a description about your place
              </label>
              <textarea name="" id=""></textarea>
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