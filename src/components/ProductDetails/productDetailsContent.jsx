import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import {
  HiOutlineMagnifyingGlassMinus,
  HiOutlineMagnifyingGlassPlus,
} from "react-icons/hi2";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";

const galleryImages = [
  "/p11.png",
  "/p12.png",
  "/p21.png",
  "/p22.png",
  "/p23.png",
  "/p24.png",
  "/p25.png",
  "/p26.png",
  "/p31.png",
  "/p32.png",
  "/p33.png",
  "/p34.png",
  "/p35.png",
  "/p36.png",
];

export default function ProductDetailsContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [zoom, setZoom] = useState(1);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
    setZoom(1);
  };

  const closeModal = () => {
    setModalOpen(false);
    setZoom(1);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    setZoom(1);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
    setZoom(1);
  };

  return (
    <>
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-8 right-8 text-black text-3xl z-50"
            >
              <AiOutlineClose />
            </button>

            <div className="absolute top-8 right-24  flex gap-4 text-black text-3xl z-50 items-center">
              <button
                className="w-6 h-6"
                onClick={() => setZoom((z) => Math.min(z + 0.2, 3))}
              >
                <HiOutlineMagnifyingGlassPlus />
              </button>
              <button
                className="w-6 h-6"
                onClick={() => setZoom((z) => Math.max(z - 0.2, 1))}
              >
                {zoom > 1 && <HiOutlineMagnifyingGlassMinus />}
              </button>
            </div>

            <button
              onClick={prevImage}
              className="absolute left-8 text-black text-4xl z-50"
            >
              <LuMoveLeft />
            </button>

            <motion.img
              key={galleryImages[currentIndex]}
              src={galleryImages[currentIndex]}
              alt=""
              className="max-h-[90vh] max-w-[90vw] object-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: zoom }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              style={{ transform: `scale(${zoom})` }}
            />

            <button
              onClick={nextImage}
              className="absolute right-8 text-black text-4xl z-50"
            >
              <LuMoveRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col">
        <img src="/phero.png" alt="" className="w-full" />
        <div className="max-w-[1920px] mx-auto px-22">
          <h2 className="text-center mt-40 mb-4 text-[80px] leading-[100%]">
            150 m²
          </h2>
          <p className="max-w-[1024px] mx-auto text-center mb-16">
            Концепция квартиры раскрывается через тонкие детали и умные решения,
            делающие жизнь удобнее...
          </p>

          <img src="/patr.png" alt="" className="mx-auto" />

          <div className="grid grid-cols-2 gap-x-10 mt-40">
            {galleryImages.slice(0, 2).map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="col-span-1 cursor-pointer"
                onClick={() => openModal(i)}
              />
            ))}
          </div>

          <p className="my-18 max-w-[1176px] mx-auto text-center">
            Мы использовали светлые оттенки, чтобы создать ощущение простора...
          </p>

          <div className="grid grid-cols-6 gap-x-10 gap-y-18">
            {galleryImages.slice(2, 8).map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className={`col-span-${
                  i === 3 ? 6 : i === 4 || i === 5 ? 3 : 2
                } cursor-pointer`}
                onClick={() => openModal(i + 2)}
              />
            ))}
          </div>

          <p className="my-18 max-w-[1176px] mx-auto text-center">
            Гостиная и кухня в этом дизайне идеально сочетаются, создавая
            пространство для общения...
          </p>

          <div className="grid grid-cols-6 gap-x-10 gap-y-18">
            {galleryImages.slice(8).map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className={`col-span-${
                  i === 5 ? 6 : i >= 2 ? 2 : 3
                } cursor-pointer`}
                onClick={() => openModal(i + 8)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
