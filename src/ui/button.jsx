import React from "react";

export default function Button({
  width = "100%",
  height = "56px",
  icon,
  text,
  className = "",
  onClick,
}) {
  return (
    <button
      style={{ width, height }}
      className={`flex items-center justify-center cursor-pointer gap-2 p-2 bg-[#000000] text-white rounded-[15px] ${className}`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
}
