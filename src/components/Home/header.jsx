import React from "react";

export default function Header() {
  return (
    <div
      style={{
        backgroundImage: `url("/herodark.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[892px] flex flex-col"
    >
      <div className="flex flex-col items-center justify-center grow-1">
        <img src="/logowhite.svg" alt="" />
        <p className=" text-2xl text-white">
          Эстетика и функциональность в каждом проекте
        </p>
      </div>
      <p className="text-2xl max-w-[340px] mx-auto pb-8 text-white text-center">
        Студия дизайна интерьера в Москве
      </p>
    </div>
  );
}
