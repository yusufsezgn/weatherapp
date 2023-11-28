/* eslint-disable @next/next/no-img-element */
import { fillInfo } from "@/lib/utils";
import { useAppContext } from "@/context/Wrapper";
import { Suspense, useEffect, useState } from "react";
import Loading from "./Loading";

const Forecast = () => {
  const [location, setLocation] = useState(null);
  const { infos, setInfos, hourlyInfos, setHourlyInfos, city, setCity } =
    useAppContext();
  const [celActive, setCelActive] = useState(true);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ longitude, latitude });
          fillInfo;
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
    <Suspense fallback={<Loading />}>
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
                  <li>{`Humidity: ${infos?.current.humidity}%`}</li>
                  <li>{`Wind speed: ${infos?.current?.wind_kph} km/h`}</li>
                  <li>{`Precipitation: ${infos?.current?.precip_mm} mm`}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full h-24 flex justify-between mt-6">
            <div className="w-1/2 h-full flex flex-col justify-evenly">
              <span className="text-xl font-bold text-white">
                {`${infos?.location?.name}`}
              </span>
              <div className="w-1/2 h-[2px] bg-custom"></div>
              <span className="text-2xl font-bold text-white">
                {`${infos?.location?.country}`}
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
    </Suspense>
  );
};

export default Forecast;
