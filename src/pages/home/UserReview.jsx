import React, { useEffect, useState } from "react";
import SingleReview from "./SingleReview";

const UserReview = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className="my-10">
      <div>
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          What our <span class="text-yellow-400 ">clients</span> say
        </h1>

        <p class="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>
      </div>
      <div class="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-3 xl:mt-10 max-w-7xl">
        {review.map((singleReview) => (
          <SingleReview
            key={singleReview._id}
            singleReview={singleReview}
          ></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default UserReview;
