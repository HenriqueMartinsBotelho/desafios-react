import Image from "next/image";
import { useEffect, useState } from "react";

const Desafio8 = () => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const imagem = await getImage();
      setImage(imagem);
      return imagem;
    };
    fetchImage();
  }, []);

  return (
    <div>
      <div className="bg-blue-300 w-screen h-screen">
        <Image src={image} alt="random image" />
      </div>
      <div>
        <div>Prev</div>
        <div>Next</div>
        <div>Play</div>
        <div>Stop</div>
      </div>
    </div>
  );
};

export default Desafio8;

const getImage = async () => {
  try {
    const response = await fetch("https://picsum.photos/250/100");
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
