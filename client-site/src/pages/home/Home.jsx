import  { useEffect, useState } from "react";
import Hero from "./Hero";
import Review from "./Review";
import Team from "./Team";
import Map from "./Map";
import Subscribe from "./Subscribe";
import Features from "./Features";
import UserReview from "./UserReview";
import Pagetitle from "../../components/Pagetitle";
import img from '../../assets/dis.png'
import HotelBanner from "./HomeBanner";
import Gallery from "./Gallery";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      // document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  return (
    <div>
      <Pagetitle title="Nourish Hub || home"></Pagetitle>

      <div>
        {isOpen && (
        

      <div className="modal-overlay fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
            <div className="modal-content text-center bg-gray-200 w-96 mx-auto rounded-xl p-4">
              <button className="modal-close font-bold text-5xl text-yellow-700" onClick={closeModal}>
                &times;
              </button>
              <h3 className="modal-title text-2xl font-bold text-yellow-600 ">
                Special Offers for you
              </h3>
             
              <img className="h-48 w-auto mx-auto" src={img} alt="" />
             
              <h4> See our details</h4>
              <p className="modal-text font-bold ">
                Press ESC key or click on &times; button to close
              </p>
            </div>
          </div>
        )}
      </div>

      <Hero></Hero>
      <HotelBanner></HotelBanner>
      <Features></Features>
      <Subscribe></Subscribe>
      <Gallery></Gallery>
      <UserReview></UserReview>
      <Map></Map>
    </div>
  );
};

export default Home;
