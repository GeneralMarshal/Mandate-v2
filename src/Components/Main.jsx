import PropertyDetail from "./PropertyDetail.jsx";
import { useState } from "react";
import Pagination from "./Pagination.jsx";
import "../Styles/Main.css";
import { useEffect } from "react";

export default function Main() {
  const [postArray, setPostArray] = useState([
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
    PropertyDetail,
  ]);

  const [currentPage, setCurrentpage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(16);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const [currentPosts, setCurrentPosts] = useState(
    postArray.slice(firstPostIndex, lastPostIndex)
  );

  const noOfPages = Math.ceil(postArray.length / postPerPage);

  // const[currentArray, setCurrentArray] = useState()

  function clickHandler(e) {
    e.preventDefault()
    setCurrentpage(e.target.value);
    let removeClassList = document.querySelectorAll(".page-nav");
    removeClassList.forEach((page) => {
      page.classList.remove("activePage");
    });
    e.target.classList.add("activePage");
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  useEffect(() => {
    setCurrentPosts(postArray.slice(firstPostIndex, lastPostIndex));
  }, [currentPage]);

  function nextHandler() {
    console.log(noOfPages);
    currentPage < noOfPages
      ? setCurrentpage(currentPage + 1)
      : setCurrentpage(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function prevHandler() {
    console.log(noOfPages);
    currentPage > 1 ? setCurrentpage( currentPage - 1) : setCurrentpage( noOfPages)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <main>
        <div className="main-container">
          <div className="main-posts">
            {currentPosts.map((Post, index) => (
              <Post key={index} />
            ))}
          </div>
        </div>
        <Pagination
          noOfPages={noOfPages}
          currentPage={currentPage}
          clickHandler={clickHandler}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
        />
      </main>
    </>
  );
}
