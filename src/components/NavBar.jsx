import searchIcon from "../assets/icons/search-icon.svg";
import SearchBar from "./SearchBar";

const NavBar = ({onToggleSearch}) => {
  const linkClass = "text-gray-700 hover:text-gray-900 cursor-pointer transition-colors duration-200";

    const handleSearch = (query) => {
    console.log("Search query:", query);
  };
  return (
    <nav className="relative">
    <ul className="flex items-center gap-6 px-5">
      <li className={linkClass}>Home</li>
      <li className={linkClass}>Shop</li>
      <li className={linkClass}>Contact</li>
      <li>
        <button onClick={onToggleSearch} className="p-2 rounded-full hover:bg-gray-200 transition" title="Search button">
          <img src={searchIcon} alt="Search button" className="w-5 h-5"/>
        </button>
      </li>
    </ul>

    </nav>
  );
};

export default NavBar;
