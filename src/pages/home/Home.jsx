import React from 'react';
import Hero from './Hero';
import Review from './Review';
import Team from './Team';
import Map from './Map';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           {/* <Team></Team> */}
           <Review></Review>
           <Map></Map>
        </div>
    );
};

export default Home;