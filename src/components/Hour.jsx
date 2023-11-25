/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaCloud } from "react-icons/fa";

const Hour = ({ hour, degree, source }) => {
  return (
    <div className="w-16 h-16 bg-white rounded-lg flex flex-col items-center justify-around">
      <div className="w-full h-auto flex items-center justify-center">
        <span className="text-sm font-semibold">{hour}</span>
      </div>
      <div className="w-3/4 h-[1px] bg-custom"></div>
      <div className="flex items-center justify-center gap-2">
        <div>
          <img src={`${source}`} className="w-5 h-5 text-black" alt="" />
          {/* <FaCloud className="w-5 h-5 text-black" /> */}
        </div>
        <div>
          <span className="font-semibold text-sm">{degree}°C</span>
        </div>
      </div>
    </div>
  );
};

export default Hour;
