import React from "react";
import Countdown from "../CountdownTimer/CountdownTimer";
import ScrollDownButton from "../ScrollDownButton/ScrollDownButton"; // Typo fixed: 'ScrolLDownButton' to 'ScrollDownButton'

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Image section */}
      <div
        className="bg-cover bg-center h-[50vh] md:h-screen md:w-1/2"
        style={{
          backgroundImage: "url('./gobookshero.jpg')",
        }}
      ></div>

      {/* Information block */}
      <div className="bg-green-700 h-[50vh] md:h-screen md:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className=" rounded-lg  text-white  text-center p-4 md:p-8">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Welcome to Go Books!
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Classroom based, community education for all levels
          </h2>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            New courses launching soon!
          </h2>
          <Countdown />
          <ScrollDownButton />
        </div>
      </div>
    </div>
  );
};

export default Hero;
