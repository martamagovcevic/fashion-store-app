import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { usePoints } from "../hooks/usePoints";
import { useState } from "react";
import NavBar from "../components/NavBar";

const Loyalty = () => {
  const [points, addPoints] = usePoints();
  const [animate, setAnimate] = useState(false);

  const handleAddPoints = () => {
    addPoints(10);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };

  const nextReward = 100;
  const progress = Math.min((points / nextReward) * 100, 100);

  const rewards = [
    { title: "5% Off", required: 50 },
    { title: "Free Shipping", required: 100 },
    { title: "Gift Voucher", required: 200 },
  ];

  return (
    <>
      <Header />
      <section className="container mx-auto px-4 py-16 flex flex-col items-center gap-8">
        <h2 className="text-3xl font-bold">Your Loyalty Points</h2>
        <p
          className={`text-gray-700 text-2xl transition-transform duration-300 ${
            animate ? "scale-125 text-black font-bold" : ""
          }`}
        >
          {points} points
        </p>
        <div className="w-full max-w-md bg-gray-200 rounded-full h-4 mt-2">
          <div
            className="bg-black h-4 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-gray-600 mt-2">Next reward at {nextReward} points</p>
        
        <Button
          innerText="Earn More Points"
          onClick={handleAddPoints}
          className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded mt-4"
        />

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {rewards.map((reward, idx) => (
            <div
              key={idx}
              className={`w-40 bg-gray-100 p-4 rounded-lg shadow text-center transition-transform duration-300 ${
                points >= reward.required
                  ? "scale-105 border-2 border-black"
                  : ""
              }`}
            >
              <p className="font-semibold">{reward.title}</p>
              <p className="text-gray-600 text-sm">
                Redeem at {reward.required} points
              </p>
            </div>
          ))}
        </div>
      </section>
      <NavBar/>
      <Footer />
    </>
  );
};

export default Loyalty;
