import { useEffect, useState } from "react";

const ScrollButton = () => {
  const [scrollButtonVisible, setScrollButtonVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", showOrHideScrollButton);

    return () => window.removeEventListener("scroll", showOrHideScrollButton);
  }, []);

  const showOrHideScrollButton = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setScrollButtonVisible(true);
    } else if (scrolled <= 300) {
      setScrollButtonVisible(false);
    }
  };

  const moveToTheTop = () => {
    window.scrollTo({ top: 0 });
  };

  return scrollButtonVisible ? (
    <div
      className="size-12 rounded-full bg-zinc-800 fixed bottom-2 right-2 flex 
                justify-center items-center select-none cursor-pointer hover:scale-110"
      onClick={moveToTheTop}
    >
      <span className="material-symbols-rounded text-zinc-400 text-4xl">
        stat_2
      </span>
    </div>
  ) : null;
};

export default ScrollButton;
