import { useContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import { ThemeContext } from "../../constants/Constants";
import Login from "../Login/Login";

const Header = () => {
  const [navOpenState, setNavOpenState] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const theme = useContext(ThemeContext)

  const closeNav = () => {
    setNavOpenState(false);
  };

  const closeLoginForm = () => {
    setShowLoginForm(false);
  };

  const handleLogin = () => {
    setShowLoginForm(true);
  }

  return (
    <div className="w-full h-20 flex items-center justify-between px-10">

      {
        showLoginForm ?
        <Login closeLoginForm={closeLoginForm} />
        : null
      }

      <a href="/">
        <img src={theme.theme == 'dark' ? 'bg-teal-logo.png' : 'bg-purple-logo.png'} className="size-16" alt="logo-image" />
      </a>

      <Navbar navOpenState={navOpenState} closeNav={closeNav} />

      <div className="flex gap-2">
          <ThemeToggler />

          <button className={`header-btn ${theme.theme == 'dark' ? 'btn-dark-theme' : 'btn-light-theme'}`} onClick={handleLogin}>LOGIN</button>

          <span className={`menu-icon material-symbols-rounded ${theme.theme == 'dark' ? 'bg-teal-500/100 text-black' : 'bg-indigo-500/100 text-white'}`} onClick={() => setNavOpenState((prev) => !prev)}>
            {!navOpenState ? "menu" : "close"}
          </span>
      </div>
    </div>
  );
};

export default Header;
