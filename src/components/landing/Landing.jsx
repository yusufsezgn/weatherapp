import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Landing = () => {
  const [city, setCity] = useState("");

  const router = useRouter();

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full h-full flex flex-col items-center  text-foreground justify-center gap-4">
        <div className="w-full h-auto flex items-center justify-center flex-col">
          <h5 className="text-xl font-medium !text-destructive landingText text-center">
            WELCOME, DISCOVER THE FORECAST
          </h5>
          <h2 className="text-[56px] font-bold landingText text-center">
            WEATHER FORECAST
          </h2>
          <p className="text-lg font-medium landingText text-center">
            Realistic weather forecast
          </p>
        </div>
        <div className="w-full h-auto flex items-center justify-center mt-8 entranceInput">
          <div className="xl:w-1/5 lg:w-2/6 sm:w-1/2 w-3/4 h-auto flex items-center justify-center gap-2">
            <Input
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              placeholder="City name..."
            />
            <Button
              variant="destructive"
              onClick={() => {
                router.push(`/city/${city}`);
              }}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
