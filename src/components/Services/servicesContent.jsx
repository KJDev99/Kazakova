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
    <div className="flex flex-col px-22 max-md:px-0">
      <div className="flex space-x-8 mb-16 max-md:flex-col max-md:space-y-6 max-md:px-4">
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
      <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
        {activeTab === "Все проекты" && (
          <div className="flex flex-col">
            <h2 className="text-[80px] mb-4 max-md:text-[40px] max-md:px-4">
              Дизайн-проект
            </h2>
            <p className="text-2xl mb-18 max-w-[640px] max-md:px-4 max-md:text-[16px] max-md:mb-10 ">
              Полный дизайн-проект состоит из эскизного проекта и рабочего
              проекта
            </p>
            <div>
              <img
                src="services.png"
                alt=""
                className="md:hidden max-md:mb-10"
              />
            </div>
            <Accordion
              title="/ Этапы"
              children={[
                "Заключение договора — предоплата 50% от стоимости ",
                "Обмеры помещений — выезд на обмен включен",
                "Консультация — уточнение деталей составление технического задания",
                "Создание эскизного проекта",
                "Приемка эскизного проекта",
                "Создание рабочего проекта",
                "Приемка рабочего проекта — оплата 50% от стоимости",
              ]}
              isOpen={openIndex === 0}
              onClick={() => handleAccordionClick(0)}
            />

            <Accordion
              title="/ Чертежи"
              children={[
                "Обмерный чертеж объекта",
                "Планировочное решение",
                "План демонтажа перегородок и инженерных коммуникация",
                "План возводимых перегородок",
                "План расстановки мебели",
                "План размещения сантехнического оборудования",
                "План потолка с указанием типа используемого материала, отдельных узлом и сечений",
                "План размещения осветительных приборов",
                "План привязки выключателей с указанием включения групп светильников",
                "План электрики и электровыводов с привязками",
                "План полов и экспликация помещений",
                "3D-визуализации помещений",
                "План размещения электрического подогрева пола",
                "Развёртка стен с раскладкой кафельной плитки с указанием размеров",
                "Чертежи заказных изделий",
                "Спецификация дверных проёмов и полотен",
                "Ведомость отделки помещений",
                "Спецификации выбранных, материалов, дверей, оборудование и мебели",
              ]}
              isOpen={openIndex === 1}
              onClick={() => handleAccordionClick(1)}
            />
            <Accordion
              title="/ 3D визуализация"
              children={[
                "Можно заказать дополнительно визуализации в рамках проекта. Это опция к проекту",
              ]}
              isOpen={openIndex === 2}
              onClick={() => handleAccordionClick(2)}
            />
          </div>
        )}

        {activeTab === "Интерьеры" && (
          <div className="flex flex-col">
            <h2 className="text-[80px] mb-4 max-md:text-[40px] max-md:px-4">
              Авторский надзор
            </h2>
            <p className="text-2xl mb-18 max-w-[690px] max-md:px-4 max-md:text-[16px] max-md:mb-10 ">
              Авторский надзор-контроль выполнения работ всеми участниками
              реализации по согласованию замысла авторов (архитекторов).
            </p>
            <div>
              <img
                src="services.png"
                alt=""
                className="md:hidden max-md:mb-10"
              />
            </div>
            <Accordion
              title="/ Гарантии"
              children={[
                "Выполнение первоначального замысла",
                "Избежание простоев",
                "Избежание некачественного выполнения ответственных этапов",
                "Избежание перерасхода строительных и отделочных материалов",
              ]}
              isOpen={openIndex === 4}
              onClick={() => handleAccordionClick(4)}
            />

            <Accordion
              title="/ Включает"
              children={[
                "Посещение объекта плановое, не реже 3-х раз в месяц",
                "Решение технических вопросов и разъяснение чертежей",
                "необходимое корректирование и дополнение рабочей документации в ходе ремонта",
                "Подбор, закупка и контроль поставки отделочных и декоративных материалов на объект",
                "Консультация заказчика",
              ]}
              isOpen={openIndex === 5}
              onClick={() => handleAccordionClick(5)}
            />
          </div>
        )}

        {activeTab === "Архитектура" && (
          <div className="flex flex-col">
            <h2 className="text-[80px] mb-4  max-md:text-[40px] max-md:px-4">
              Комплектация объекта
            </h2>
            <p className="text-2xl mb-18 max-md:px-4 max-md:text-[16px] max-md:mb-10 ">
              Услуга подбора материалов можно дополнительно заказать и после
              создания дизайн-проекта. Комплектация освободит вам время и силы
              на поиск поставщиков, организацию поставок отделочных материалов,
              мебели и сантехники на объект. Входит в стоимость авторского
              надзора.
            </p>
            <div>
              <img
                src="services.png"
                alt=""
                className="md:hidden max-md:mb-10"
              />
            </div>
            <Accordion
              title="/ Что входит"
              children={[
                "Общение с поставщиками во время закупки, подготовка и проверка счетов",
                "Поиск подрядчика или поставщика на выбранный товар",
                "Организация оплаты и доставки товара",
                "Согласование сроков доставки (чтобы товар вовремя был на объекте)",
                "Консультации по приемке и проверке товаров на объекте",
                "Контроль замены товаров при браке",
                "Поиск аналогов в случае неожиданного снятия товара с производства или долгого его ожидания на заказ",
              ]}
              isOpen={openIndex === 6}
              onClick={() => handleAccordionClick(6)}
            />

            <Accordion
              title="/ Позиции комплектации"
              children={[
                "Подбор отделочных материалов",
                "Подбор сантехнического оборудования",
                "Подбор окон и дверей",
                "Подбор декоративного освещения",
                "Подбор кухни и кухонного оборудования",
                "Подбор предметов мебели",
                "Подбор текстиля",
                "Подбор материалов",
                "Подбор фурнитуры",
                "Подбор предметов декора",
              ]}
              isOpen={openIndex === 7}
              onClick={() => handleAccordionClick(7)}
            />
          </div>
        )}

        <div className="max-md:hidden">
          <img src="services.png" alt="" />
        </div>
      </div>
    </div>
  );
}
