import React from "react";
import user from '../../assets/pngwing.com.png'
const SingleReview = ({ singleReview }) => {
  const { name, rating, comment, startDate } = singleReview;

  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <div class="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
            <p class="leading-loose text-gray-500 dark:text-gray-300">
              {comment}
            </p>

            <div class="flex items-center mt-6">
              <img
                class="object-cover rounded-full w-14 h-14"
                src={user}
                alt=""
              />

              <div class="mx-4">
                <h1 class="font-semibold text-yellow-500">{name}</h1>
                <span class="text-sm text-gray-500 dark:text-gray-300">
                Rating {rating}
                </span>
                <h2>Date: {new Date(startDate).toLocaleDateString()} </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleReview;

