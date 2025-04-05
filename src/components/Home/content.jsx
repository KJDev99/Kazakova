import React from "react";
import { Link } from "react-router-dom";

export default function Content() {
  return (
    <div className="my-40 space-y-18 grid grid-cols-2 max-md:my-26 max-md:space-y-10 max-md:grid-cols-1">
      {["sec1.png", "sec2.png", "sec3.png", "sec4.png"].map((img, index) => (
        <Link to={"/project-detail"} key={index} className="flex flex-col">
          <div className="relative group">
            <img src={`/${img}`} alt="" className="w-full" />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
          <div className="px-6 pt-8 max-md:px-4 max-md:pt-4">
            <h3 className="mb-0 font-semibold text-2xl max-md:text-lg">
              Тим Парк
            </h3>
            <p className="mt-0">2024 Москва, 150 m²</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
