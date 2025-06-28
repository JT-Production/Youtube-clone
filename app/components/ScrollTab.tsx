"use client";
import { useState } from "react";

const ScollTab = () => {
  const tabs = [
    { id: 1, name: "All" },
    { id: 2, name: "Beats" },
    { id: 3, name: "Music" },
    { id: 4, name: "Rap" },
    { id: 5, name: "Pop" },
    { id: 6, name: "Stronghold Kingdom" },
    { id:7,  name: "Mixes"},
    { id: 8, name: "Gaming" },
    { id: 9, name: "Vlogs" },
    { id: 10, name: "Funny" },
    { id: 11, name: "Memes" },
    { id: 12, name: "Shorts" },
    { id: 13, name: "Trending" },
    { id: 14, name: "New" },
    { id: 15, name: "Top" },
    { id: 16, name: "Popular" },
    { id: 17, name: "Latest" },
  ];

  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (id: number) => {
    setActiveTab(id);
  }
  return (
    <div className="relative">
      <div className="flex flex-nowrap gap-5 text-black px-5 pt-1 pb-3 overflow-x-auto " style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {tabs.map((tab) => (
          <div
        key={tab.id}
        onClick={() => handleTabClick(tab.id)}
        className={"text-sm font-semibold rounded-xl py-2 px-7 cursor-pointer whitespace-nowrap " + (activeTab === tab.id ? "bg-black text-white hover:bg-zinc-800" : "bg-white text-black hover:bg-gray-100")}
        style={{ display: "inline-block" }}
          >
        {tab.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScollTab;
