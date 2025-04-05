import React from "react";
import GaleryDetailsContent from "../components/GaleryDetails/galeryDetailsContent";
import Forma2 from "../components/forma2";
import BreadcrumbNav from "../components/BreadcrumbNav";
import PageTitle from "../components/PageTitle";

export default function GaleryDetails() {
  return (
    <>
      <BreadcrumbNav
        items={[
          { label: "Главная", path: "/" },
          { label: "Галерея", path: "/galery" },
          { label: "Керамическая ваза" },
        ]}
      />
      <PageTitle title="Керамическая ваза" />
      <GaleryDetailsContent />
      <Forma2 />
    </>
  );
}
