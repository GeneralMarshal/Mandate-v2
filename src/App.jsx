import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Viewlistings from "./Pages/Viewlistings";
import ConfirmPay from "./Pages/ConfirmPay";
import { Routes, Route } from "react-router-dom";
import BookingConfirmation from "./Pages/BookingConfirmation";
import Login from "./Pages/Login";
function App() {
  return (
    <div id="appdiv">
      <div id="maincontainer">
        <Routes>
          <Route path="Confirmpay" element={<ConfirmPay />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="Viewlistings" element={<Viewlistings />}></Route>
          <Route path="Bookingconfirmation" element={<BookingConfirmation />}></Route>
          <Route path="Bookingconfirmation" element={<BookingConfirmation />}></Route>
          <Route path="Login" element={<Login/>}></Route>

        </Routes>
      </div>
    </div>
  );
}

export default App;
