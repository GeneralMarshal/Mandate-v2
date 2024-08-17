import Banner from "../Components/Banner.jsx";
import Filter from "../Components/Filter.jsx";
import Footer from "../Components/Footer.jsx";
import Main from "../Components/Main.jsx";
import HeaderMain from "../Components/HeaderMain.jsx";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";





export default function LandingPage() {
  const navigate = useNavigate()
  function exploreHandler(){
      window.scrollTo({ top: 0, behavior: "smooth" });

  }
  function loginHandler(){
    navigate("/login")
  }
  return (
    <>
      <HeaderMain search={true} />
      <Banner />
      <Filter />
      <Main />
      <Footer links={true} />
      <nav className="  flex md:hidden justify-center gap-[40px] p-[10px] fixed bottom-0 left-0 w-full bg-[#ffff] z-20">
        <div className=" flex flex-col items-center cursor-pointer" onClick={ ()=>exploreHandler()} >
          <FaMagnifyingGlass className=" text-[blue] text-[22px]" />
          <p>Trending</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <img
            src="Assets/icons/thin-heart.svg"
            className="filter-icon w-[22px]"
          />
          <p>Trending</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={ ()=>loginHandler()}>
          <CgProfile className=" text-[22px]" />
          <p>Login</p>
        </div>
      </nav>
    </>
  );
}
