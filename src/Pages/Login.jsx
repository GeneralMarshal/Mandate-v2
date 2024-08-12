import "../Styles/Login.css"
import Footer from "../Components/Footer.jsx";

export default function Login() {
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
        <main className=" w-[100vw] flex justify-center px-[20px] my-[50px]">
          <div className="  max-w-[568px] w-full">
            <p className=" font-[700] text-[16px] mb-[27px] text-[#0066FF] text-right">
              Login
            </p>
            <div className="login-form border-solid border-[1px] border-[#B0B0B0] rounded-[12px] px-[32px]">
              <form action="" className="mandate-login">
                <p className=" py-[21px] text-center font-[700] text-[16px] border-solid border-b-[1px] border-b-[#EBEBEB]">
                  Sign up
                </p>
                <h1 className=" mt-[26px] mb-[43px] font-[600] text-[22px]">
                  Welcome to Mandates
                </h1>
                <div className=" flex w-[100%] gap-[5%]">
                  <div className="flex-1 flex-wrap">
                    <label htmlFor="firstName " className=" block">
                      First name
                    </label>
                    <input type="text" placeholder="First name" />
                  </div>
                  <div className="flex-1 flex-wrap">
                    <label htmlFor="firstName" className=" block">
                      First name
                    </label>
                    <input type="text" placeholder="First name" />
                  </div>
                </div>
                <div>
                  <label htmlFor="emailAddress" className=" block">
                    Email address
                  </label>
                  <input type="email" placeholder="Enter your email address" />
                </div>
                <div>
                  <label htmlFor="password" className=" block">
                    Password
                  </label>
                  <input type="password" placeholder="Password" />
                </div>
                <div>
                  <label htmlFor="repeatPassword" className=" block">
                    Password
                  </label>
                  <input type="password" placeholder="Repeat password" />
                </div>
                <button className="w-[100%] rounded-[8px] h-[57px] mb-[] bg-gradient-to-r from-[#0066FF] via-[#007BE5] to-[#0E3FF2] text-[#ffffff]">
                  Sign in
                </button>
              </form>
              <div className=" w-[100%] relative h-[1px] bg-[#dddddd] my-[50px]">
                <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[50px] text-center text-[12px]">
                  or
                </p>
              </div>
              {/* styles for social media buttons in the style sheet */}
              <div className=" login-soc flex flex-col gap-[16px] mb-[73px]">
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
