"use client";

import { useEffect, useState } from "react";

const Date = () => {
  const [todaysDate, setTodaysDate] = useState();

  const getPresentDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const currentDate = new Date();
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    const date = `${month} ${day}, ${year}`;
    setTodaysDate(date);
  };

  useEffect(() => {
    getPresentDate();
  }, []);
  return <div>{todaysDate}</div>;
};

export default Date;
