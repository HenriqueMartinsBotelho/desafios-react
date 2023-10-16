"use client";

import { useState, useRef } from "react";

const Desafio2 = () => {
  const [value, setValue] = useState("");
  const inputValueRef = useRef("");

  console.log("Renderizou");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputValueRef.current = e.target.value;
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setValue(inputValueRef.current);
    }
  };

  return (
    <div className="flex justify-center items-center m-auto mt-20 flex-col max-w-[30%]">
      <input
        className="text-green-600 font-bold p-4"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <div className="mt-4">{value}</div>
    </div>
  );
};

export default Desafio2;
