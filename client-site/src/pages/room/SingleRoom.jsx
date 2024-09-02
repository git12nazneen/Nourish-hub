import React from "react";
import { Link } from "react-router-dom";

const SingleRoom = ({ singleRoom }) => {
  const {city,total_reviews,price_per_night,room_images,hotel_name, _id} = singleRoom;
  return (
    <div className="mx-5 lg:mx-0 overflow-x-hidden">
      <a data-aos="zoom-in-down" data-aos-duration="2000"
        class="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
        href="#"
      >
        <div class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
         <Link to={`/room/${_id}`}>
         <img
            class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
            src={room_images}
            alt="Image Description"
          /></Link>
        </div>
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-900 ">
            {city}
          </h3>
          <p class="mt-1 text-gray-900 dark:text-neutral-900">
           {hotel_name}
          </p>
          <div className="flex my-3">
            <div className="flex-1"><p className="text-gray-800 dark:text-white"> Price:{price_per_night} $</p> </div>
            <div className="flex-1"><p className="text-gray-800 dark:text-white">Total view: {total_reviews.length > 0 ? total_reviews.length : "Not available "}</p></div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SingleRoom;
