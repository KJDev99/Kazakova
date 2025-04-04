import React from "react";
import { Link } from "react-router-dom";

export default function ProductNav() {
  return (
    <div className="mt-18 mb-16 max-w-[1920px] mx-auto gap-2 items-center flex px-22">
      <Link to="/" className="text-lg text-[#989898]">
        Главная
      </Link>
      <div>/</div>
      <p className="text-lg">Проекты</p>
    </div>
  );
}
