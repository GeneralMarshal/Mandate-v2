import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Viewlistings from "./Pages/Viewlistings";
import ConfirmPay from "./Pages/ConfirmPay";
import BookingConfirmation from "./Pages/BookingConfirmation";
import Login from "./Pages/Login";
import HostLogin from "./Pages/HostLogin";
import HostBio from "./Pages/HostBio";
import ManageListingsOne from "./Pages/manage-listings/ManageListingsOne";
import ManageListingsTwo from "./Pages/manage-listings/ManageListingsTwo";
import ManageListingsThree from "./Pages/manage-listings/ManageListingsThree";


import "react-phone-input-2/lib/style.css";

function App() {
  return (
    <div id="appdiv">
      <div id="maincontainer">
        <Routes>
          <Route path="/Confirmpay" element={<ConfirmPay />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/Viewlistings" element={<Viewlistings />}></Route>
          <Route
            path="/Bookingconfirmation"
            element={<BookingConfirmation />}
          ></Route>
          <Route
            path="/Bookingconfirmation"
            element={<BookingConfirmation />}
          ></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/HostLogin" element={<HostLogin />}></Route>
          <Route path="/Hostbio" element={<HostBio />}></Route>
          <Route path="/Managelistingsone" element={<ManageListingsOne />}>
            {" "}
          </Route>
          <Route path="/ManagelistingsTwo" element={<ManageListingsTwo />}>
            {" "}
          </Route>
          <Route path="/ManagelistingsThree" element={<ManageListingsThree />}>
            {" "}
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
