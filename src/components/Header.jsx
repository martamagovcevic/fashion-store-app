import logoPng from "../assets/icons/logo-icon.webp";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="w-full bg-[#fdf8f4] shadow-md">
      <div className="flex items-center justify-between w-full  px-5 py-4">
        <div className="flex-shrink-0">
          <img src={logoPng} alt="Fashion store logo" className="w-32 h-auto"/>
        </div>

        <NavBar />
      </div>
    </header>
  );
};

export default Header;
