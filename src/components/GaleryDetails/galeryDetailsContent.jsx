import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/galery1.png", "/galery2.png", "/galery3.png", "/galery4.png"];

export default function GaleryDetailsContent() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="px-22 max-w-[1920px] mx-auto">
      <div className="grid grid-cols-2 gap-x-10">
        <div className="flex flex-col gap-4">
          <div className="aspect-square w-full relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage}
                src={selectedImage}
                alt="IMG"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-3 gap-10 mt-14">
            {images
              .filter((img) => img !== selectedImage)
              .map((img) => (
                <button
                  key={img}
                  onClick={() => setSelectedImage(img)}
                  className="cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 border-transparent"
                >
                  <img
                    src={img}
                    alt="Thumbnail"
                    className="w-full h-[245px] object-cover"
                  />
                </button>
              ))}
          </div>
        </div>

        {/* Right side - Info */}
        <div className="flex flex-col">
          <h3 className="text-2xl mb-8">Узбекистан</h3>
          <h3 className="text-2xl mb-8">2018</h3>
          <h3 className="text-2xl">21х25</h3>
          <button className="px-8 py-[18px] border border-[#9B9B9B] rounded-[15px] mt-16 mb-18 w-max">
            Цена по запросу
          </button>
          <h3 className="text-2xl font-semibold mb-4">Описание</h3>
          <p className="leading-[150%]">
            Представляем вам нашу изысканную керамическую вазу, которая станет
            идеальным акцентом для любого интерьера. Эта ваза выполнена вручную
            из высококачественной керамики, что придает ей уникальность и
            характер. Её гладкая поверхность и утонченные линии создают ощущение
            элегантности и стиля, а натуральные оттенки добавляют тепла и уюта в
            ваше пространство. Размеры вазы идеально подходят для размещения как
            одиночных цветочных композиций, так и для создания эффектных
            букетов. Благодаря своему минималистичному дизайну, она легко
            впишется в различные стили интерьера — от современного до
            классического. Каждая ваза проходит тщательную проверку качества,
            что гарантирует её долговечность и устойчивость к внешним
            воздействиям.
          </p>
        </div>
      </div>
    </div>
  );
}
