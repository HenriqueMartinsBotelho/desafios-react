"use client";

import React, { useState, useEffect } from "react";

const ProgressBar = ({ initialPercent = 20 }) => {
  const [percent, setPercent] = useState(initialPercent);

  useEffect(() => {
    if (percent >= 100) return;

    const timer = setInterval(() => {
      setPercent((prevPercent) => prevPercent + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [percent]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          margin: "32px auto",
          width: "80%",
          height: "20px",
          borderRadius: "5px",
          backgroundColor: "#192434",
        }}
      >
        <div
          style={{
            background: "#a7dd38",
            width: `${Math.min(percent, 100)}%`,
            height: "20px",
            backgroundColor: "green",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
