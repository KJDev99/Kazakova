import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductContent() {
  const [activeTab, setActiveTab] = useState("Все проекты");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <div className="flex space-x-8 px-22 max-w-[1920px] max-md:px-4 max-md:flex-wrap max-md:gap-x-4 max-md:gap-y-6">
        <span
          className={`border-b-1 font-medium cursor-pointer w-max ${
            activeTab === "Все проекты"
              ? "border-[#000] text-[#000]"
              : "border-[#989898] text-[#989898]"
          }`}
          onClick={() => handleTabClick("Все проекты")}
        >
          Все проекты
        </span>
        <span
          className={`border-b-1 font-medium cursor-pointer w-max ${
            activeTab === "Интерьеры"
              ? "border-[#000] text-[#000]"
              : "border-[#989898] text-[#989898]"
          }`}
          onClick={() => handleTabClick("Интерьеры")}
        >
          Интерьеры
        </span>
        <span
          className={`border-b-1 font-medium cursor-pointer w-max ${
            activeTab === "Архитектура"
              ? "border-[#000] text-[#000]"
              : "border-[#989898] text-[#989898]"
          }`}
          onClick={() => handleTabClick("Архитектура")}
        >
          Архитектура
        </span>
        <span
          className={`border-b-1 font-medium cursor-pointer w-max ${
            activeTab === "Общественные интерьеры"
              ? "border-[#000] text-[#000]"
              : "border-[#989898] text-[#989898]"
          }`}
          onClick={() => handleTabClick("Общественные интерьеры")}
        >
          Общественные интерьеры
        </span>
      </div>
      <div className="mt-18 mb-0 space-y-18 grid grid-cols-2 max-md:mt-10 max-md:grid-cols-1">
        {[
          "sec1.png",
          "sec2.png",
          "sec3.png",
          "sec4.png",
          "sec1.png",
          "sec2.png",
          "sec3.png",
          "sec4.png",
          "sec1.png",
          "sec2.png",
          "sec3.png",
          "sec4.png",
          "sec1.png",
          "sec2.png",
          "sec3.png",
          "sec4.png",
        ].map((img, index) => (
          <Link to={"/project-detail"} key={index} className="flex flex-col">
            <div className="relative group">
              <img src={`/${img}`} alt="" className="w-full" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="px-6 pt-8 max-md:px-4 max-md:pt-4">
              <h3 className="mb-0 font-semibold text-2xl max-md:text-lg">
                Тим Парк
              </h3>
              <p className="mt-0">2024 Москва, 150 m²</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
