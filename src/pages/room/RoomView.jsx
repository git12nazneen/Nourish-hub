import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RoomView = () => {
    const roomView = useLoaderData();
    const {hotel_name,room_description,room_images,city,price_per_night,room_size,availability,special_offers,total_reviews,country} = roomView;
    return (
        <div>
            <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <div class="lg:flex lg:-mx-6">
            <div class="lg:w-3/4 lg:px-6">
              <img className='w-full h-4/6' src={room_images} alt="" />

                <div>
                    <p class="mt-6 text-sm text-blue-500 uppercase">{country}</p>

                    <h1 class="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                       {city}
                    </h1>
                    <p>Hotel name:{hotel_name}</p>
                    <p>Special Offers:{special_offers}</p>
                </div>
            </div>

            <div class="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
                <div>
                    <h3 class="text-blue-500 capitalize">Room description</h3>

                    <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                      {room_description}
                    </a>
                </div>

                <hr class="my-6 border-gray-200 dark:border-gray-700"/>

                <div>
                    <h3 class="text-blue-500 capitalize">Room Per Price</h3>

                    <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                     Night:{price_per_night}
                    </a>
                </div>

                <hr class="my-6 border-gray-200 dark:border-gray-700"/>

                <div>
                    <h3 class="text-blue-500 capitalize">Premium Collection</h3>

                    <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                      Area:  {room_size}
                    </a>
                </div>

                <hr class="my-6 border-gray-200 dark:border-gray-700"/>

                <div>
                    <h3 class="text-blue-500 capitalize">Premium kits</h3>

                    <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                       Availability: {availability}
                    </a>
                </div> 
                <div className='my-4'>
                    <h3 class="text-blue-500 capitalize">Reviews</h3>

                    <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                    Total reviews:{total_reviews}
                    </a>
                </div> 
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default RoomView;