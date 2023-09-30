import { format } from "date-fns";
import { useState, useEffect } from "react";

const CurrentDate = () => {
  const [time, setTime] = useState(format(new Date(), "hh:mm:ss a"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(format(new Date(), "hh:mm:ss a"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentDate = new Date();
  const today = format(currentDate, "MMM dd, yyyy");

  const currentDay = format(currentDate, "eeee");

  return (
    <div className="date w-full my-4 flex flex-col items-center justify-center">
      <p className="text-white mt-2 text-3xl uppercase tracking-wide">{currentDay}</p>
      <p className="text-white mt-2 text-xl">{today}</p>
      <p className="text-white mt-2">{time}</p>
    </div>
  );
};

export default CurrentDate;
