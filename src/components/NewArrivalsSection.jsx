import { Link } from "react-router-dom";
import Button from "./Button";
import NewArrivals from "../assets/images/new-collection.jpg";

const NewArrivalsSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex-1 max-w-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          New Arrivals
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Fresh looks for a new season. Explore our latest drop of must-have
          styles and elevate your everyday fashion. Shop the collection now and
          find the perfect addition to your style.
        </p>
        <Link to="/products">
          <Button innerText="Shop Now" />
        </Link>
      </div>

      <div className="flex-1 w-full">
        <div className="relative w-full h-80 sm:h-96 group overflow-hidden rounded-lg">
          <img
            className="w-full h-100 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
            src={NewArrivals}
            alt="New Arrivals"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <span className="text-white text-2xl font-semibold">
              Check Out the Collection
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
