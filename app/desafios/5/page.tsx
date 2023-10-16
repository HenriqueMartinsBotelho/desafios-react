"use client";

import { useState } from "react";

const Desafio5 = () => {
  const [count, setCount] = useState(0);

  const handleCount = (op: string) => {
    setCount((v) => (op === "add" ? v + 1 : v - 1));
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-4">
      <button
        onClick={() => handleCount("add")}
        className="bg-blue-500 py-2 px-6 rounded-xl font-bold"
      >
        +
      </button>
      <button
        onClick={() => handleCount("sub")}
        className="bg-blue-500 py-2 px-6 rounded-xl font-bold"
      >
        -
      </button>
      <div>{count}</div>
    </div>
  );
};

export default Desafio5;
