import searchIcon from "../assets/icons/search-icon.svg";

const NavBar = () => {
  const linkClass = "text-gray-700 hover:text-gray-900 cursor-pointer transition-colors duration-200";

  return (
    <nav>
    <ul className="flex items-center gap-6 px-5">
      <li className={linkClass}>Home</li>
      <li className={linkClass}>Shop</li>
      <li className={linkClass}>Contact</li>
      <li>
        <button className="p-2 rounded hover:bg-gray-300 transition-colors duration-200" title="Search button">
          <img src={searchIcon} alt="Search button" className="w-5 h-5"/>
        </button>
      </li>
    </ul>
    </nav>
  );
};

export default NavBar;
