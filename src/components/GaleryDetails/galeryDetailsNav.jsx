import React from "react";
import { Link } from "react-router-dom";

export default function GaleryDetailsNav() {
  return (
    <div className="mt-18 mb-8 max-w-[1920px] mx-auto gap-x-2 items-center flex px-22">
      <Link to="/" className="text-lg text-[#989898]">
        Главная
      </Link>
      <div>/</div>
      <Link to="/galery" className="text-lg text-[#989898]">
        Галерея
      </Link>
      <div>/</div>
      <p className="text-lg">Керамическая ваза</p>
    </div>
  );
}
