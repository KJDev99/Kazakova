import React, { useState } from "react";

export default function ProductTitle() {
  const [activeTab, setActiveTab] = useState("Все проекты");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="px-22 flex flex-col">
        <h2 className="text-[80px] mb-10">Проекты</h2>
        <div className="flex space-x-8">
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
      </div>
    </div>
  );
}
