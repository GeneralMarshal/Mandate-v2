import "../Styles/Banner.css";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaLaptop } from "react-icons/fa";
import { IoGiftOutline } from "react-icons/io5";
import { TiLockClosedOutline } from "react-icons/ti";
import { MdOutlinePhoneEnabled } from "react-icons/md";

export default function Banner() {
  let bannerStyle = {
    backgroundImage: `url("Assets/images/banner-background.jpg")`,
  };
  return (
    <>
      <div className="banner hidden md:flex" style={bannerStyle}>
        <div className="banner-heading">
          <h1>Seamless Shortlet Bookings</h1>
        </div>
        <div className="listings-container">
          <div className="service-listings">
            <div className="service">
              <MdOutlinePhoneEnabled className="service-icon" />
              24/7 Support
            </div>
            <div className="service-border"></div>
            <div className="service">
              <TiLockClosedOutline className="service-icon" />
              Secured Payments
            </div>
            <div className="service-border"></div>
            <div className="service">
              <IoGiftOutline className="service-icon" />
              Free Listings
            </div>
            <div className="service-border"></div>
            <div className="service">
              <FaLaptop className="service-icon" />
              Virtual Tours
            </div>
            <div className="service-border"></div>
            <div className="service">
              <CiBookmarkCheck className="service-icon" />
              Verified Listings
            </div>
          </div>
        </div>
        <div className="banner-overlay"> </div>
      </div>
    </>
  );
}
