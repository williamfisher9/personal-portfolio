import { useContext } from "react";
import "./Hero.css";
import { ThemeContext } from "../../constants/Constants";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className="w-full flex justify-between
                     max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:justify-center"
    >
      <div
        className="w-[50%] flex justify-center items-center
                      max-[1000px]:w-full"
      >
        <div className="flex flex-col gap-4 justify-center">
          <div className="max-[500px]:text-xs">
            <div className="flex gap-2 items-center">
              <img
                src="profile.jpg"
                className="size-8 rounded-md"
                alt="profile-image"
              />
              <div className="size-3 rounded-full relative">
                <div className="absolute size-full bg-green-500 animate-ping rounded-full opacity-85"></div>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mx-auto size-2 bg-green-500 rounded-full"></div>
              </div>
              <h1>Avilable for work</h1>
            </div>

            <h1 className="text-xl font-bold my-2">William Fisher</h1>
            <h1>Software Implementation and Support Engineer</h1>
            <h1>10+ Years of Experiece</h1>
            <h1>Full-Stack Developer</h1>
          </div>
          <div className="flex gap-4 mt-4 max-md:flex-col">
            <a
              className={`btn flex gap-1 max-md:items-center  max-md:justify-center ${
                theme.theme == "dark" ? "btn-dark-theme" : "btn-light-theme"
              }`}
            >
              Download Resume{" "}
              <span className="material-symbols-rounded">download</span>
            </a>
            <a
              href="/home#contact"
              className={`btn flex gap-1 max-md:items-center  max-md:justify-center ${
                theme.theme == "dark" ? "btn-dark-theme" : "btn-light-theme"
              }`}
            >
              Contact Me{" "}
              <span className="material-symbols-rounded">contact_mail</span>
            </a>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/williamfisher9" target="_blank">
              <FaGithub
                className={`text-3xl mt-2 ${
                  theme.theme == "dark"
                    ? "hover:text-teal-300"
                    : "hover:text-indigo-500"
                } hover:scale-110 transition duration-300`}
              />
            </a>
          </div>
        </div>
      </div>
      <div
        className="w-[50%] max-[1000px]:flex max-[1000px]:items-center 
        max-[1000px]:justify-center max-[1000px]:w-full"
      >
        <img
          src="profile.jpg"
          className="size-96 rounded-xl
          max-[500px]:size-64"
          alt="profile-image"
        />
      </div>
    </div>
  );
};

export default Hero;
