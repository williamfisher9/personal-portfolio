import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  const [navOpenState, setNavOpenState] = useState(false);
  const [theme, setTheme] = useState(window.localStorage.getItem("theme") || "dark");

  const closeNav = () => {
    setNavOpenState(false);
  };

  const toggleTheme = (type) => {
    window.localStorage.setItem("theme", type);
    setTheme(type);
  };

  const getDarkTheme = () => {
    return <>
    <span className="text-zinc-400 absolute left-2 top-[6px]">
      Dark
    </span>
    <div
      className="flex items-center justify-center absolute rounded-full size-8 border 
      border-zinc-400 right-1 top-[50%] transform translate-y-[-50%] bg-slate-400 cursor-pointer"
      onClick={() => toggleTheme("light")}
    >
      <span className="material-symbols-rounded">dark_mode</span>
    </div>
  </>
  }

  const getLightTheme = () => {
    return <>
        <div className="flex items-center justify-center absolute rounded-full size-8 border 
                    border-zinc-400 left-1 top-[50%] transform translate-y-[-50%] bg-slate-400 cursor-pointer"
          onClick={() => toggleTheme("dark")}
        >
          <span className="material-symbols-rounded">light_mode</span>
        </div>
        <span className="text-zinc-400 absolute right-2 top-[6px]">Light</span>
      </>
  };

  return (
    <div className="w-full h-20 mt-4 flex items-center justify-between px-10">
      <a href="/">
        <img src="favicon.png" className="size-16" alt="logo-image" />
      </a>

      <Navbar navOpenState={navOpenState} closeNav={closeNav} />

      <div className="flex gap-2">
        <div className="relative rounded-3xl w-[85px] h-10 bg-zinc-800">
          { theme == "dark" ? getDarkTheme() : getLightTheme() }
        </div>

        <button className="header-btn">LOGIN</button>

        <span
          className="menu-icon material-symbols-rounded"
          onClick={() => setNavOpenState((prev) => !prev)}
        >
          {!navOpenState ? "menu" : "close"}
        </span>
      </div>
    </div>
  );
};

export default Header;
