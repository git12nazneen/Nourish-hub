import  { useEffect, useState } from "react";
import SingleReview from "./SingleReview";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";

const UserReview = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("https://server-site-one-xi.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className="my-10">
      <div className="overflow-x-hidden">
        <h1 data-aos="fade-left" data-aos-delay="1000" class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          What our <span class="text-yellow-400 ">clients</span> say
        </h1>

        <p  data-aos="fade-left" data-aos-delay="1200" class="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
        Briefly describe the project you worked on for the client. Include any challenges you encountered and how you overcame them. Highlight specific achievements or successes.Add any final thoughts or comments you have about the client or the project
        </p>
      </div>

      <ReactSwiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,  Navigation]}
        breakpoints={{
          350: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {review.map((singleReview) => (
          <SwiperSlide key={singleReview._id}>
            <SingleReview singleReview={singleReview} />
          </SwiperSlide>
        ))}
      </ReactSwiper>

    
    </div>
  );
};

export default UserReview;
