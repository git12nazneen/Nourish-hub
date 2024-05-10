import "../home/map.css";
import { SiWelcometothejungle } from "react-icons/si";
import { MdOutlineSafetyDivider } from "react-icons/md";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { SiGitconnected } from "react-icons/si";
const position = [23.789712258935243, 90.39468674368977];

const Map = () => {
  return (
    <div>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">See our local office.</h1>
            <p className="pt-2 pb-4">
              You can talk with us in face to face in our office .
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <div className="my-2 mr-5 font-bold">
                  <SiWelcometothejungle />
                </div>
                <span>Welcome our nourish hub</span>
              </p>
              <p className="flex items-center">
                <div className="my-2 mr-5 font-bold">
                  <MdOutlineSafetyDivider />
                </div>
                <span>Have a safe and comfort zone for you.</span>
              </p>
              <p className="flex items-center">
                <div className="my-2 mr-5 font-bold">
                  <SiGitconnected />
                </div>
                <span>Stay with us.</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
            <MapContainer
              center={position}
              zoom={12}
              scrollWheelZoom={false}
              className="leaflet-map"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Map;
