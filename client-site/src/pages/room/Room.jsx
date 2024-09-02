

import { useLoaderData } from "react-router-dom";
import SingleRoom from "./SingleRoom";
import { useState, useEffect } from "react";
import Pagetitle from "../../components/Pagetitle";
import PostReview from "./PostReview";
import MyroomHead from "../../components/MyroomHead";

const Room = () => {
  const room = useLoaderData();
  console.log(room)
  const [selectedPrice, setSelectedPrice] = useState("");
  const [filterRooms, setFilterRooms] = useState([]);

  useEffect(() => {
    const fetchFilteredRooms = async () => {
      try {
        const response = await fetch(`https://server-site-one-xi.vercel.app/rooms-filter?maxPrice=${selectedPrice}`);
        const data = await response.json();
        setFilterRooms(data);
      } catch (error) {
        console.error("Error fetching filtered rooms:", error);
      }
    };
  
    if (selectedPrice !== "") {
      fetchFilteredRooms();
    } else {
      setFilterRooms(room);
    }
  }, [selectedPrice, room]);
 


  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
    
  };
  console.log(selectedPrice)
  return (
    <div>
       <MyroomHead></MyroomHead>
      <div className="max-w-6xl mx-auto">
        <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
          <div className="container flex justify-between h-16 mx-auto">
            <div className="text-right">
              <h1 className="mt-5 font-bold text-sm lg:text-3xl text-yellow-600">
                Hungary Best hotel rooms.
              </h1>
            </div>
            <div className="text-left mt-5">
              <label htmlFor="price"> Price:</label>
              <select
                className="bg-yellow-600 text-white py-2 px-4 rounded-xl ml-2 mr-2"
                id="price"
                value={selectedPrice}
                onChange={handlePriceChange}
              >
                <option value="">Select Price</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
              </select>
            </div>
          </div>
        </header>
      </div>
      <div className="max-w-6xl mx-auto my-10 ">
        <Pagetitle title="Rooms"></Pagetitle>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mx-auto">
          {filterRooms.length > 0 ? (
            filterRooms.map((singleRoom) => (
              <SingleRoom
                key={singleRoom._id}
                singleRoom={singleRoom}
              
              ></SingleRoom>
            ))
          ) : (
            <p>No rooms found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Room;
