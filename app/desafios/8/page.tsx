"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Desafio8 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageHistory, setImageHistory] = useState<string[]>([]);

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    try {
      const newImage = await getImage();
      setImageHistory((prevHistory) => [...prevHistory, newImage]);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    if (currentImageIndex + 1 < imageHistory.length) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    } else {
      fetchImage();
    }
  };

  return (
    <div className="flex flex-col items-center mt-12">
      <div className="bg-blue-300 flex justify-center">
        {imageHistory[currentImageIndex] && (
          <Image
            src={imageHistory[currentImageIndex]}
            alt="random image"
            width={250}
            height={100}
          />
        )}
      </div>
      <div className="flex gap-2 mt-4">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Desafio8;

const getImage = async (): Promise<string> => {
  return "https://picsum.photos/250/100?random=" + Date.now();
};
