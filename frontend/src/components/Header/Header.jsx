import { useContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import { ThemeContext } from "../../constants/Constants";

const Header = () => {
  const [navOpenState, setNavOpenState] = useState(false);

  const theme = useContext(ThemeContext)

  const closeNav = () => {
    setNavOpenState(false);
  };

  return (
    <div className="w-full h-20 flex items-center justify-between px-10">
      <a href="/">
        <img src={theme.theme == 'dark' ? 'bg-teal-logo.png' : 'bg-purple-logo.png'} className="size-16" alt="logo-image" />
      </a>

      <Navbar navOpenState={navOpenState} closeNav={closeNav} />

      <div className="flex gap-2">
          <ThemeToggler />

          <button className={`header-btn ${theme.theme == 'dark' ? 'btn-dark-theme' : 'btn-light-theme'}`}>LOGIN</button>

          <span className="menu-icon material-symbols-rounded" onClick={() => setNavOpenState((prev) => !prev)}>
            {!navOpenState ? "menu" : "close"}
          </span>
      </div>
    </div>
  );
};

export default Header;
