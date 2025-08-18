import { useState } from "react";
import logoPng from "../assets/icons/logo-icon.webp";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const Header = ({ onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-pink-50 via-white to-pink-50 relative shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex-shrink-0">
          <img src={logoPng} alt="Fashion store logo" className="w-40 h-auto" />
        </div>

        <NavBar onToggleSearch={() => setShowSearch(!showSearch)} />

        <div
          className={`absolute top-30 right-0 w-full md:w-1/3 bg-white p-4 rounded-b-lg shadow-lg transition-all duration-300 ease-in-out z-50 ${
            showSearch
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
        >
          <SearchBar onSearch={onSearch} />
        </div>
      </div>

      <div className="border-b border-gray-200"></div>
    </header>
  );
};

export default Header;
