import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import Pagetitle from "../../components/Pagetitle";
import swal from "sweetalert";

const MyRooms = () => {
  const { user } = useAuth();
  console.log("user", user);
  const [booking, setBooking] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleUpdate = (bookingId) => {
    const updatedBooking = {
      id: bookingId,
      date: startDate,
    };

    fetch(`https://server-site-one-xi.vercel.app/booking/${bookingId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(updatedBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          Swal.fire({
            icon: "success",
            title: "Update Successful",
            text: "Booking date updated successfully.",
          });
          window.location.reload()
          closeModal();
        }
      })
      .catch((error) => {
        console.error("Error updating booking date:", error);
      });
  };

  useEffect(() => {
    fetch(`https://server-site-one-xi.vercel.app/booking/${user?.email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [user]);
  console.log(booking);

  const handleDelete = (_id, roomid, date) => {
    console.log(_id, date);
    const time = new Date(date).getTime()
    const curTime = new Date().getTime()
    if(curTime < time - 8600000){
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://server-site-one-xi.vercel.app/booking/${_id}`, {
            method: "DELETE",
            // 1 
            headers: {
              "content-type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify()
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                fetch(`https://server-site-one-xi.vercel.app/room/${roomid}`, {
                  method: "PUT",
                  headers: {
                    "content-type": "application/json",
                  },
                  credentials: "include",
                  body: JSON.stringify({ isAvailable: "available" }),
                })
                  .then((res) => res.json())
                  .then((data) => console.log(data));
  
                setBooking((prevBookings) =>
                  prevBookings.filter((booking) => booking._id !== _id)
                );
  
                Swal.fire({
                  title: "Deleted!",
                  text: "Your cart has been deleted.",
                  icon: "success",
                });
              }
            });
        }
      });
    }
    else{
      Swal.fire({
        text: "You cant delete!",
        icon: "warning",
      })
    }
  
  };


  return (
    <div className="max-w-6xl mx-auto my-10">
      <Pagetitle title="My rooms"></Pagetitle>
      <section className="container px-4 mx-auto py-12">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 ">
            My Booking rooms
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-yellow-100 rounded-full ">
            {booking.length}
            Booking room
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Title</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <span>Date</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Price Range</span>
                        </button>
                      </th>

                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        Edit
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        Give review
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {booking.map((books) => (
                      <tr key={books._id}>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          Hotel name: {books.hotel}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {new Date(books.date).toLocaleDateString()}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          Price: {books.price}
                        </td>

                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            <button
                              onClick={() =>
                                handleDelete(books._id, books.roomid, books.date)
                              }
                              className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>
                            <div className="relative flex justify-center">
                              <button
                                onClick={openModal}
                                className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                              >
                                Update
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
                                          <h3
                                            className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                                            id="modal-title"
                                          >
                                            Update your date
                                          </h3>
                                          <div className="border-yellow-600 border p-2 rounded-sm mt-40 ">
                                            <DatePicker
                                              selected={startDate}
                                              onChange={(date) =>
                                                setStartDate(date)
                                              }
                                              defaultValue={new Date(
                                                books.date
                                              ).toLocaleDateString()}
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
                                            onClick={() =>
                                              handleUpdate(books._id)
                                            }
                                            className="text-gray-500 transition-colors duration-200 hover:text-blue-500 focus:outline-none"
                                          >
                                            Update
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          <Link to={`/review/${books.roomid}`}>
                            <button className="btn btn-warning">Review</button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <PostReview></PostReview> */}
    </div>
  );
};

export default MyRooms;
