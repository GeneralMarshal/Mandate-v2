import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="appdiv">
      <div id="maincontainer">
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
