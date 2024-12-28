import React, { useEffect, useState } from "react";

import { useTranslations } from "next-intl";
import { StyledTime } from "./styled";

function Timer({ targetDate }) {
  const t = useTranslations("time");

  const format = (value = 0) => {
    return `0${value}`.slice(-2);
  };

  const calculateTimeLeft = (date) => {
    const now = new Date();
    const difference = new Date(date) - now;

    if (difference <= 0) {
      return null; // Countdown is over
    }

    return {
      days: format(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: format(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ),
      minutes: format(
        Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      ),
      seconds: format(Math.floor((difference % (1000 * 60)) / 1000)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [targetDate]);

  const LIST = [
    { unit: t("d"), value: timeLeft?.days },
    { unit: t("h"), value: timeLeft?.hours },
    { unit: t("m"), value: timeLeft?.minutes },
    { unit: t("s"), value: timeLeft?.seconds },
  ];

  return (
    <StyledTime>
      {LIST.map((item, index) => {
        return (
          <div key={index} className={"group"}>
            <div className={"number"}>{item.value}</div>
            <div className={"unit"}>{item.unit}</div>
          </div>
        );
      })}
    </StyledTime>
  );
}

export default Timer;
