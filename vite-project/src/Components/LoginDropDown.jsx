import "./LoginDropDown.css";
export default function LoginDropDown(){
    return (
      <>
        <div className="drop-down-container">
          <ul className="drop-down">
            <li className="sign-up">Sign Up </li>
            <li>Log In</li>
            <li>Gift Cards</li>
            <li>Mandate Your Home</li>
            <li>Help Center</li>
          </ul>
        </div>
      </>
    );
}