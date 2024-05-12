import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import Review from './Review';
import Team from './Team';
import Map from './Map';
import Subscribe from './Subscribe';
import Features from './Features';
import UserReview from './UserReview';

const Home = () => {
    const [modalIsOpen, setModalIsOpen] = useState(true);

    useEffect(() => {
        
        const timer = setTimeout(() => {
            setModalIsOpen(false);
        }, 3000);

      
        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
           <Hero></Hero>
           <Features></Features>
           <Subscribe></Subscribe>
            <UserReview></UserReview>
            <Map></Map>
           {modalIsOpen && (
               <div className="modal" role="dialog" id="my_modal_8">
                   <div className="modal-box">
                       <h3 className="font-bold text-lg">Hello!</h3>
                       <p className="py-4">This modal works with anchor links</p>
                       <div className="modal-action">
                           <a href="#" className="btn">Yay!</a>
                       </div>
                   </div>
               </div>
           )}
        </div>
    );
};

export default Home;