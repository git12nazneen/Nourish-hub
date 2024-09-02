import "../home/map.css";
import { SiWelcometothejungle } from "react-icons/si";
import { MdOutlineSafetyDivider } from "react-icons/md";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { SiGitconnected } from "react-icons/si";
const position = [23.789712258935243, 90.39468674368977];

const Map = () => {
  return (
    <div>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-900 my-10">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
  <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Visit Our Local Office</h1>
  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
    Come meet us in person at our office. We’re here to assist you!
  </p>
  <div className="space-y-6">
    <div className="flex items-center space-x-4">
      <SiWelcometothejungle className="text-3xl text-yellow-500 dark:text-yellow-400" />
      <span className="text-xl font-medium text-gray-700 dark:text-gray-300 transition-transform transform hover:translate-x-1">
        Welcome to our Nourish Hub
      </span>
    </div>
    <div className="flex items-center space-x-4">
      <MdOutlineSafetyDivider className="text-3xl text-yellow-500 dark:text-yellow-400" />
      <span className="text-xl font-medium text-gray-700 dark:text-gray-300 transition-transform transform hover:translate-x-1">
        Enjoy a safe and comfortable space
      </span>
    </div>
    <div className="flex items-center space-x-4">
      <SiGitconnected className="text-3xl text-yellow-500 dark:text-yellow-400" />
      <span className="text-xl font-medium text-gray-700 dark:text-gray-300 transition-transform transform hover:translate-x-1">
        Stay connected with us
      </span>
    </div>
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
