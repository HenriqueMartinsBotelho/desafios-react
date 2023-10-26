"use client";

import { useState } from "react";

const Desafio4: React.FC = () => {
  const [coordinates, setCoordinates] = useState<Array<[number, number]>>([]);
  const [pointerPosition, setPointerPosition] = useState(0);

  const handleScreenClick = (
    pos: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const sub = coordinates.slice(0, pointerPosition);
    setPointerPosition((p) => p + 1);
    setCoordinates(() => [...sub, [pos.clientX, pos.clientY]]);
  };

  const handleFuture = () => {
    if (pointerPosition < coordinates.length) {
      setPointerPosition((p) => p + 1);
    }
  };

  const handlePast = () => {
    if (pointerPosition > 0) {
      setPointerPosition((p) => p - 1);
    }
  };

  return (
    <>
      <div className="flex justify-center my-10 gap-2 ">
        <button onClick={handlePast} className="w-40 bg-slate-400 rounded-xl">
          👈
        </button>
        <button onClick={handleFuture} className="w-40 bg-slate-400 rounded-xl">
          👉
        </button>
      </div>
      <div
        className="bg-blue-700 h-[40vh] w-[70vw] m-auto"
        onClick={handleScreenClick}
      >
        {coordinates?.slice(0, pointerPosition).map((pos, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              width: "10px",
              height: "10px",
              top: pos[1],
              left: pos[0],
              background: "#9ed048",
              borderRadius: "50%",
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Desafio4;
