"use client";

import { useEffect, useState } from "react";

const Desafio6: React.FC = () => {
  const [randomuser, setRandomUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await fetchUserData();
      setRandomUser(user);
    };

    fetchUser();
  }, []);

  return (
    <div className="bg-slate-500">
      <pre>{JSON.stringify(randomuser, null, 2)}</pre>
    </div>
  );
};

export default Desafio6;

const fetchUserData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
