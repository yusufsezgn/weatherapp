/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  FaCloud,
  FaCloudRain,
  FaMoon,
  FaSun,
  FaTemperatureFull,
  FaTemperatureHigh,
} from "react-icons/fa";
import { BsCloudRainFill, BsDropletFill, BsWind } from "react-icons/bs";

const Right = ({ current, astronomy, hourly }) => {
  return (
    <div className="w-full h-full rounded-3xl bg-primary z-50 p-8">
      <div className="w-full h-auto flex items-start justify-start flex-col">
        <h5 className="text-xl font-semibold text-foreground">Welcome !</h5>
        <span className="font-medium text-foreground text-lg">
          Let`s see what the weather is like in your city.
        </span>
      </div>
      <div className="my-6 w-full h-[274px] bg-white rounded-3xl p-5">
        <div className="w-full h-auto flex items-center justify-start text-lg font-medium text-foreground">
          <h5>Upcoming hours</h5>
        </div>
        <div className="w-full h-52 mt-2 flex items-center justify-start bg-gray-50 rounded-3xl">
          <div className="w-[12.5%] flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-sm font-medium text-gray-700">10.00</span>
              <img
                src={hourly?.forecast.forecastday[0].hour[10].condition.icon}
                alt=""
                className="w-6 h-6"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2 gap-4">
              <span className="font-semibold text-gray-700 text-sm">
                {Math.round(hourly?.forecast.forecastday[0].hour[10].temp_c)}­°
              </span>
              <div className="w-[2px] h-14 bg-foreground/60 rounded-full"></div>
              <span className="font-medium text-gray-600 text-sm">
                {hourly?.forecast.forecastday[0].hour[10].chance_of_rain}%
              </span>
            </div>
          </div>
          <div className="w-[12.5%] flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-sm font-medium text-gray-700">11.00</span>
              <img
                src={hourly?.forecast.forecastday[0].hour[11].condition.icon}
                alt=""
                className="w-6 h-6"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2 gap-4">
              <span className="font-semibold text-gray-700 text-sm">
                {Math.round(hourly?.forecast.forecastday[0].hour[11].temp_c)}­°
              </span>
              <div className="w-[2px] h-14 bg-foreground/60 rounded-full"></div>
              <span className="font-medium text-gray-600 text-sm">
                {hourly?.forecast.forecastday[0].hour[11].chance_of_rain}%
              </span>
            </div>
          </div>
          <div className="w-[12.5%] flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-sm font-medium text-gray-700">12.00</span>
              <img
                src={hourly?.forecast.forecastday[0].hour[12].condition.icon}
                alt=""
                className="w-6 h-6"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2 gap-4">
              <span className="font-semibold text-gray-700 text-sm">
                {Math.round(hourly?.forecast.forecastday[0].hour[12].temp_c)}­°
              </span>
              <div className="w-[2px] h-14 bg-foreground/60 rounded-full"></div>
              <span className="font-medium text-gray-600 text-sm">
                {hourly?.forecast.forecastday[0].hour[12].chance_of_rain}%
              </span>
            </div>
          </div>
          <div className="w-[12.5%] flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-sm font-medium text-gray-700">13.00</span>
              <img
                src={hourly?.forecast.forecastday[0].hour[13].condition.icon}
                alt=""
                className="w-6 h-6"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2 gap-4">
              <span className="font-semibold text-gray-700 text-sm">
                {Math.round(hourly?.forecast.forecastday[0].hour[13].temp_c)}­°
              </span>
              <div className="w-[2px] h-14 bg-foreground/60 rounded-full"></div>
              <span className="font-medium text-gray-600 text-sm">
                {hourly?.forecast.forecastday[0].hour[13].chance_of_rain}%
              </span>
            </div>
          </div>
          <div className="w-[12.5%] flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-sm font-medium text-gray-700">14.00</span>
              <img
                src={hourly?.forecast.forecastday[0].hour[14].condition.icon}
                alt=""
                className="w-6 h-6"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2 gap-4">
              <span className="font-semibold text-gray-700 text-sm">
                {Math.round(hourly?.forecast.forecastday[0].hour[14].temp_c)}­°
              </span>
              <div className="w-[2px] h-14 bg-foreground/60 rounded-full"></div>
              <span className="font-medium text-gray-600 text-sm">
                {hourly?.forecast.forecastday[0].hour[14].chance_of_rain}%
              </span>
            </div>
          </div>
          <div className="w-[12.5%] flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-sm font-medium text-gray-700">15.00</span>
              <img
                src={hourly?.forecast.forecastday[0].hour[15].condition.icon}
                alt=""
                className="w-6 h-6"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2 gap-4">
              <span className="font-semibold text-gray-700 text-sm">
                {Math.round(hourly?.forecast.forecastday[0].hour[15].temp_c)}­°
              </span>
              <div className="w-[2px] h-14 bg-foreground/60 rounded-full"></div>
              <span className="font-medium text-gray-600 text-sm">
                {hourly?.forecast.forecastday[0].hour[15].chance_of_rain}%
              </span>
            </div>
          </div>
          <div className="w-[12.5%] flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-sm font-medium text-gray-700">16.00</span>
              <img
                src={hourly?.forecast.forecastday[0].hour[16].condition.icon}
                alt=""
                className="w-6 h-6"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2 gap-4">
              <span className="font-semibold text-gray-700 text-sm">
                {Math.round(hourly?.forecast.forecastday[0].hour[16].temp_c)}­°
              </span>
              <div className="w-[2px] h-14 bg-foreground/60 rounded-full"></div>
              <span className="font-medium text-gray-600 text-sm">
                {hourly?.forecast.forecastday[0].hour[16].chance_of_rain}%
              </span>
            </div>
          </div>
          <div className="w-[12.5%] flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-sm font-medium text-gray-700">17.00</span>
              <img
                src={hourly?.forecast.forecastday[0].hour[17].condition.icon}
                alt=""
                className="w-6 h-6"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2 gap-4">
              <span className="font-semibold text-gray-700 text-sm">
                {Math.round(hourly?.forecast.forecastday[0].hour[17].temp_c)}­°
              </span>
              <div className="w-[2px] h-14 bg-foreground/60 rounded-full"></div>
              <span className="font-medium text-gray-600 text-sm">
                {hourly?.forecast.forecastday[0].hour[17].chance_of_rain}%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex items-center justify-start">
        <h2 className="font-medium text-foreground text-lg">
          More details of today`s weather
        </h2>
      </div>
      <div className="flex flex-col mt-2 gap-5">
        <div className="w-full h-auto flex items-center justify-between gap-5">
          <div className="w-1/3 h-36 bg-white rounded-3xl px-5 py-4 flex flex-col items-center justify-between">
            <div className="w-full h-auto flex items-center justify-between">
              <h3 className="font-medium text-foreground/90">Humidity</h3>
              <div className="w-7 h-7 rounded-xl flex items-center justify-center bg-secondary">
                <BsDropletFill className="w-4 h-4 text-white/90" />
              </div>
            </div>
            <div className="w-full h-auto flex items-end justify-center gap-2">
              <h2 className="text-xl font-semibold text-foreground">
                {current?.current.humidity}%
              </h2>
              <span className="text-base text-foreground">
                {current?.current.humidity >= 0 &&
                current?.current.humidity <= 25
                  ? "good"
                  : current?.current.humidity > 25 &&
                    current?.current.humidity <= 50
                  ? "normal"
                  : "bad"}
              </span>
            </div>
            <div className="w-full h-auto flex items-center justify-between">
              <div className="flex flex-col items-start justify-center">
                <span className="text-sm text-gray-600">good</span>
                <div className="w-16 h-2 rounded-full relative mt-1 bg-gray-200">
                  <div
                    className={`w-full h-full absolute top-0 left-0 bg-secondary rounded-full`}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-sm text-gray-600">normal</span>
                <div className="w-16 h-2 rounded-full relative mt-1 bg-gray-200">
                  <div className="w-full h-full absolute top-0 left-0 bg-secondary rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-sm text-gray-600">bad</span>
                <div className="w-16 h-2 rounded-full relative mt-1 bg-gray-200">
                  <div className="w-1/5 h-full absolute top-0 left-0 bg-secondary rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 h-36 bg-white rounded-3xl px-5 py-4 flex flex-col">
            <div className="w-full h-auto flex items-center justify-between">
              <h3 className="font-medium text-foreground/90">Wind</h3>
              <div className="w-7 h-7 rounded-xl flex items-center justify-center bg-secondary">
                <BsWind className="w-4 h-4 text-white/90" />
              </div>
            </div>
            <div className="w-full h-auto flex flex-col items-center justify-center">
              <div className="w-full h-auto flex gap-2 items-center my-4">
                <div className="w-1/5 h-auto rounded-full flex flex-col items-start justify-center">
                  <span className="text-sm font-medium text-gray-600">0</span>
                  <div
                    className={`w-full h-2 ${
                      current?.current.wind_mph >= 0 &&
                      current?.current.wind_mph < 5
                        ? "bg-secondary"
                        : "bg-gray-200"
                    } rounded-full`}
                  ></div>
                </div>
                <div className="w-1/5 h-auto rounded-full flex flex-col items-start justify-center">
                  <span className="text-sm font-medium text-gray-600">5</span>
                  <div
                    className={`w-full h-2 ${
                      current?.current.wind_mph >= 5 &&
                      current?.current.wind_mph < 10
                        ? "bg-secondary"
                        : "bg-gray-200"
                    } rounded-full`}
                  ></div>
                </div>
                <div className="w-1/5 h-auto rounded-full flex flex-col items-start justify-center">
                  <span className="text-sm font-medium text-gray-600">10</span>
                  <div
                    className={`w-full h-2 ${
                      current?.current.wind_mph >= 10 &&
                      current?.current.wind_mph < 20
                        ? "bg-secondary"
                        : "bg-gray-200"
                    } rounded-full`}
                  ></div>
                </div>
                <div className="w-1/5 h-auto rounded-full flex flex-col items-start justify-center">
                  <span className="text-sm font-medium text-gray-600">20</span>
                  <div
                    className={`w-full h-2 ${
                      current?.current.wind_mph >= 20 &&
                      current?.current.wind_mph < 30
                        ? "bg-secondary"
                        : "bg-gray-200"
                    } rounded-full`}
                  ></div>
                </div>
                <div className="w-1/5 h-auto rounded-full flex flex-col items-start justify-center">
                  <span className="text-sm font-medium text-gray-600">30</span>
                  <div
                    className={`w-full h-2 ${
                      current?.current.wind_mph >= 20 &&
                      current?.current.wind_mph < 30
                        ? "bg-secondary"
                        : "bg-gray-200"
                    } rounded-full`}
                  ></div>
                </div>
                <div className="w-1/5 h-auto rounded-full flex flex-col items-start justify-center">
                  <span className="text-sm font-medium text-gray-600">40</span>
                  <div
                    className={`w-full h-2 ${
                      current?.current.wind_mph >= 30
                        ? "bg-secondary"
                        : "bg-gray-200"
                    } rounded-full`}
                  ></div>
                </div>
              </div>
              <div className="w-full h-auto flex items-center justify-center">
                <h3 className="text-xl font-semibold text-foreground">
                  {Math.round(current?.current.wind_mph)} km/h
                </h3>
              </div>
            </div>
          </div>
          <div className="w-1/3 h-36 bg-white rounded-3xl px-5 py-4 flex flex-col">
            <div className="w-full h-auto flex items-center justify-between">
              <h3 className="font-medium text-foreground/90">Precipitation</h3>
              <div className="w-7 h-7 rounded-xl flex items-center justify-center bg-secondary">
                <BsCloudRainFill className="w-4 h-4 text-white/90" />
              </div>
            </div>
            <div className="w-full h-auto flex items-center justify-center mt-3">
              <h4 className="text-xl font-semibold text-foreground">
                {current?.current.precip_mm} mm
              </h4>
            </div>
            <div className="w-full h-auto flex mt-2 gap-2">
              <div className="w-1/5 h-auto rounded-full flex flex-col items-start justify-center">
                <span className="text-xs font-medium text-gray-600">0</span>
                <div
                  className={`w-full h-2 bg-secondary rounded-full ${
                    hourly?.forecast.forecastday[0].day.daily_chance_of_rain >=
                    0
                      ? "bg-secondary"
                      : "bg-gray-200"
                  }`}
                ></div>
              </div>
              <div className="w-1/5 h-auto rounded-full flex flex-col items-start justify-center">
                <span className="text-xs font-medium text-gray-600">10</span>
                <div
                  className={`w-full h-2 bg-secondary rounded-full ${
                    hourly?.forecast.forecastday[0].day.daily_chance_of_rain >=
                    10
                      ? "bg-secondary"
                      : "bg-gray-200"
                  }`}
                ></div>
              </div>
              <div className="w-1/5 h-auto rounded-full flex flex-col items-start justify-center">
                <span className="text-xs font-medium text-gray-600">20</span>
                <div
                  className={`w-full h-2 bg-secondary rounded-full ${
                    hourly?.forecast.forecastday[0].day.daily_chance_of_rain >=
                    20
                      ? "bg-secondary"
                      : "bg-gray-200"
                  }`}
                ></div>
              </div>
              <div className="w-1/5 h-auto rounded-full flex flex-col items-start justify-center">
                <span className="text-xs font-medium text-gray-600">30</span>
                <div
                  className={`w-full h-2 bg-secondary rounded-full ${
                    hourly?.forecast.forecastday[0].day.daily_chance_of_rain >=
                    30
                      ? "bg-secondary"
                      : "bg-gray-200"
                  }`}
                ></div>
              </div>
              <div className="w-1/5 h-auto rounded-full flex flex-col items-start justify-center">
                <span className="text-xs font-medium text-gray-600">40</span>
                <div
                  className={`w-full h-2 bg-secondary rounded-full ${
                    hourly?.forecast.forecastday[0].day.daily_chance_of_rain >=
                    40
                      ? "bg-secondary"
                      : "bg-gray-200"
                  }`}
                ></div>
              </div>
              <div className="w-1/5 h-auto rounded-full flex flex-col items-start justify-center">
                <span className="text-xs font-medium text-gray-600">50</span>
                <div
                  className={`w-full h-2 bg-secondary rounded-full ${
                    hourly?.forecast.forecastday[0].day.daily_chance_of_rain >=
                    50
                      ? "bg-secondary"
                      : "bg-gray-200"
                  }`}
                ></div>
              </div>
              <div className="w-1/5 h-auto rounded-full flex flex-col items-start justify-center">
                <span className="text-xs font-medium text-gray-600">60</span>
                <div
                  className={`w-full h-2 bg-gray-200 rounded-full ${
                    hourly?.forecast.forecastday[0].day.daily_chance_of_rain >=
                    60
                      ? "bg-secondary"
                      : "bg-gray-200"
                  }`}
                ></div>
              </div>
              <div className="w-1/5 h-auto rounded-full flex flex-col items-start justify-center">
                <span className="text-xs font-medium text-gray-600">70</span>
                <div
                  className={`w-full h-2 bg-gray-200 rounded-full ${
                    hourly?.forecast.forecastday[0].day.daily_chance_of_rain >=
                    70
                      ? "bg-secondary"
                      : "bg-gray-200"
                  }`}
                ></div>
              </div>
              <div className="w-1/5 h-auto rounded-full flex flex-col items-start justify-center">
                <span className="text-xs font-medium text-gray-600">80</span>
                <div
                  className={`w-full h-2 bg-gray-200 rounded-full ${
                    hourly?.forecast.forecastday[0].day.daily_chance_of_rain >=
                    80
                      ? "bg-secondary"
                      : "bg-gray-200"
                  }`}
                ></div>
              </div>
              <div className="w-1/5 h-auto rounded-full flex flex-col items-start justify-center">
                <span className="text-xs font-medium text-gray-600">90</span>
                <div
                  className={`w-full h-2 bg-gray-200 rounded-full ${
                    hourly?.forecast.forecastday[0].day.daily_chance_of_rain >=
                    90
                      ? "bg-secondary"
                      : "bg-gray-200"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex items-center justify-between gap-5">
          <div className="w-1/3 h-36 bg-white rounded-3xl px-5 py-4 flex flex-col items-center justify-between">
            <div className="w-full h-auto flex items-center justify-between">
              <h3 className="font-medium text-foreground/90">UV index</h3>
              <div className="w-7 h-7 rounded-xl flex items-center justify-center bg-secondary">
                <FaSun className="w-4 h-4 text-white/90" />
              </div>
            </div>
            <div className="w-full h-auto flex items-end justify-center gap-1">
              <h2 className="text-xl font-semibold text-foreground">
                {current?.current.uv}
              </h2>
              <span className="text-base text-foreground">
                {current?.current.uv >= 0 && current?.current.uv <= 3
                  ? "normal"
                  : current?.current.uv >= 3 && current?.current.uv <= 5
                  ? "medium"
                  : current?.current.uv >= 6 && current?.current.uv <= 7
                  ? "high"
                  : current?.current.uv >= 8 && current?.current.uv <= 10
                  ? "very high"
                  : ""}
              </span>
            </div>
            <div className="w-full h-auto flex items-center justify-between gap-2">
              <div className="w-1/5 h-auto rounded-full flex flex-col items-start justify-center">
                <span className="text-sm font-medium text-gray-600">0-2</span>
                <div
                  className={`w-full h-2 bg-secondary rounded-full ${
                    current?.current.uv >= 0 && current?.current.uv <= 2
                      ? "bg-secondary"
                      : "bg-gray-200"
                  }`}
                ></div>
              </div>
              <div className="w-1/5 h-auto rounded-full flex flex-col items-start justify-center">
                <span className="text-sm font-medium text-gray-600">3-5</span>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className={`bg-secondary w-full h-full rounded-full ${
                      current?.current.uv >= 3 && current?.current.uv <= 5
                        ? "bg-secondary"
                        : "bg-gray-200"
                    }`}
                  ></div>
                </div>
              </div>
              <div className="w-1/5 h-auto rounded-full flex flex-col items-start justify-center">
                <span className="text-sm font-medium text-gray-600">6-7</span>
                <div
                  className={`w-full h-2 bg-gray-200 rounded-full ${
                    current?.current.uv >= 6 && current?.current.uv <= 7
                      ? "bg-secondary"
                      : "bg-gray-200"
                  }`}
                ></div>
              </div>
              <div className="w-1/5 h-auto rounded-full flex flex-col items-start justify-center">
                <span className="text-sm font-medium text-gray-600">8-10</span>
                <div
                  className={`w-full h-2 bg-gray-200 rounded-full ${
                    current?.current.uv >= 8 && current?.current.uv <= 10
                      ? "bg-secondary"
                      : "bg-gray-200"
                  }`}
                ></div>
              </div>
              <div className="w-1/5 h-auto rounded-full flex flex-col items-start justify-center">
                <span className="text-sm font-medium text-gray-600">11+</span>
                <div
                  className={`w-full h-2 bg-gray-200 rounded-full ${
                    current?.current.uv >= 11 ? "bg-secondary" : "bg-gray-200"
                  }`}
                ></div>
              </div>
            </div>
          </div>
          <div className="w-1/3 h-36 bg-white rounded-3xl px-5 py-4 flex flex-col items-center justify-between">
            <div className="w-full h-auto flex items-center justify-between">
              <h3 className="font-medium text-foreground/90">Feels like</h3>
              <div className="w-7 h-7 rounded-xl flex items-center justify-center bg-secondary">
                <FaTemperatureHigh className="w-4 h-4 text-white/90" />
              </div>
            </div>
            <div className="w-full h-auto flex items-center justify-center">
              <h3 className="text-xl font-semibold text-foreground">
                {current?.current.feelslike_c}°
              </h3>
            </div>
            <div className="w-full h-auto flex flex-col items-center justify-center gap-1">
              <div className="w-full h-auto flex items-center justify-between">
                <span className="text-gray-600 font-medium text-sm">0°</span>
                <span className="text-gray-600 font-medium text-sm">25°</span>
                <span className="text-gray-600 font-medium text-sm">50°</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full relative">
                <div
                  className={`absolute top-0 left-0 bg-secondary h-full ${
                    current?.current.feelslike_c >= 0 &&
                    current?.current.feelslike_c <= 18
                      ? "w-1/4"
                      : current?.current.feelslike_c > 18 &&
                        current?.current.feelslike_c <= 75
                      ? "w-3/4"
                      : "w-full"
                  } rounded-full`}
                ></div>
              </div>
            </div>
          </div>
          <div className="w-1/3 h-36 bg-white rounded-3xl px-5 py-4 flex flex-col items-center justify-between">
            <div className="w-full h-auto flex items-center justify-between">
              <h3 className="font-medium text-foreground/90">Chance of rain</h3>
              <div className="w-7 h-7 rounded-xl flex items-center justify-center bg-secondary">
                <FaCloudRain className="w-4 h-4 text-white/90" />
              </div>
            </div>
            <div className="w-full h-auto flex items-center justify-center">
              <h3 className="text-xl font-semibold text-foreground">
                {hourly?.forecast.forecastday[0].day.daily_chance_of_rain}%
              </h3>
            </div>
            <div className="w-full h-auto flex flex-col items-center justify-center gap-1">
              <div className="w-full h-auto flex items-center justify-between">
                <span className="text-gray-600 font-medium text-sm">0%</span>
                <span className="text-gray-600 font-medium text-sm">25%</span>
                <span className="text-gray-600 font-medium text-sm">50%</span>
                <span className="text-gray-600 font-medium text-sm">75%</span>
                <span className="text-gray-600 font-medium text-sm">100%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full relative">
                <div
                  className={`absolute top-0 left-0 bg-secondary h-full ${
                    current?.current.feelslike_c >= 0 &&
                    current?.current.feelslike_c <= 25
                      ? "w-1/4"
                      : current?.current.feelslike_c > 25 &&
                        current?.current.feelslike_c <= 50
                      ? "w-1/2"
                      : current?.current.feelslike_c > 50 &&
                        current?.current.feelslike_c <= 75
                      ? "w-3/4"
                      : "w-full"
                  } rounded-full`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
