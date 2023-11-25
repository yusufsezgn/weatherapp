/* eslint-disable @next/next/no-img-element */
import { FaCloud } from "react-icons/fa";
import Hour from "./Hour";
import { useAppContext } from "@/context/Wrapper";
import { useEffect, useState } from "react";
import axios from "axios";

const Current = () => {
  const [location, setLocation] = useState(null);
  const { infos, setInfos, hourlyInfos, setHourlyInfos, city, setCity } =
    useAppContext();
  const [celActive, setCelActive] = useState(true);

  async function fillInfo() {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: `${location?.latitude},${location?.longitude}` },
      headers: {
        "X-RapidAPI-Key": "9452a09c0bmsh844d338fef42946p1419c1jsnb844a2c88c9d",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setInfos(response?.data);
      setCity(response?.data?.location.name);
    } catch (error) {
      console.error(error);
    }
  }

  async function hourly() {
    try {
      const response = await axios.request(options);
      setHourlyInfos(response?.data.hourly?.forecast?.forecastday[0]?.hour);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ longitude, latitude });
          fillInfo();
        },
        (error) => {
          alert("Location information could not be obtained");
        }
      );
    } else {
      alert("Your browser does not support location information");
    }
  }, []);

  return (
    <div className="container shadow-xl mx-auto w-[560px] h-[420px] rounded-3xl slide-in-top">
      <div className="w-full h-full shadow-lg bg-black rounded-3xl flex flex-col px-7 py-4 justify-between">
        <div className="w-full h-20 flex items-center justify-between">
          <div className="w-full h-full flex flex-row gap-3 items-center justify-between">
            <div className="w-3/4 h-auto flex items-center gap-3">
              <div>
                <img
                  src={`${infos?.current?.condition?.icon}`}
                  alt=""
                  className="w-16 h-16"
                />
                {/* <FaCloud className="w-14 h-14 text-white" /> */}
              </div>
              <div>
                <span
                  className="text-4xl text-white font-bold cursor-pointer"
                  onClick={() => {
                    setCelActive(celActive === true ? false : true);
                  }}
                >
                  {celActive === true
                    ? `${Math.ceil(infos?.current?.temp_c)}°C`
                    : `${Math.ceil(infos?.current?.temp_f)}°F`}
                </span>
              </div>
            </div>
            <div className="w-1/2 h-auto flex items-center justify-end">
              <span className="font-semibold text-lg text-white">
                {infos?.current?.condition?.text}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-[2px] mt-2">
          <div className="w-full h-full bg-custom rounded-full"></div>
        </div>
        <div className="w-full h-auto mt-6 flex flex-col items-start justify-normal gap-4">
          <div className="w-full h-auto flex items-center gap-3">
            <div className="w-full h-full flex flex-col gap-2 items-start justify-start">
              <ul className="list-none font-medium text-white text-base text-justify flex flex-col gap-2">
                <li>
                  {!infos?.current?.humidity === true
                    ? "Undefined"
                    : `Humidity: ${infos?.current.humidity}%`}
                </li>
                <li>
                  {!infos?.current?.humidity === true
                    ? "Undefined"
                    : `Wind speed: ${infos?.current?.wind_kph} km/h`}
                </li>
                <li>
                  {!infos?.current?.humidity === true
                    ? "Undefined"
                    : `Precipitation: ${infos?.current?.precip_mm} mm`}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-24 flex justify-between mt-6">
          <div className="w-1/2 h-full flex flex-col justify-evenly">
            <span className="text-xl font-bold text-white">
              {!infos?.location?.name === true
                ? "Undefined"
                : `${infos?.location?.name}`}
            </span>
            <div className="w-1/2 h-[2px] bg-custom"></div>
            <span className="text-2xl font-bold text-white">
              {!infos?.location?.country === true
                ? "Undefined"
                : `${infos?.location?.country}`}
            </span>
          </div>
          <div className="w-1/2 h-full flex items-center justify-end">
            <span className="font-medium text-base text-white">
              {infos?.location?.localtime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
