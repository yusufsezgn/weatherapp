/* eslint-disable @next/next/no-img-element */
import { FaLocationArrow, FaMoon, FaRegMoon, FaSun } from "react-icons/fa";
import { FiSunrise, FiSunset } from "react-icons/fi";

const Left = ({ current, astronomy }) => {
  return (
    <div className="w-full h-full rounded-tl-3xl rounded-bl-3xl z-50 py-8 px-6">
      <div className="w-full xl:h-[10%] h-2/5 flex items-center justify-between">
        <div className="flex flex-col items-start justify-center gap-2">
          <div className="flex items-center gap-2">
            <FaLocationArrow className="w-4 h-4 text-white z-50" />
            <h5 className="text-xl font-medium text-white">
              {current?.location.name}, {current?.location.country}
            </h5>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-300">
              {current?.location.localtime}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center gap-2">
          <div className="flex items-center gap-2">
            <FiSunrise className="w-4 h-4 text-gray-300" />
            <span className="text-sm text-gray-300 font-medium">
              {astronomy?.astronomy?.astro?.sunrise}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FiSunset className="w-4 h-4 text-gray-300" />
            <span className="text-sm font-medium text-gray-300">
              {astronomy?.astronomy?.astro?.sunset}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full xl:h-[90%] h-3/5 z-50">
        <div className="w-full xl:h-4/5 h-1/2">
          <div className="w-full h-full flex xl:flex-col flex-row xl:items-center items-center xl:justify-center justify-center xl:gap-0 gap-5 xl:mt-36 mt-8">
            <div className="xl:w-full h-auto flex items-center justify-center xl:ml-10">
              <h1 className="text-white xl:text-8xl text-6xl font-semibold">
                {current?.current.temp_c}°
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 xl:w-full w-auto h-auto mt-1">
              <img
                src={current?.current.condition.icon}
                width={40}
                height={40}
                alt="iconForWeather"
              />
              <span className="text-gray-50 xl:text-2xl text-lg">
                {current?.current.condition.text}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
