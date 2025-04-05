import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../ui/button";
import { IoIosMenu, IoLogoWhatsapp } from "react-icons/io";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [showButtons, setShowButtons] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const containerRef = useRef(null);

  const handleClick = () => {
    setShowButtons(!showButtons);
  };
  const handleClickMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
    setShowButtons(false);
    setShowMenu(false);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const location = useLocation();

  useEffect(() => {
    setShowButtons(false);
    setShowMenu(false);
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
    <div className="max-w-[1920px] mx-auto px-22 h-22 grid grid-cols-3 items-center relative max-md:px-4 max-md:h-[50px] max-md:border-b max-md:border-[#f3f3f3]">
      <ul className="flex space-x-10 max-2xl:space-x-5 max-md:hidden">
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
      <div className="md:hidden max-md:flex max-md:gap-2">
        <a
          href="https://wa.me/998901234567"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoWhatsapp className="text-lg" />
        </a>
        <a
          href="https://t.me/your_telegram_username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiTelegram2Fill className="text-lg" />
        </a>
      </div>
      <div className="flex justify-center">
        <img src="/logo.svg" alt="" className="max-md:h-[18px]" />
      </div>
      <div className="flex justify-end max-md:hidden">
        <Button width="180px" text="Написать нам" onClick={handleClick} />
      </div>
      <div className="md:hidden flex justify-end text-2xl">
        {!showMenu ? (
          <IoIosMenu onClick={handleClickMenu} />
        ) : (
          <AiOutlineClose onClick={handleClickMenu} />
        )}
      </div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="px-6 py-8  flex flex-col gap-1 absolute right-0 w-full bg-white top-[50px] z-[999]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-10">
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
              <div className="flex flex-col max-md:mb-10">
                <h2 className="font-medium text-[32px] max-md:text-2xl max-md:mb-2">
                  Москва
                </h2>
                <p className="leading-[150%] max-w-[260px] max-md:leading-[100%] ">
                  Холодильный переулок, 3, к1с8 2-й этаж, офис — 8210
                </p>
              </div>
              <div className="flex flex-col max-md:mb-10">
                <h2 className="font-medium text-[32px] mb-4 max-md:text-2xl max-md:mb-6">
                  +7(916)375-29-99
                </h2>
                <h2 className="font-medium text-[32px] mb-10 max-md:text-2xl max-md:mb-6">
                  larikazakova@gmail.com
                </h2>
                <Button
                  width="184px"
                  text="Отправить заявку"
                  onClick={handleModalOpen}
                />
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showButtons && (
          <motion.div
            className="mt-4 flex flex-col gap-1 absolute right-0 top-[100px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
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
              onClick={handleModalOpen}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-[white] bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-[744px] mx-auto bg-white">
              <h2 className="text-[80px] mb-4">Отправить заявку</h2>
              <p className="text-2xl mb-4 text-center">
                Заполните форму и мы свяжемся с вами
              </p>
              <input
                type="text"
                placeholder="Имя"
                className="text-[#989898] py-2 px-0.5 w-full border-b-1 border-black mb-6"
              />
              <input
                type="text"
                placeholder="Номер телефона"
                className="text-[#989898] py-2 px-0.5 w-full border-b-1 border-black mb-8"
              />
              <Button text="Отправить" />
              <div className="flex mt-6 gap-4 items-center">
                <input
                  type="checkbox"
                  name="check"
                  id="check"
                  className="w-6 h-6 accent-[#989898]"
                />
                <label htmlFor="check" className="cursor-pointer">
                  Нажимая на кнопку, вы даете согласие на обработку персональных
                  данных и соглашаетесь с&nbsp;
                  <Link to="/privacy-policy" className="font-medium">
                    политикой конфиденциальности
                  </Link>
                </label>
              </div>
            </div>

            <button
              onClick={handleModalClose}
              className="absolute top-8 right-8 text-black text-3xl z-50"
            >
              <AiOutlineClose />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
