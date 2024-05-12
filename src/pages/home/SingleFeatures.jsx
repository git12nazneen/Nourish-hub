import React from "react";
import { Link } from "react-router-dom";

const SingleFeatures = ({singleFeatures}) => {
    const {city,total_reviews,price_per_night,room_images,hotel_name,room_description, _id} = singleFeatures;
  return (
    <div>
      <a
        class="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
        href="#"
      >
        <img
          class="w-full h-auto rounded-t-xl"
          src={room_images}
        />
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            {hotel_name}
          </h3>
          <p class="mt-1 text-sm mb-3 text-gray-500 dark:text-neutral-400">
           {room_description}
          </p>
          <Link to={`/room/${_id}`}>
         <button className="btn btn-warning">Book now</button>
         </Link>
        </div>
      </a>
    </div>
  );
};

export default SingleFeatures;