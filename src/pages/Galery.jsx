import React from "react";
import GaleryContent from "../components/Galery/galeryContent";
import Forma2 from "../components/forma2";
import BreadcrumbNav from "../components/BreadcrumbNav";
import PageTitle from "../components/PageTitle";

export default function Galery() {
  return (
    <>
      <BreadcrumbNav
        items={[{ label: "Главная", path: "/" }, { label: "Галерея" }]}
      />
      <PageTitle title="Галерея" />
      <GaleryContent />
      <Forma2 />
    </>
  );
}
