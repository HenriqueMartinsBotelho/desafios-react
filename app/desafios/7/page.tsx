"use client";

import { useState } from "react";

const Desafio7: React.FC = () => {
  const [randomColors, setRandomColors] = useState(generateRandomHexColors());
  const [message, setMessage] = useState("");
  const [selectedColorIndex, setSelectedColorIndex] = useState(
    Math.floor(Math.random() * 3)
  );

  const handleButtonClick = (index: number) => {
    if (selectedColorIndex === index) {
      setMessage("Acertou!");
      setRandomColors(generateRandomHexColors());
      setSelectedColorIndex(Math.floor(Math.random() * 3));
    } else {
      setMessage("Errou!");
    }
  };

  return (
    <div className="mt-12 flex flex-col items-center gap-4">
      <div
        style={{ background: randomColors[selectedColorIndex] }}
        className="m-auto w-48 h-48"
      ></div>
      <div className="flex gap-2">
        {randomColors.map((color, index) => (
          <button key={index} onClick={() => handleButtonClick(index)}>
            {color}
          </button>
        ))}
      </div>
      <div>{message}</div>
    </div>
  );
};
export default Desafio7;

const generateRandomHexColors = () => {
  const generateHexColor = () => {
    return (
      "#" +
      Array.from({ length: 3 })
        .map(() =>
          Math.floor(Math.random() * 256)
            .toString(16)
            .padStart(2, "0")
        )
        .join("")
    );
  };

  return Array.from({ length: 3 }).map(() => generateHexColor());
};
