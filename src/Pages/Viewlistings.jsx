import HeaderMain from "../Components/HeaderMain"
import "../Styles/Viewlistings.css"


export default function Viewlistings(){
    return (
      <>
        <HeaderMain search={false} />
        <main className="view-main px-[100px] py-[30px]">
          <section className="listings-desc">
            <div className="view-filters flex gap-[50px] mb-[50px]">
              <button className="viewfilter-btn">Photos</button>
              <button className="viewfilter-btn">Virtual Tours</button>
              <button className="viewfilter-btn">Map</button>
            </div>
            <div className=" pics-header flex justify-between ">
              <h2 className=" text-[26px] font-[600]">
                2 Bedroom Apartment in Lekki Phase 1{" "}
              </h2>
              <div className="flex ">
                <div className="flex mr-[20px] items-center">
                  <img
                    className=" h-[14px] mr-[8px] "
                    src="Assets/icons/thin-heart.svg"
                    alt=""
                  />
                  <p className=" underline text-[14px]"> Share</p>
                </div>
                <div className=" flex items-center">
                  <img
                    className=" h-[14px] mr-[8px]"
                    src="Assets/icons/share.svg"
                    alt=""
                  />
                  <p className=" underline text-[14px]"> Save</p>
                </div>
              </div>
            </div>
            <div className="grid-container h-[auto]">
              <div className="pics-grid relative">
                <div className="one">
                  <img
                    className="grid-pic"
                    src="Assets/images/viewImages/outside.png"
                    alt=""
                  />
                </div>
                <div className="two">
                  <img
                    className="grid-pic"
                    src="Assets/images/viewImages/bedroom.png"
                    alt=""
                  />
                </div>
                <div className="three">
                  <img
                    className="grid-pic"
                    src="Assets/images/viewImages/kitchen.png"
                    alt=""
                  />
                </div>
                <div className="four">
                  <img
                    className="grid-pic"
                    src="Assets/images/viewImages/sitting room.png"
                    alt=""
                  />
                </div>
                <div className="five">
                  <img
                    className="grid-pic"
                    src="Assets/images/viewImages/stairs.png"
                    alt=""
                  />
                </div>
                <div className="allPhotos-btn flex text-[14px] font-[600] justify-center absolute h-[34px] w-[160px] bg-white rounded-[8px] border-solid border-[1px] border-black items-center bottom-[32px] right-[32px] hover:cursor-pointer">
                  <img
                    className=" h-[13px] pr-[8px]"
                    src="Assets/icons/grid.svg"
                    alt=""
                  />
                  Show all photos
                </div>
              </div>
            </div>
            <div>
              <div className="overview my-[23px] max-w-[644px] ">
                <div className="summary-card flex w-[100%] flex-row border-[1.5px] border-[#DDDDDD]  border-solid rounded-[8px] h-[95px] items-center justify-between px-[25px] mb-[20px]">
                  <div>
                    <h2 className=" text-[22px] font-[600] mb-[5px]">
                      2 bedroom lekki 1 right side
                    </h2>
                    <span className=" text-[16px] font-[400] ">
                      4 guests · Studio · 2 beds · 2 bath
                    </span>
                  </div>
                  <span className=" summary-border w-[1px] h-[40px] bg-[#DDDDDD] "></span>
                  <div className="summary-ratings">
                    <h2 className="font-[600] text-[20px] text-center leading-[20px]">
                      4.97
                    </h2>
                    <img src="Assets/icons/fiveStars.svg" alt="" />
                  </div>
                  <span className=" summary-border w-[1px] h-[40px] bg-[#DDDDDD] "></span>
                  <div className="flex-col align-right">
                    <h2 className="font-[600] text-[20px] leading-[20px]">
                      132
                    </h2>
                    <h2 className="text-600 font-12px] underline">Reviews</h2>
                  </div>
                </div>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Soluta dolores reiciendis sit delectus magnam nostrum
                  recusandae, quisquam voluptatem. Eligendi necessitatibus nisi
                  enim excepturi ducimus dolorem quidem recusandae nesciunt
                  sequi mollitia?
                </div>
                <div className="flex align-center">
                  <h1 className=" underline  font-[600] text-[16px] mr-[7px]">
                    Show more
                  </h1>
                  <img className="" src="Assets/icons/nxt-arrow.svg" alt="" />
                </div>
                <div >
                  <h2 className=" mt-[46px] mb-[26px] font-[600] text-[22px]">
                    {" "}
                    Property details
                  </h2>
                  <div className=" flex justify-between">
                    <div className="property-details"></div>
                    <div className="property-details"></div>
                    <div className="property-details"></div>
                  </div>
                  <div className="flex my-[12px]">
                    <img
                      className=" mr-[7px] "
                      src="Assets/icons/flag.svg"
                      alt=""
                    />
                    <h3 className=" underline font-[600] text-[#717171] text-[14px]">
                      Report this listing
                    </h3>
                  </div>
                  <div className=" w-[100%] h-[1px] my-[46px] bg-[#DDDDDD]" ></div>
                </div>
              </div>
            </div>
          </section>

          <section className="listings-ratings"></section>
        </main>
      </>
    );


}