import React from "react";

export default function Header() {
  return (
    <div
      style={{
        backgroundImage: `url("/herodark.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[calc(100vh_-_88px)] flex flex-col"
    >
      <div className="flex flex-col items-center justify-center grow-1 max-md:px-12">
        <img src="/logowhite.svg" alt="" className="max-md:w-full" />
        <p className=" text-2xl text-white max-md:text-center max-md:text-[16px] max-md:mt-2">
          Эстетика и функциональность в каждом проекте
        </p>
      </div>
      <p className="text-2xl max-w-[340px] mx-auto pb-8 text-white text-center max-md:text-sm">
        Студия дизайна интерьера в Москве
      </p>
    </div>
  );
}
