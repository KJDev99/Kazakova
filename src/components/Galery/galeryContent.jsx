import React from "react";
import { Link } from "react-router-dom";

const images = [
  { src: "galery1.png", text: "Керамическая ваза" },
  { src: "galery2.png", text: "Керамическая ваза" },
  { src: "galery3.png", text: "Керамическая ваза" },
  { src: "galery4.png", text: "Керамическая ваза" },
  { src: "galery5.png", text: "Керамическая ваза" },
  { src: "galery6.png", text: "Керамическая ваза" },
  { src: "galery1.png", text: "Керамическая ваза" },
  { src: "galery2.png", text: "Керамическая ваза" },
  { src: "galery3.png", text: "Керамическая ваза" },
  { src: "galery4.png", text: "Керамическая ваза" },
  { src: "galery5.png", text: "Керамическая ваза" },
  { src: "galery6.png", text: "Керамическая ваза" },
];

export default function GalleryContent() {
  return (
    <div className="px-22 max-w-[1920px] mx-auto">
      <div className="grid grid-cols-3 gap-x-10 gap-y-18">
        {images.map((item, index) => (
          <Link to={"/galery-detail"} key={index} className="relative group">
            <img src={item.src} alt="" className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-50 text-[32px] transition-opacity duration-300 flex items-center justify-center text-white text-lg font-medium">
              {item.text}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
