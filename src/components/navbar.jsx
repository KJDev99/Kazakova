import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../ui/button";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";

export default function Navbar() {
  const [showButtons, setShowButtons] = useState(false);
  const containerRef = useRef(null);

  const handleClick = () => {
    setShowButtons(!showButtons);
  };

  const location = useLocation();

  useEffect(() => {
    setShowButtons(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowButtons(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="max-w-[1920px] mx-auto px-22 h-22 grid grid-cols-3 items-center relative">
      <ul className="flex space-x-10">
        <li>
          <Link to={"/"}>Главная</Link>
        </li>
        <li>
          <Link to={"/projects"}>Проекты</Link>
        </li>
        <li>
          <Link to={"/services"}>Услуги</Link>
        </li>
        <li>
          <Link to={"/about"}>О&nbsp;нас</Link>
        </li>
        <li>
          <Link to={"/contacts"}>Контакты</Link>
        </li>
        <li>
          <Link to={"/galery"}>Галерея</Link>
        </li>
      </ul>
      <div className="flex justify-center">
        <img src="/logo.svg" alt="" />
      </div>
      <div className="flex justify-end">
        <Button width="180px" text="Написать нам" onClick={handleClick} />
      </div>
      {showButtons && (
        <div className="mt-4 flex flex-col gap-1 animate-fade-in absolute right-22 top-[150px]">
          <a
            href="https://wa.me/998901234567"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              width="373px"
              icon={<IoLogoWhatsapp className="text-xl" />}
              text="Написать в WhatsApp"
              onClick={() => setShowButtons(false)}
            />
          </a>
          <a
            href="https://t.me/your_telegram_username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              width="373px"
              icon={<RiTelegram2Fill className="text-xl" />}
              text="Написать в Telegram"
              onClick={() => setShowButtons(false)}
            />
          </a>
          <Button
            width="373px"
            icon={<FaPlus className="text-lg" />}
            text="Отправить заявку"
            onClick={() => setShowButtons(false)}
          />
        </div>
      )}
    </div>
  );
}
