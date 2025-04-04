import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Ольга Иванова",
    role: "Архитектор-дизайнер",
    image: "/team5.png",
  },
  {
    id: 2,
    name: "Мария Петрова",
    role: "Архитектор-дизайнер",
    image: "/team4.png",
  },
  {
    id: 3,
    name: "Наталья Семенова",
    role: "Архитектор-дизайнер",
    image: "/team3.png",
  },
];

const HeroSection = () => {
  return (
    <section className="max-w-[1920px] mx-auto px-22">
      <h1 className="text-[80px] leading-[120%] max-w-[992px]">
        Создаем пространство, где живет вдохновение
      </h1>

      <div className="grid grid-cols-2 gap-x-10 my-18">
        <img
          src="/team1.png"
          alt="Person"
          className="w-full object-cover h-full"
        />
        <div className="">
          <div className="text-left mb-10">
            <p className="leading-[150%] pr-[80px] mb-2">
              Каждый наш проект — это уникальное произведение искусства,
              созданное с любовью и вниманием к деталям. Мы верим, что
              пространство, в котором вы живете и работаете, должно не только
              быть красивым, но и функциональным, отражая вашу индивидуальность
              и стиль жизни.
            </p>
            <p className="leading-[150%] pr-[50px] mb-8">
              Наша команда опытных дизайнеров и архитекторов работает в тесном
              сотрудничестве с клиентами, чтобы понять их потребности и желания.
              Мы предлагаем полный спектр услуг — от концептуального
              проектирования до реализации, включая выбор материалов, мебели и
              декора. Мы стремимся создать интерьеры, которые вдохновляют,
              радуют глаз и делают повседневную жизнь более комфортной.
            </p>
            <span className="text-black font-medium inline-block border-b-2 border-black">
              Больше о студии
            </span>
          </div>
          <img
            src="/team2.png"
            alt="Workspace"
            className="w-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-10 mt-10">
        {teamMembers.map((member) => (
          <div key={member.id} className="text-left">
            <img
              src={member.image}
              alt={member.name}
              className="w-full object-cover h-[600px]"
            />
            <h3 className="text-2xl font-semibold mt-8 mb-2">{member.name}</h3>
            <p className="">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
