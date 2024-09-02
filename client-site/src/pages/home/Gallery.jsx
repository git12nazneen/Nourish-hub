
import React from "react";

const Gallery = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-yellow-500 dark:text-gray-200 mb-2">
        GALLERY
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        Hotel image gallery
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2 row-span-2 relative group">
          <img
            src="https://i.ibb.co/9w2m8Kq/pexels-curt-hubner-39375428-20806552.jpg"
            alt="Gallery Image 1"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
            <p className="text-white text-lg font-semibold">Beautiful View</p>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://i.ibb.co/p4J6Qpx/pexels-albeg-27023452.jpg"
            alt="Gallery Image 2"
            className="w-full h-[200px] sm:h-[250px] md:h-[250px] object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
            <p className="text-white text-lg font-semibold">Cozy Room</p>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://i.ibb.co/x3BXBNk/pexels-nam-quan-nguy-n-459228913-20937742.jpg"
            alt="Gallery Image 3"
            className="w-full h-[200px] sm:h-[250px] md:h-[250px] object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
            <p className="text-white text-lg font-semibold">Luxurious Bed</p>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://i.ibb.co/98WRw0d/pexels-muhammad-tanvir-713696178-18246428.jpg"
            alt="Gallery Image 4"
            className="w-full h-[200px] sm:h-[250px] md:h-[250px] object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
            <p className="text-white text-lg font-semibold">Serene Pool</p>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 relative group">
          <img
            src="https://i.ibb.co/gzgdCm4/pexels-eky-rima-nurya-ganda-174710171-15267020.jpg"
            alt="Gallery Image 5"
            className="w-full h-[200px] sm:h-[250px] md:h-full object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
            <p className="text-white text-lg font-semibold">Tropical Paradise</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

