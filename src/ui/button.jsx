import React from "react";

export default function Button({
  width = "100%",
  icon,
  text,
  className = "",
  onClick,
}) {
  return (
    <button
      style={{ width }}
      className={`flex items-center h-[56px] max-md:h-[48px] justify-center cursor-pointer gap-2 p-2 bg-[#000000] text-white rounded-[15px] ${className}`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
}
