import { useState } from "react";
import MultiSearchBar from "./MultiSearcHBar";
//general style sheet
import "../Styles/Header.css";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import LoginDropDown from "./LoginDropDown";

export default function HeaderMain(props) {
  const [login, setLogin] = useState(false);

  function handleClick() {
    setLogin(!login);
  }


 function  menuMouseHover(){
    console.log("hover")
    setLogin(true)
  }
  function menuMouseLeave(){
    console.log("leave");
    setLogin(false)


  }

  return (
    <>
      <header className="">
        <div className="login-container hidden md:flex pb-[0] md:pb-[20px]">
          <div className="mandate-icon">
            <img
              className="logo"
              src="Assets/images/mandate-logo.png"
              alt="mandate-icon"
            />
          </div>
          <div className="user-login ">
            <button className="host-btn ">Become a host</button>
            <div className="login-btn" onClick={() => handleClick()}>
              <FaCircleUser className="profile" />
              <IoIosMenu className="profile" />
            </div>
            {login && (
              <LoginDropDown
                menuMouseHover={menuMouseHover}
                menuMouseLeave={menuMouseLeave}
              />
            )}
          </div>
        </div>
        {  props.search && <MultiSearchBar /> }
      </header>
    </>
  );
}
