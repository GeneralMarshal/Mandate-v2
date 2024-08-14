import "../Styles/LoginDropDown.css";
import { Link } from "react-router-dom";
export default function LoginDropDown(props){


    return (
      <>
        <div
          className="drop-down-container"
          onMouseOver={props.menuMouseHover}
          onMouseLeave={props.menuMouseLeave}
        >
          <ul className="drop-down">
            <li className="sign-up">Sign Up </li>
            <li>
              <Link to="/Login">Log In</Link>
            </li>
            <li>Gift Cards</li>
            <li>Mandate Your Home</li>
            <li>Help Center</li>
          </ul>
        </div>
      </>
    );
}