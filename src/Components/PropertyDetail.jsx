import "../Styles/PropertyDetail.css";
import { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
export default function PropertyDetail() {

  const navigate = useNavigate()
  const imageArray = [
    "Assets/propertyImages/01.jpeg",
    "Assets/propertyImages/02.jpeg",
    "Assets/propertyImages/03.jpeg",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  function prevSlide() {
    const newIndex = (currentSlide - 1 + imageArray.length) % imageArray.length;
    setCurrentSlide(newIndex);
  }

  function nextSlide() {
    const newIndex = (currentSlide + 1) % imageArray.length;
    setCurrentSlide(newIndex);
  }

  function favoritehandler(e){
    const container = e.currentTarget
    const active = container.querySelector(".heart-active")
    const notActive = container.querySelector(".heart-notActive");

    active.classList.toggle("active")
    notActive.classList.toggle("active");


    

  }
  const slider = imageArray.map((image, index) => (
    <img
      key={index}
      src={image}
      alt=""
      className="property-image "
      onClick={() => {
        navigate("/Viewlistings");
      }}
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    />
  ));
  const dots = imageArray.map((image, index) => (
    <span
      index={index}
      className={`dots ${index === currentSlide ? "active" : ""}`}
    ></span>
  ));
  return (
    <div
      className="adjustable-container"
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   border: "1px black solid",
      // }}
      //
    >
      <div className="property-container">
        <div className="image-container">
          {slider}
          <div className="dotsContainer">{dots}</div>

          <span className="heart-property z-10" onClick={favoritehandler}>
            <img src="Assets/icons/heart.svg" alt="" className="heart-notActive" />
            <FaHeart className="heart-active active"/>
          </span>
          <div className="img-btn">
            <button className="prev-btn" onClick={prevSlide}>
              <MdOutlineNavigateBefore className="img-nav" />
            </button>
            <button className="next-btn" onClick={nextSlide}>
              <MdOutlineNavigateNext className="img-nav" />
            </button>
          </div>
        </div>
        <div className="details">
          <div>
            <h4>Gbagyi way, Abuja</h4>
            <p>82 miles away</p>
            <p>Apr 28 – May 3</p>
            <h5>
              N50,000  <span>night</span>
            </h5>
          </div>
          <div className="property-ratings">
            <img src="Assets/icons/star.svg" alt="" />
            <h5>4.98</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
