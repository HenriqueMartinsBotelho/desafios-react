"use client";

import { useState } from "react";

type Checkbox = {
  id: number;
  label: string;
  checked: boolean;
};

const Desafio3 = () => {
  const [checkboxes, setCheckboxes] = useState<Checkbox[]>([
    { id: 1, label: "Guimarães Rosa", checked: false },
    { id: 2, label: "Machado de Assis", checked: false },
    { id: 3, label: "Clarice Lispector", checked: false },
  ]);

  const selectCheckbox = (id: number) => {
    setCheckboxes((prev) =>
      prev.map((checkbox) => ({
        ...checkbox,
        checked: checkbox.id === id ? !checkbox.checked : checkbox.checked,
      }))
    );
  };

  const selectAllCheckbox = () => {
    setCheckboxes((prev) =>
      prev.map((checkbox) => ({ ...checkbox, checked: true }))
    );
  };

  return (
    <div className="flex flex-col items-center text-white justify-center mt-4">
      {checkboxes.map((checkbox, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={checkbox.checked}
            onChange={() => selectCheckbox(checkbox.id)}
          />
          {checkbox.label}
        </div>
      ))}
      <button
        className="bg-blue-600 p-2 mt-4"
        onClick={() => selectAllCheckbox()}
      >
        Selecionar todos
      </button>
    </div>
  );
};

export default Desafio3;
