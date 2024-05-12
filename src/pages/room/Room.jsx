import { useLoaderData } from "react-router-dom";
import SingleRoom from "./SingleRoom";
import { useState } from "react";

const Room = () => {
  const room = useLoaderData();
  console.log(room);
  const [selectedPrice, setSelectedPrice] = useState('')
  const [filterRooms, setFilterRooms] = useState([])

    const handleFilterSubmit =(e)=>{
        e.preventDefault();

    }


  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
          <div className="container flex justify-between h-16 mx-auto">
            <div className="text-right">
              <h1 className="mt-5 font-bold text-3xl text-yellow-600">Hungary Best hotel rooms.</h1>
            </div>
            <div className="text-left mt-5">
              <form onSubmit={handleFilterSubmit}>
                <label htmlFor="price"> Price:</label>
                <select className="bg-yellow-600 text-white py-2 px-4 rounded-xl ml-2 mr-2"
                  id="price"
                  //   value={selectedPrice}
                  //   onChange={(e) => setSelectedPrice(e.target.value)}
                >
                  <option value="">Select Price</option>
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="300">300</option>
                 
                </select>
                <button type="submit">Filter</button>
              </form>
            </div>
          </div>
        </header>
      </div>
      <div className=" max-w-6xl mx-auto  my-10">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3  mx-auto">
          {room.map((singleRoom) => (
            <SingleRoom
              key={singleRoom._id}
              singleRoom={singleRoom}
            ></SingleRoom>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Room;
