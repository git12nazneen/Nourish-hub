import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Timestamp from "react-timestamp";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";

const PostReview = () => {
  const { user } = useAuth();
  const [timestamp, setTimestamp] = useState(0);
  const [startDate, setStartDate] = useState(new Date());

  // const handleInputChange = (event) => {
  //   const value = parseInt(event.target.value);
  //   setTimestamp(value);
  // };

  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const rating = form.rating.value;

    const comment = form.comment.value;
    const date = startDate;
    const review = { name, rating, comment, startDate };
    console.log(review);

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Your cart has been added.",
            icon: "success",
          });
        }
      });
  };

  return (
    <div>
      <div className="hero py-10 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="font-bold text-3xl text-yellow-600">
              You can share{" "}
            </h1>
            <h2>
              Your feelings about our{" "}
              <span className="text-yellow-600">Nourish hub</span>
            </h2>
          </div>
          <div>
            <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
              <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                Account settings
              </h2>

              <form onSubmit={handleAddReview}>
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label
                      class="text-gray-700 dark:text-gray-200"
                      for="username"
                    >
                      Username
                    </label>
                    <input
                      id="name"
                      defaultValue={user?.displayName}
                      disabled
                      type="text"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label
                      class="text-gray-700 dark:text-gray-200"
                      for="emailAddress"
                    >
                      Rating
                    </label>
                    <input
                      id="rating"
                      type="number"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label
                      class="text-gray-700 dark:text-gray-200"
                      for="password"
                    >
                      Comment
                    </label>
                    <input
                      id="comment"
                      type="text"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label
                      className="text-gray-700 dark:text-gray-200"
                      htmlFor="passwordConfirmation"
                    >
                      Time
                    </label>
                    {/* <input id="time" type="number" value={timestamp} onChange={handleInputChange}  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/> */}
                    <div className="pt-2">
                      {" "}
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </div>
                  </div>
                </div>

                <div class="flex justify-end mt-6">
                  <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Save
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostReview;
