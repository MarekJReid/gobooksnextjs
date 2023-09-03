import React from "react";
import Countdown from "../CountdownTimer/CountdownTimer";
import ScrollDownButton from "../ScrollDownButton/ScrolLDownButton";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image section */}
      <div
        className="absolute top-0 left-0 bg-cover bg-center h-full w-full"
        style={{
          backgroundImage: "url('./herohero1.jpg')",
        }}
      ></div>

      {/* Information block */}
      <div
        className="relative md:absolute top-0 right-0 h-full md:w-[40vw] flex items-center justify-center p-8 md:p-16 bg-opacity-10"
        style={{
          background:
            "linear-gradient(to top, rgba(3, 67, 91, 0.9), rgba(4, 106, 138, 0.9))",
        }}
      >
        <div className=" rounded-lg  text-white  text-center p-4 md:p-8">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Go Books Online
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 mt-16">
            Classroom based, community education for all levels
          </h2>
          <h2 className="text-2xl md:text-3xl font-semibold">
            ALL COURSES NOW LIVE!
          </h2>
          {/* <Countdown /> */}
          <ScrollDownButton />
        </div>
      </div>
    </div>
  );
};

export default Hero;
