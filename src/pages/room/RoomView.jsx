import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import useAuth from "../../hooks/useAuth";

import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";
const RoomView = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());

  console.log("User:", user);

  const roomView = useLoaderData();

  const {
    hotel_name,
    room_description,
    room_images,
    city,
    price_per_night,
    room_size,
    availability,
    special_offers,
    total_reviews,
    country,
  } = roomView;

 

  const handleConfirmBooking = () =>{
    // e.preventDefault()
    const email = user?.email
    console.log(email)
    console.log("Hotel Name:", hotel_name);
    console.log("Price Per Night:", price_per_night);
    console.log("Date:", startDate);
    const hotel = hotel_name
    const price = price_per_night
    const date = startDate
    const info ={hotel,price,date,email}
    console.log(info)


    fetch('http://localhost:5000/booking', {
      method:'POST',
      headers:{
        'content-type':'application/json',
        
      },
      credentials: 'include',
      body:JSON.stringify(info)
    })
    .then(res=> res.json()
  
  )
    .then(data=>{
      console.log('getting data',data);
      if(data.insertedId){
        swal ( "Done" ,  "Success booking room " ,  "success" )
      }
    })
    .catch(error=>{
      console.error(error)
    })
  }

 
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <div class="lg:flex lg:-mx-6">
            <div class="lg:w-3/4 lg:px-6">
              <img className="w-full h-4/6" src={room_images} alt="" />

              <div>
                <p class="mt-6 text-sm text-yellow-600 uppercase">{country}</p>

                <h1 class="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                  {city}
                </h1>
                <p className="my-1">Hotel name:{hotel_name}</p>
                <p>Special Offers:{special_offers}</p>
               
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn  btn-outline btn-warning my-2"
                
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  Book now
                </button>
                <div className="h-80">
                  <dialog id="my_modal_1" className="modal ">
                    <div className="modal-box h-80% w-11/12 max-w-5xl">
                      <p className="my-1 font-bold text-2xl text-yellow-600">
                        Hotel name: {hotel_name}
                      </p>
                      <p className="text-xl font-bold">
                        Night: {price_per_night} $
                      </p>
                      <form>
                        <label className="input input-bordered flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 opacity-70"
                          >
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                          </svg>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            disabled
                            value={user?.email || ""}
                            className="grow"
                            placeholder="Email"
                          />
                        </label>
                      </form>
                      <div className="pt-12">
                     Choose date : <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                      </div>
                      <div className="modal-action">
                        <form method="dialog">
                      
                          <button 
                          type="button"
                          onClick={handleConfirmBooking}
                          className="btn"
                         >Confirm book</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
                <div className="h-96">
                 
                </div>
              </div>
            </div>

            <div class="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
              <div>
                <h3 class="text-yellow-600 capitalize">Room description</h3>

                <a
                  href="#"
                  class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
                >
                  {room_description}
                </a>
              </div>

              <hr class="my-6 border-gray-200 dark:border-gray-700" />

              <div>
                <h3 class="text-yellow-600 capitalize">Room Per Price</h3>

                <a
                  href="#"
                  class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
                >
                  Night:{price_per_night}
                </a>
              </div>

              <hr class="my-6 border-gray-200 dark:border-gray-700" />

              <div>
                <h3 class="text-yellow-600 capitalize">Premium Collection</h3>

                <a
                  href="#"
                  class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
                >
                  Area: {room_size}
                </a>
              </div>

              <hr class="my-6 border-gray-200 dark:border-gray-700" />

              <div>
                <h3 class="text-yellow-600 capitalize">Premium kits</h3>

                <a
                  href="#"
                  class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
                >
                  Availability: {availability}
                </a>
              </div>
              <div className="my-4">
                <h3 class="text-yellow-600 capitalize">Reviews</h3>

                <a
                  href="#"
                  class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
                >
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
