import "../Styles/HostBio.css"
import PhoneInput from "react-phone-input-2";
import Footer from "../Components/Footer";




export default function HostBio(){
    return (
      <>
        <div>
          <header className=" h-[79px] flex pl-[10%]">
            <img
              src=" Assets/images/mandate-logo.png"
              alt=""
              className=" h-[40px] max-w-[1100px]"
            />
          </header>

          <main className=" w-[100vw] flex justify-center items-center px-[20px] py-[100px]  ">
            <div className="  max-w-[568px] w-full">
              <h1 className=" font-600 text-[36px] text-center my-[18px]">
                Let's know you more
              </h1>
              <p className=" font-400 text-[20px] text-center text-[#687085] mb-[50px]">
                Please fill out this form
              </p>
              <div className="login-form border-solid border-[1px] border-[#B0B0B0] rounded-[12px] px-[32px] py-[12px]">
                <form action="" className=" host-sign-in">
                  <div className=" flex w-[100%] gap-[5%]">
                    <div className="flex-1 flex-wrap">
                      <label htmlFor="firstName " className=" block">
                        First name
                      </label>
                      <input
                        type="text"
                        placeholder="First name"
                        //   onChange={(e) => setFirstname(e.target.value)}
                      />
                      {/* <p className="sign-error">{errors.firstName}</p> */}
                    </div>
                    <div className="flex-1 flex-wrap">
                      <label htmlFor="lastname" className=" block">
                        Last name
                      </label>
                      <input
                        type="text"
                        placeholder="Last name"
                        //   onChange={(e) => setLastname(e.target.value)}
                      />
                      {/* <p className="sign-error">{errors.lastName}</p> */}
                    </div>
                  </div>
                  <div className="">
                    <label htmlFor="firstName " className=" ">
                      Businessname
                    </label>
                    <input type="text" placeholder="Your company name" />
                  </div>
                  <div className="">
                    <label htmlFor="" className=" ">
                      Businessname
                    </label>
                    <PhoneInput
                      country={"us"}
                      className=" mb-[20px]"
                      inputStyle={{ width: "100%", height: "48px" }}
                      // value={this.state.phone}
                      // onChange={(phone) => this.setState({ phone })}
                    />
                  </div>
                  <div className="">
                    <label htmlFor=" accountDetails " className=" ">
                      Account Details
                    </label>
                    <input type="text" placeholder="Your account name" />
                  </div>
                  <div className="">
                    <label htmlFor=" accountNumber " className=" ">
                      Account Number
                    </label>
                    <input type="text" placeholder="Your account Number" />
                  </div>
                  <div className="">
                    <label htmlFor="">Upload profile image</label>
                    <input
                      type="file"
                      placeholder="Browse and choose the file(s) you want to upload from your device"
                    />
                  </div>
                  <div className="flex">
                    <input type="checkbox" className=" agree-check"/>
                    <p className=" text-[16px] font-[600] ">You agree with our friendly <span className=" underline font-[400]">Privacy policy</span></p>
                  </div>
                </form>
              </div>
            </div>
          </main>
          <Footer className="" />
        </div>
      </>
    );
}