import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaCloud, FaMagnifyingGlass, FaRotate } from "react-icons/fa6";
import Data from "./Data";
import CurrentDate from "./CurrentDate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Search = () => {
  const [city, setCity] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);

    if (city.trim() === "") {
      setIsFetching(false);
      toast.error("Please enter a city name");
      return;
    }


    const apiKey = "68a53cf8e4df0badb70ad6ad6339b3e5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      console.log(weatherData);
    } catch (error) {
      toast.error("City not found");
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full px-10 drop-shadow-lg">
      <form
        onSubmit={handleSubmit}
        className="relative w-full flex items-center"
      >
        <span className="absolute left-4 text-xl">
          <FaCloud />
        </span>
        <input
          type="text"
          className="px-12 py-2 outline-none w-full rounded-2xl"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button
          className="absolute right-4 text-xl"
          type="submit"
          disabled={isFetching}
        >
          {isFetching ? (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <FaRotate />
            </motion.div>
          ) : (
            <FaMagnifyingGlass />
          )}
        </button>
      </form>
      <CurrentDate />
      <Data data={weatherData} />
    </div>
    </>
  );
};

export default Search;
