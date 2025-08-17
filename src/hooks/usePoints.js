import { useState, useEffect } from "react";

export const usePoints = () => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("points");
    if (saved) setPoints(Number(saved));
  }, []);

  const addPoints = (amount) => {
    const newPoints = points + amount;
    setPoints(newPoints);
    localStorage.setItem("points", newPoints);
  };

  return [points, addPoints];
};
