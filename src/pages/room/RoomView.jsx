import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import useAuth from "../../hooks/useAuth";

import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";
import Pagetitle from "../../components/Pagetitle";


const RoomView = () => {
  const { user, logOut } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [isRoomAvailable, setIsRoomAvailable] = useState(true); 
  const isAuthenticated = !!user;

  useEffect(() => {
  
    setIsRoomAvailable(true);
  }, [user]); 




  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
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

  const handleConfirmBooking = () => {
    // e.preventDefault()
    const email = user?.email;
    console.log(email);
    console.log("Hotel Name:", hotel_name);
    console.log("Price Per Night:", price_per_night);
    console.log("Date:", startDate);
    const hotel = hotel_name;
    const price = price_per_night;
    const date = startDate;
    const info = { hotel, price, date, email };
    console.log(info);

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("getting data", data);
        if (data.insertedId) {
         
          swal("Done", "Success booking room ", "success");
          closeModal();
          setIsRoomAvailable(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div>
        <Pagetitle title='Room Details'></Pagetitle>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <div class="lg:flex lg:-mx-6">
            <div class="lg:w-3/4 lg:px-6 relative">
              <img className="w-full h-4/6" src={room_images} alt="" />

              {/* Availability */}
              <div class="absolute top-0 left-5 mt-2 ml-2">
                <a
                  href="#"
                  class="block font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400"
                >
                  <span className="px-3 py-1 text-xl font-light text-black bg-yellow-600 rounded-full">
                  {isRoomAvailable ? "Available" : "Unavailable"}
                  </span>
                </a>
              </div>

              <div>
                <p class="mt-6 text-sm text-yellow-600 uppercase">{country}</p>

                <h1 class="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                  {city}
                </h1>
                <p className="my-1">Hotel name:{hotel_name}</p>
                <p>Special Offers:{special_offers}</p>

                <div className="relative flex justify-start">
                  <button
                    onClick={openModal}
                    className="btn  btn-outline btn-warning my-2"
                    // disabled={!isRoomAvailable} 
                    disabled={!isRoomAvailable || !isAuthenticated}  
          
                  >
                    Confirm book
                  </button>

                  {isOpen && (
                    <div
                      className="fixed inset-0 z-10 overflow-y-auto"
                      aria-labelledby="modal-title"
                      role="dialog"
                      aria-modal="true"
                    >
                      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20  text-center sm:block sm:p-0">
                        <span
                          className="hidden sm:inline-block sm:align-middle sm:h-screen"
                          aria-hidden="true"
                        >
                          &#8203;
                        </span>

                        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                          <div>
                            <div className="my-10  text-center">
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
                                Choose date :{" "}
                                <DatePicker
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="mt-5 sm:flex sm:items-center sm:justify-between">
                            <a
                              href="#"
                              className="text-sm text-blue-500 hover:underline"
                            >
                              Learn more
                            </a>

                            <div className="sm:flex sm:items-center">
                              <button
                                onClick={closeModal}
                                className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                              >
                                Cancel
                              </button>

                              <button
                                onClick={handleConfirmBooking}
                                className="text-gray-500 transition-colors duration-200 hover:text-blue-500 focus:outline-none"
                              >
                                Confirm booking
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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


// import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import useAuth from "../../hooks/useAuth";
// import swal from "sweetalert";

// import "react-datepicker/dist/react-datepicker.css";

// const RoomView = () => {
//   const { user, logOut } = useAuth(); // Assuming you have a logout function in useAuth hook
//   const [startDate, setStartDate] = useState(new Date());
//   const [isOpen, setIsOpen] = useState(false);
//   const [isRoomAvailable, setIsRoomAvailable] = useState(true);
//   const isAuthenticated = !!user; // Check if user is authenticated

//   useEffect(() => {
//     setIsRoomAvailable(true);
//   }, [user]);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const handleConfirmBooking = () => {
//     const email = user?.email;
//     const hotel = hotel_name;
//     const price = price_per_night;
//     const date = startDate;
//     const info = { hotel, price, date, email };

//     fetch("http://localhost:5000/booking", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       credentials: "include",
//       body: JSON.stringify(info),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.insertedId) {
//           swal("Done", "Success booking room ", "success");
//           closeModal();
//           setIsRoomAvailable(false);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <section class="bg-white dark:bg-gray-900">
//         <div class="container px-6 py-10 mx-auto">
//           <div class="lg:flex lg:-mx-6">
//             <div class="lg:w-3/4 lg:px-6 relative">
//               {/* Your existing code */}
//               <button
//                 onClick={openModal}
//                 className="btn btn-outline btn-warning my-2"
//                 disabled={!isRoomAvailable || !isAuthenticated} // Disable booking button if room is unavailable or user is not authenticated
//               >
//                 Confirm book
//               </button>
//               {/* Your existing code */}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default RoomView;
