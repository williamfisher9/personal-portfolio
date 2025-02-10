import { useState } from "react";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import IntroductoryMessage from "./components/IntroductoryMessage/IntroductoryMessage";
import Portfolio from "./components/Portfolio/Portfolio";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import Skills from "./components/Skills/Skills";
import { ThemeContext } from "./constants/Constants";

const App = () => {
  const [theme, setTheme] = useState(window.localStorage.getItem("theme") || "dark");

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div data-theme={theme}>
        <Header />
        <div className="px-32 py-8 max-[1000px]:px-5 max-[1000px]:py-4">
          <Hero />
          <IntroductoryMessage />
          <Skills />
          <Contact />
          <Portfolio />
          <ScrollButton />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
