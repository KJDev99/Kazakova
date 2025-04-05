import React from "react";

export default function PageTitle({ title, subtitle, mb = "mb-18" }) {
  return (
    <div
      className={`px-22 max-md:px-4 ${
        subtitle ? "flex md:justify-between md:items-end max-md:flex-col " : ""
      } ${mb} max-md:mb-10`}
    >
      <h2 className="text-[80px] max-md:text-[40px]">{title}</h2>
      {subtitle && <p className="mb-4">{subtitle}</p>}
    </div>
  );
}
