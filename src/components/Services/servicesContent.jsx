import React, { useState } from "react";
import Accordion from "../accordion";

export default function ServicesContent() {
  const [activeTab, setActiveTab] = useState("Все проекты");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="flex flex-col px-22">
      <div className="flex space-x-8 mb-16">
        <span
          className={`border-b-1 font-medium cursor-pointer w-max ${
            activeTab === "Все проекты"
              ? "border-[#000] text-[#000]"
              : "border-[#989898] text-[#989898]"
          }`}
          onClick={() => handleTabClick("Все проекты")}
        >
          Полный дизайн-проект
        </span>
        <span
          className={`border-b-1 font-medium cursor-pointer w-max ${
            activeTab === "Интерьеры"
              ? "border-[#000] text-[#000]"
              : "border-[#989898] text-[#989898]"
          }`}
          onClick={() => handleTabClick("Интерьеры")}
        >
          Авторский надзор
        </span>
        <span
          className={`border-b-1 font-medium cursor-pointer w-max ${
            activeTab === "Архитектура"
              ? "border-[#000] text-[#000]"
              : "border-[#989898] text-[#989898]"
          }`}
          onClick={() => handleTabClick("Архитектура")}
        >
          Комплектация объекта
        </span>
      </div>
      <div className="grid grid-cols-2">
        {activeTab === "Все проекты" && (
          <div className="flex flex-col">
            <h2 className="text-[80px] mb-4">Дизайн-проект</h2>
            <p className="text-2xl mb-18 max-w-[640px]">
              Полный дизайн-проект состоит из эскизного проекта и рабочего
              проекта
            </p>
          </div>
        )}

        {activeTab === "Интерьеры" && (
          <div className="flex flex-col">
            <h2 className="text-[80px] mb-4">Авторский надзор</h2>
            <p className="text-2xl mb-18 max-w-[690px]">
              Авторский надзор-контроль выполнения работ всеми участниками
              реализации по согласованию замысла авторов (архитекторов).
            </p>
          </div>
        )}

        {activeTab === "Архитектура" && (
          <div className="flex flex-col">
            <h2 className="text-[80px] mb-4">Комплектация объекта</h2>
            <p className="text-2xl mb-18 ">
              Услуга подбора материалов можно дополнительно заказать и после
              создания дизайн-проекта. Комплектация освободит вам время и силы
              на поиск поставщиков, организацию поставок отделочных материалов,
              мебели и сантехники на объект. Входит в стоимость авторского
              надзора.
            </p>
            <Accordion
              title="/ Гарантии"
              children={[
                "Выполнение первоначального замысла",
                "Избежание простоев",
                "Избежание некачественного выполнения ответственных этапов",
                "Избежание перерасхода строительных и отделочных материалов",
              ]}
              isOpen={openIndex === 0}
              onClick={() => handleAccordionClick(0)}
            />

            <Accordion
              title="/ Включает"
              children={[
                "Регулярные выезды на объект",
                "Контроль за соответствием проекту",
                "Консультации подрядчиков",
                "Фиксация всех изменений в проекте",
              ]}
              isOpen={openIndex === 1}
              onClick={() => handleAccordionClick(1)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
