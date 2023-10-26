"use client";
import { useState } from "react";

type CardCell = {
  row: number;
  col: number;
};

const MemoryGame: React.FC = () => {
  const initialCards = [
    [0, 3, 5, 1],
    [1, 2, 2, 4],
    [4, 3, 5, 0],
  ];

  const [cardsGrid, setCardsGrid] = useState(initialCards);

  const [isCardRevealed, setIsCardRevealed] = useState(
    initialCards.map((row) => row.map(() => false))
  );

  const [lastClickedCard, setLastClickedCard] = useState<
    CardCell | undefined
  >();

  const handleCardClick = (rowIndex: number, colIndex: number) => {
    const currentCardNumber = cardsGrid[rowIndex][colIndex];
    const updatedRevealed = [...isCardRevealed];
    updatedRevealed[rowIndex][colIndex] = true;
    setIsCardRevealed(updatedRevealed);

    if (lastClickedCard) {
      const previousCardNumber =
        cardsGrid[lastClickedCard.row][lastClickedCard.col];

      if (previousCardNumber !== currentCardNumber) {
        setTimeout(() => {
          updatedRevealed[rowIndex][colIndex] = false;
          updatedRevealed[lastClickedCard.row][lastClickedCard.col] = false;
          setIsCardRevealed([...updatedRevealed]);
        }, 1000);
      }
      setLastClickedCard(undefined);
    } else {
      setLastClickedCard({ row: rowIndex, col: colIndex });
    }
  };

  return (
    <div className="bg-blue-300 gap-2 flex flex-col">
      {cardsGrid.map((row, rowIndex) => (
        <div className="flex gap-2" key={rowIndex}>
          {row.map((number, colIndex) => (
            <div
              onClick={() => handleCardClick(rowIndex, colIndex)}
              className="flex bg-red-300 w-10 h-10"
              key={colIndex}
            >
              {isCardRevealed[rowIndex][colIndex] ? number : ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MemoryGame;
