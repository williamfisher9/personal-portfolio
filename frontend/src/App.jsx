import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import IntroductoryMessage from "./components/IntroductoryMessage/IntroductoryMessage";
import Portfolio from "./components/Portfolio/Portfolio";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div>
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
  );
};

export default App;
