import React from 'react';
import { Link } from 'react-router-dom';
import error from '../assets/pngwing.com1.png'

const Error = () => {
    return (
        <div>
          <section className="flex items-center h-full sm:p-16 bg-purple-100 text-gray-900">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
              <img src={error} alt="" />
              <p className="text-3xl">
                Looks like our services are currently offline
              </p>
    
              <Link to="/" className="font-extrabold text-2xl">
                Go back to home
              </Link>
            </div>
          </section>
        </div>
      );
};

export default Error;