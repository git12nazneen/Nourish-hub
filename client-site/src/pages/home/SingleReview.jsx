import React from "react";
import user1 from "../../assets/pngwing.com.png";
import useAuth from "../../hooks/useAuth";

const SingleReview = ({ singleReview }) => {
  const { name, rating, comment, startDate } = singleReview;
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="p-4">
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="p-6 bg-gradient-to-r from-gray-700 via-yellow-700 to-yellow-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl h-64 flex flex-col justify-between">
            <p className="leading-loose text-white mb-4">
              {comment.length > 90 ? `${comment.slice(0, 90)}...` : comment}
            </p>

            <div className="flex items-center">
              <img
                className="object-cover rounded-full w-16 h-16 border-2 border-white"
                src={user?.photoURL ? user1 : photoURL}
                alt="User"
              />

              <div className="ml-4">
                <h1 className="font-semibold text-yellow-200">{name}</h1>
                <span className="text-sm text-gray-300">Rating: {rating}</span>
                <h2 className="text-sm text-gray-300">
                  Date: {new Date(startDate).toLocaleDateString()}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleReview;
