import React from "react";

const SingleRoom = ({ singleRoom }) => {
  const {city,total_reviews,price_per_night,room_images,hotel_name} = singleRoom;
  return (
    <div>
      <a
        class="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
        href="#"
      >
        <div class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
          <img
            class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
            src={room_images}
            alt="Image Description"
          />
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
            <div className="flex-1"><p className="text-gray-800 dark:text-white">Total view: {total_reviews}</p></div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SingleRoom;
