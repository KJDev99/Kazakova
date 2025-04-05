import React from "react";
import Button from "../ui/button";
import { Link } from "react-router-dom";

export default function Forma() {
  return (
    <div className="my-40 flex flex-col items-center justify-center py-8 bg-[#FBFBFB] max-md:my-28">
      <div className="max-w-[704px] mx-auto max-md:px-8">
        <h2 className="text-[80px] mb-4 font-medium text-nowrap text-center max-md:text-2xl ">
          Пример проекта
        </h2>
        <p className="text-2xl mb-4 max-md:text-[16px] text-center max-md:w-[200px] max-md:mx-auto">
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
        <Button text="Получить" />
        <div className="flex mt-6 gap-4 md:items-center max-md:gap-2 ">
          <input
            type="checkbox"
            name="check"
            id="check"
            className="w-6 h-6 accent-[#989898]"
          />
          <label htmlFor="check" className="cursor-pointer max-md:text-sm">
            Нажимая на кнопку, вы даете согласие на обработку персональных
            данных и соглашаетесь с&nbsp;
            <Link to="/privacy-policy" className="font-medium">
              политикой конфиденциальности
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
}
