import { useState } from "react";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import IntroductoryMessage from "./components/IntroductoryMessage/IntroductoryMessage";
import Portfolio from "./components/Portfolio/Portfolio";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import Skills from "./components/Skills/Skills";
import { ThemeContext } from "./constants/Constants";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Blog from "./components/Blog/Blog";
import NewPost from "./components/Blog/NewPost/NewPost";

const App = () => {
  const [theme, setTheme] = useState(window.localStorage.getItem("theme") || "dark");

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div data-theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<><Hero /><IntroductoryMessage /><Skills /><Contact /><Portfolio /><ScrollButton /></>}></Route>
                <Route path="/home" element={<><Hero /><IntroductoryMessage /><Skills /><Contact /><Portfolio /><ScrollButton /></>}></Route>
                <Route path="/blog" element={<Blog />}></Route>
                <Route path="/blog/post/new" element={<NewPost />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
    </ThemeContext.Provider>
  );
};

export default App;
