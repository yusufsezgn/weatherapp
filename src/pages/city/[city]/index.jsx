import Layout from "@/components/main/Layout";
import axios from "axios";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["500", "600", "700", "800"],
});

const Index = ({ current, astronomy, hourly }) => {
  const router = useRouter();

  return (
    <div
      className={`w-full h-screen flex items-center justify-center ${poppins.className}`}
    >
      <Head>
        <title>{router.query.city}`s Weather Forecast</title>
        <meta
          name="description"
          content="Weather forecast application made by Next.js"
        />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta
          name="keywords"
          content="weather, forecast, city, temperature, humidity, rain, wind"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout current={current} astronomy={astronomy} hourly={hourly} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const cityName = context.params.city;
    const currentOptions = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: cityName },
      headers: {
        "X-RapidAPI-Key": `${process.env.API_KEY}`,
        "X-RapidAPI-Host": `${process.env.API_HOST}`,
      },
    };

    const astronomyOptions = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/astronomy.json",
      params: { q: cityName },
      headers: {
        "X-RapidAPI-Key": `${process.env.API_KEY}`,
        "X-RapidAPI-Host": `${process.env.API_HOST}`,
      },
    };

    const hourlyOptions = {
      method: "GET",
      url: " https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: { q: cityName },
      headers: {
        "X-RapidAPI-Key": `${process.env.API_KEY}`,
        "X-RapidAPI-Host": `${process.env.API_HOST}`,
      },
    };

    const current = await axios.request(currentOptions);
    const astronomy = await axios.request(astronomyOptions);
    const hourly = await axios.request(hourlyOptions);

    const currentInfo = current?.data;
    const astronomyInfo = astronomy?.data;
    const hourlyInfo = hourly?.data;

    return {
      props: {
        current: currentInfo,
        astronomy: astronomyInfo,
        hourly: hourlyInfo,
      },
    };
  } catch (error) {
    return {
      props: {
        error,
      },
    };
  }
};

export default Index;
