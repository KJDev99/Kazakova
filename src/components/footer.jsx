import React from "react";
import Button from "../ui/button";
import { IoLogoVk } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="max-w-[1920px] mx-auto px-22 flex flex-col py-8 max-xl:px-4 max-md:border-t max-md:border-[#F3F3F3]">
      <div className="flex justify-between mb-18 max-md:flex-col max-md:mb-10">
        <div className="flex flex-col max-md:mb-10">
          <h2 className="font-medium text-[32px] max-md:text-lg max-md:mb-2">
            Москва
          </h2>
          <p className="leading-[150%] max-w-[260px] max-md:leading-[100%] ">
            Холодильный переулок, 3, к1с8 2-й этаж, офис — 8210
          </p>
        </div>
        <div className="flex flex-col max-md:mb-10">
          <h2 className="font-medium text-[32px] mb-8 max-md:text-lg max-md:mb-6">
            +7(916)375-29-99
          </h2>
          <p className="leading-[150%] mb-4 ">Напишите нам:</p>
          <div className="flex gap-4">
            <Button text="Telegram" width="140px" />
            <Button text="WhatsApp" width="150px" />
          </div>
        </div>
        <div className="flex flex-col ">
          <h2 className="font-medium text-[32px] mb-8 max-md:text-lg max-md:mb-6">
            larikazakova@gmail.com
          </h2>
          <p className="leading-[150%] mb-4">Социальные сети:</p>
          <div className="flex gap-4">
            <div className="border rounded-[5px] px-2 cursor-pointer py-1 border-[#F3F3F3]">
              <IoLogoVk className="text-[#222222]" />
            </div>
            <div className="border rounded-[5px] px-2 cursor-pointer py-1 border-[#F3F3F3]">
              <FaTelegramPlane className="text-[#222222]" />
            </div>
          </div>
        </div>
        <div className="flex justify-end items-start max-md:hidden">
          <a
            href="#"
            className="text-black font-medium inline-block border-b-2 border-black cursor-pointer"
          >
            Наверх
          </a>
        </div>
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-1">
        <Link
          to="/privacy-policy"
          className="border-b-1 border-[#989898] text-[#989898] w-max max-md:mb-10"
        >
          Политика конфиденциальности
        </Link>
        <p className="text-center text-[#989898] max-md:text-left">
          © Kazakovadesign 2025
        </p>
        <div></div>
      </div>
    </div>
  );
}
