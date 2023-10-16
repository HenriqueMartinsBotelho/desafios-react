"use client";

import { useState } from "react";

const Desafio2 = () => {
  const [value, setValue] = useState("");

  console.log("Renderizou");

  return (
    <div className="flex justify-center items-center m-auto mt-20 flex-col max-w-[30%]">
      <input
        className="text-green-600 font-bold p-4"
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="mt-4">{value}</div>
    </div>
  );
};

export default Desafio2;
