import {
  FaCloud,
  FaDroplet,
  FaTemperatureEmpty,
  FaWind,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const Data = ({ data }) => {
  return (
    <div>
      {data && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="md:drop-shadow-2xl transition ease-in-out"
        >
          <div className="flex items-center justify-center text-gray-600">
            <FaCloud className="text-[8rem]" />
          </div>
          <div className="current_temp font-bold text-4xl tracking-wide flex justify-center items-center my-8 text-white">
            {" "}
            {Math.floor(data.main.temp - 273.15)} &deg; C{" "}
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="wind bg-white w-[100px] flex flex-col py-2 items-center justify-center">
              <h2>Wind</h2>
              <p className="my-2">{data.wind.speed} m/s</p>
              <span className="text-xl">
                <FaWind />
              </span>
            </div>
            <div className="humidity bg-white w-[100px] flex flex-col py-2 items-center justify-center">
              <h2>Humidity</h2>
              <p className="my-2">{data.main.humidity} %</p>
              <span className="text-xl">
                <FaDroplet />
              </span>
            </div>
            <div className="feeling bg-white w-[100px] flex flex-col py-2 items-center justify-center">
              <h2>Feels Like</h2>
              <p className="my-2">
                {Math.floor(data.main.feels_like - 273.15)} &deg; C
              </p>
              <span className="text-xl">
                <FaTemperatureEmpty />
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Data;
