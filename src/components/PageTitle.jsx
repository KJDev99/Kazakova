import React from "react";

export default function PageTitle({ title, subtitle, mb = "mb-18" }) {
  return (
    <div
      className={`px-22 ${
        subtitle ? "flex justify-between items-end" : ""
      } ${mb}`}
    >
      <h2 className="text-[80px]">{title}</h2>
      {subtitle && <p className="mb-4">{subtitle}</p>}
    </div>
  );
}
