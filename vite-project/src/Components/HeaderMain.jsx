import { useState } from "react";
import MultiSearchBar from "./MultiSearcHBar";
import "../App.css"; //general style sheet
import "./Header.css";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import LoginDropDown from "./LoginDropDown";

export default function HeaderMain() {
  const [login, setLogin] = useState(false);
  function handleClick() {
    setLogin(!login);
    console.log(login);
  }

  return (
    <>
      <header>
        <div className="login-container">
          <div className="mandate-icon">
            <img
              className="logo"
              src="Assets/images/mandate-logo.png"
              alt="mandate-icon"
            />
          </div>
          <div className="user-login">
            <button className="host-btn">Become a host</button>
            <div className="login-btn" onClick={() => handleClick()}>
              <FaCircleUser className="profile" />
              <IoIosMenu className="profile" />
            </div>
            {login && <LoginDropDown />}
          </div>
        </div>
        <MultiSearchBar />
      </header>
    </>
  );
}
