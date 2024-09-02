import React from 'react';

const HotelBanner = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between bg-white p-6  my-10 py-20 gap-7">
      <div className="flex-1 mb-6 md:mb-0">
        <h1 className="text-3xl font-bold text-gray-800">HOTEL ZANTE SINCE 1992</h1>
        <p className="text-xl text-gray-400 mb-4">High quality accommodation services</p>
        <p className="text-gray-400 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.
        </p>
        <button className="bg-white text-yellow-500 border border-yellow-500 px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 hover:text-white transition">
          MORE DETAILS
        </button>
      </div>
      <div className="flex-1 relative ">
        <img
          src="https://i.ibb.co/prqX3Pc/pexels-joshsorenson-1714430.jpg"
          alt="Hotel Zante"
          className="top-10 left-0 w-96 h-full object-cover rounded-lg shadow-2xl"
        />
        <img
        
          src="https://i.ibb.co/DVPBwL1/pexels-jonathanborba-3144580.jpg" // Replace with your second image URL
          alt="Hotel Zante"
          className="absolute top-20 left-20 w-96 h-full object-cover rounded-lg shadow-2xl opacity-95"
        />
      </div>
    </div>
  );
};

export default HotelBanner;
