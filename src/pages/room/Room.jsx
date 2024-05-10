
import { useLoaderData } from 'react-router-dom';
import SingleRoom from './SingleRoom';


const Room = () => {
    const room = useLoaderData()
    console.log(room)
    return (
        <div>

            <div className=" max-w-6xl mx-auto  mt-10">
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3  mx-auto">
            {
                room.map((singleRoom)=><SingleRoom
                key={singleRoom._id}
                singleRoom={singleRoom}
                ></SingleRoom>)
            }
        </div>
        </div>
        </div>
    );
};

export default Room;