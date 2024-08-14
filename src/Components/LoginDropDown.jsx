import "../Styles/LoginDropDown.css";
import { useNavigate } from "react-router-dom";

export default function LoginDropDown(props){
    const navigate = useNavigate()

    return (
      <>
        <div
          className="drop-down-container"
          onMouseOver={props.menuMouseHover}
          onMouseLeave={props.menuMouseLeave}
        >
          <ul className="drop-down">
            <li className="sign-up">Sign Up </li>
            <li onClick={ ()=> {navigate("/Login")}}>
              Login
            </li>
            <li>Gift Cards</li>
            <li>Mandate Your Home</li>
            <li>Help Center</li>
          </ul>
        </div>
      </>
    );
}