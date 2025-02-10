import { useState } from "react";
import "./Skills.css";
import * as myConstants from '../../constants/Constants'

const Skills = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [listType, setListType] = useState("BOXES");

  const handleTabClick = (itemName) => {
    setActiveTab(itemName);
  };

  return (
    <div>
      <div className="mt-8">
        <a id="skills" className="text-[40px] font-bold">
          My Tools
        </a>
        <p>
          Essential tools I use to build exceptional high-performing websites
          and applications.
        </p>
      </div>

      <div className="flex justify-center gap-36 items-center mt-8 max-[1000px]:gap-2 max-[1000px]:flex-col">
        <div className="flex gap-4 justify-center items-center max-[1000px]:text-xs max-[1000px]:gap-0">
          <div
            className={`flex items-center justify-center px-2 h-10  cursor-pointer ${
              activeTab == "ALL" ? "border-b-4 border-white text-white" : ""
            }`}
            onClick={() => handleTabClick("ALL")}
          >
            ALL
          </div>
          <div
            className={`flex items-center justify-center px-2 h-10  cursor-pointer ${
              activeTab == "FRONTEND"
                ? "border-b-4 border-white text-white"
                : ""
            }`}
            onClick={() => handleTabClick("FRONTEND")}
          >
            FRONTEND
          </div>
          <div
            className={`flex items-center justify-center px-2 h-10  cursor-pointer ${
              activeTab == "BACKEND" ? "border-b-4 border-white text-white" : ""
            }`}
            onClick={() => handleTabClick("BACKEND")}
          >
            BACKEND
          </div>
          <div
            className={`flex items-center justify-center px-2 h-10  cursor-pointer ${
              activeTab == "INFRASTRUCTURE"
                ? "border-b-4 border-white text-white"
                : ""
            }`}
            onClick={() => handleTabClick("INFRASTRUCTURE")}
          >
            INFRASTRUCTURE
          </div>
          <div
            className={`flex items-center justify-center px-2 h-10  cursor-pointer ${
              activeTab == "UI/UX" ? "border-b-4 border-white text-white" : ""
            }`}
            onClick={() => handleTabClick("UI/UX")}
          >
            UI/UX
          </div>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <span
            className={`material-symbols-rounded cursor-pointer hover:scale-125 transition duration-300 max-[1000px]:hover:scale-100 ${
              listType == "BOXES" ? "border-b-4 border-white" : null
            }`}
            onClick={() => setListType("BOXES")}
          >
            apps
          </span>
          <span
            className={`material-symbols-rounded cursor-pointer hover:scale-125 transition duration-300 max-[1000px]:hover:scale-100 ${
              listType == "LIST" ? "border-b-4 border-white" : null
            }`}
            onClick={() => setListType("LIST")}
          >
            list
          </span>
        </div>
      </div>

      {listType == "BOXES" ? (
        <div className="px-12 py-4 grid gap-4 place-items-center grid-cols-[repeat(auto-fill,_minmax(230px,_1fr))] transition-all duration-400">
          {
          myConstants.SKILLS_ITEMS
            .filter(
              (item) => activeTab == "ALL" || item.skill_type == activeTab
            )
            .sort((a, b) => a.skill_name.localeCompare(b.skill_name))
            .map((item) => 
                {
                    return (
                        <div className={`w-56 h-16 border border-zinc-400 rounded-md flex gap-2 items-center px-2 
     hover:scale-105 hover:bg-[#69bfd0] transition duration-500 hover:transition hover:duration-500 
    select-none hover:shadow-[2px_2px_4px_4px_#669ad5,-2px_-2px_4px_4px_#669ad5]`} key={item.skill_name}>
                          <img
                            src={item.icon_name}
                            className="size-10"
                            alt={item.icon_name}
                          />
                          <div className="flex flex-col">
                            <span className="text-[14px]">{item.skill_name}</span>
                            <span className="text-[10px]">
                              {item.skill_type}
                            </span>
                          </div>
                        </div>
                        
                      );
                })
            }
        </div>
      ) : (
        <div className="px-12 py-4 grid gap-4 place-items-center grid-cols-3 max-[1300px]:grid-cols-2 max-[900px]:grid-cols-1">
          {myConstants.SKILLS_ITEMS
            .filter(
              (item) => activeTab == "ALL" || item.skill_type == activeTab
            )
            .sort((a, b) => a.skill_name.localeCompare(b.skill_name))
            .map((item) => {
              return (
                <div className={`w-full h-16 border border-zinc-400 rounded-md flex gap-2 items-center px-2 
     hover:scale-105 hover:bg-[#69bfd0] transition duration-500 hover:transition hover:duration-500 
    select-none hover:shadow-[2px_2px_4px_4px_#669ad5,-2px_-2px_4px_4px_#669ad5]`} key={item.skill_name}>
                  <div className="w-[12%]">
                    <img
                      src={item.icon_name}
                      className="size-10"
                      alt={item.icon_name}
                    />
                  </div>
                  <div className="w-[30%] flex flex-col">
                    <span className="text-[14px]">{item.skill_name}</span>
                    <span className="text-[10px] ">
                      {item.skill_type}
                    </span>
                  </div>

                  <div className="w-[50%] flex h-2 border border-green-600 rounded-sm">
                    <div
                      className={`h-full bg-green-200`}
                      style={{ width: `${item.strength}` }}
                    ></div>
                  </div>

                  <div className="w-[10%]">
                    <span className="text-green-200">{item.strength}</span>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Skills;
