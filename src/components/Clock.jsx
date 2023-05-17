import React, { useEffect, useState } from "react";

const Clock = () => {
  const [days, setDays] = useState();
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();
  const [seconds, setSeconds] = useState();
  const countDown = () => {
    const destination = new Date("Oct 10,2023").getTime();
    let interval;

    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);
      if (different < 0) clearInterval(interval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, interval);
  };
  useEffect(() => {
    countDown();
  });
  return (
    <div className="clock__wrapper d-flex align-item-center gap-3">
      <div className="clock__data d-flex align-item-center gap-3">
        <div className="text-center">
          <h1 className="text-white mb-2 fs-3">{days}</h1>
          <h5 className="text-white fs-6">days</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock__data d-flex align-item-center gap-3">
        <div className="text-center">
          <h1 className="text-white mb-2 fs-3">{hours}</h1>
          <h5 className="text-white fs-6">hours</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock__data d-flex align-item-center gap-3">
        <div className="text-center">
          <h1 className="text-white mb-2 fs-3">{minutes}</h1>
          <h5 className="text-white fs-6">minutes</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock__data d-flex align-item-center gap-3">
        <div className="text-center">
          <h1 className="text-white mb-2 fs-3">{seconds}</h1>
          <h5 className="text-white fs-6">seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
