import Banner from "../Components/Banner.jsx";
import Filter from "../Components/Filter.jsx";
import Footer from "../Components/Footer.jsx";
import Main from "../Components/Main.jsx";
import HeaderMain from "../Components/HeaderMain.jsx";





export default function LandingPage() {
  return (
    <>
      <HeaderMain search={true} />
      <Banner />
      <Filter />
      <Main />
      <Footer links={true} />
    </>
  );
}
