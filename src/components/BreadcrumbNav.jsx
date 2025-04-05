import React from "react";
import { Link } from "react-router-dom";

export default function BreadcrumbNav({ items }) {
  return (
    <div className="mt-18 mb-8 max-w-[1920px] mx-auto gap-x-2 items-center flex px-22">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.path ? (
            <Link to={item.path} className="text-lg text-[#989898]">
              {item.label}
            </Link>
          ) : (
            <p className="text-lg">{item.label}</p>
          )}
          {index < items.length - 1 && <div>/</div>}
        </React.Fragment>
      ))}
    </div>
  );
}
