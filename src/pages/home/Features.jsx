import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleRoom from "../room/SingleRoom";
import SingleFeatures from "./SingleFeatures";

const Features = () => {
   
    const [subCard, setSubCard] = useState()
    // const subcategory = useLoaderData();
    useEffect(()=>{
      fetch("https://server-site-one-xi.vercel.app/room")
      .then(res => res.json())
      .then(data=>{
       setSubCard(data)
      })
    },[])
    console.log(subCard)

  return (
    <div className="overflow-x-hidden">
      <div className=" max-w-6xl mx-auto  my-10">
        <h2 data-aos="fade-left" data-aos-delay="1000" className="text-yellow-600 font-bold text-2xl text-center my-10">Featurs of Room</h2>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3  mx-auto">
          { subCard  && subCard.slice(0,3).map((singleFeatures) => (
            <SingleFeatures
              key={singleFeatures._id}
              singleFeatures={singleFeatures}
            ></SingleFeatures>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
