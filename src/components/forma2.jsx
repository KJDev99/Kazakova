import React from "react";
import Button from "../ui/button";
import { Link } from "react-router-dom";

export default function Forma2() {
  return (
    <div className="my-40 flex flex-col items-center justify-center py-8 bg-[#FBFBFB] max-md:my-28">
      <div className="max-w-[796px] mx-auto max-md:px-4">
        <h2 className="text-[32px] mb-8 leading-[150%] text-center font-medium max-md:text-lg">
          Персонализированные <br className="max-md:block hidden" /> интерьеры —
          создаем пространства, которые говорят о вас
        </h2>
        <div className="md:mx-12">
          <Button text="Оставить заявку" />
          <div className="flex mt-6 gap-4 md:items-center max-md:gap-2">
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
    </div>
  );
}
