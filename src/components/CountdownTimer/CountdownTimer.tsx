import React, { useState, useEffect } from "react";

const Countdown: React.FC = () => {
  const targetDate = new Date("September 1, 2023 00:00:00").getTime();
  const [remainingTime, setRemainingTime] = useState(
    targetDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      setRemainingTime(targetDate - currentTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    <div className="text-center">
      <div className="flex justify-center mt-8 flex-wrap">
        <div className="text-4xl mx-2">
          <div>{days}</div>
          <div>Days</div>
        </div>
        <div className="text-4xl mx-6">
          <div>{hours}</div>
          <div>Hours</div>
        </div>
        <div className="text-4xl mx-6">
          <div>{minutes}</div>
          <div>Minutes</div>
        </div>
        {/* <div className="text-4xl mx-6">
          <div>{seconds}</div>
          <div>Seconds</div>
        </div> */}
      </div>
    </div>
  );
};

export default Countdown;
