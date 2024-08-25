import "../Styles/HostLogin.css"
import Footer from "../Components/Footer";
import { useState } from "react";

export default function HostLogin(){
  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errors, setErrors] = useState()

  function submitHandler(e){
    e.preventDefault()
    
    let error = ""

    if (!email && password){
      error = "email is required"
    } else if (email && !password){
      error = "password is required"
    } else if (!email && !password) {
      error = "required field(s)"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error = "Email address is invalid"
    } 
    if(!error){
      error = "form submitted successfully"
    }

    setErrors(error)

    console.log(errors)
  }
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
          {/* classes for the inputs and labels are in the style-sheet */}
          <main className=" w-[100vw] flex justify-center py-[100px] ">
            <div className="  max-w-[468px] w-full">
              <p className=" font-[700] text-[16px] mb-[27px] text-[#0066FF] text-right">
                Sign up
              </p>
              <div className="  border-solid border-[1px] border-[#B0B0B0] rounded-[12px] px-[32px]">
                <form action="" className="host-login ">
                  <p className=" py-[21px] text-center font-[700] text-[16px] border-solid border-b-[1px] border-b-[#EBEBEB]">
                    Sign up
                  </p>
                  <h1 className=" mt-[26px] mb-[43px] font-[600] text-[22px]">
                    Welcome to Mandates
                  </h1>
                  <div className=" w-[100%] border-[1px] border-solid border-[#999999] rounded-[8px]">
                    <div className=" flex-wrap">
                      <input
                        placeholder="Email Address"
                        type="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <div className=" w-[100%] h-[1px] bg-[#999999]"></div>
                      <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="host-log-error text-[red] italic">{errors}</p>
                    <p className=" text-right italic font-[600] text-[16px] text-[#0E3FF2]">
                      Forgot Password?
                    </p>
                  </div>

                  <button
                    className=" w-[100%] rounded-[8px] h-[57px] mt-[28px] bg-gradient-to-r from-[#0066FF] via-[#007BE5] to-[#0E3FF2] text-[#ffffff]"
                    onClick={(e) => submitHandler(e)}
                    type="button"
                  >
                    Continue
                  </button>
                </form>
                <div className=" w-[100%] relative h-[1px] bg-[#dddddd] my-[50px]">
                  <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[50px] text-center text-[12px]">
                    or
                  </p>
                </div>
                {/* styles for social media buttons in the style sheet */}
                <div className=" host-log-soc  flex flex-col gap-[16px] mb-[73px]">
                  <div>
                    <img
                      className=" w-[20px]"
                      src="Assets/icons/colored-facebook-icon.svg"
                      alt=""
                    />
                    <p>Sign up with Facebook</p>
                  </div>
                  <div>
                    <img
                      className=" w-[20px]"
                      src="Assets/icons/google-icon.svg"
                      alt=""
                    />
                    <p>Sign up with Google</p>
                  </div>
                  <div>
                    <img
                      className=" w-[20px]"
                      src="Assets/icons/apple-icon.svg"
                      alt=""
                    />
                    <p>Sign up with Apple</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
}
