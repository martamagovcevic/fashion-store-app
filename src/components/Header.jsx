import { useState } from "react";
import logoPng from "../assets/icons/logo-icon.webp";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const Header = ({ onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="w-full bg-[#fdf8f4] relative">
      <div className="flex items-center justify-between w-full px-5 py-4">
        <div className="flex-shrink-0">
          <img src={logoPng} alt="Fashion store logo" className="w-32 h-auto" />
        </div>

        <NavBar onToggleSearch={() => setShowSearch(!showSearch)} />
      </div>

      <div
        className={`absolute top-full right-0 w-full md:w-1/3 bg-[#fdf8f4] p-4 transition-transform duration-300 ${
          showSearch ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;
