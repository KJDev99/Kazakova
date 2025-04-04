import React from "react";
import Button from "../../ui/button";
import { IoLogoVk } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";

export default function ContactContent() {
  return (
    <div className="px-22 max-w-[1920px] mx-auto grid grid-cols-2">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="font-medium text-[32px]">Москва</h2>
          <p className="leading-[150%] max-w-[260px]">
            Холодильный переулок, 3, к1с8 2-й этаж, офис — 8210
          </p>
          <h2 className="font-medium text-[32px] mb-8 mt-16">
            +7(916)375-29-99
          </h2>
          <p className="leading-[150%] mb-4">Напишите нам:</p>
          <div className="flex gap-4">
            <Button text="Telegram" width="140px" />
            <Button text="WhatsApp" width="150px" />
          </div>
        </div>
        <div className="flex flex-col ">
          <h2 className="font-medium text-[32px] mb-8">
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
      </div>
    </div>
  );
}
