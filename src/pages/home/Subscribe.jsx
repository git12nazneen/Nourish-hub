import React from 'react';
import baner from '../../assets/ban1.jpg'
const Subscribe = () => {
    return (
        <div>
            <div className="w-full dark:bg-gray-400 relative">
                <div style={{backgroundImage: `url(${baner})`, backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundRepeat: "no-repeat", backgroundSize: "cover", position: "relative"}}>
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black opacity-50 text-white"></div>
                    {/* Content */}
                    <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:py-28 relative z-10">
                        <h1 className="text-5xl antialiased font-bold leading-none text-center md:text-6xl text-gray-100">Get Our Updates</h1>
                        <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-100">Find out about events ,  updates, deals,  exclusive offers and other news</p>
                        <div className="flex flex-row">
                            <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                            <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-yellow-600 text-gray-50">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;