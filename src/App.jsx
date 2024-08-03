import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Viewlistings from "./Pages/Viewlistings";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="appdiv">
      <div id="maincontainer">
        <Routes>
          <Route path="/" element={<Viewlistings />}></Route>
          <Route path="Viewlistings" element={<Viewlistings />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
