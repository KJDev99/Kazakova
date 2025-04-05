import React from "react";
import ServicesTitle from "../components/Services/servicesTitle";
import ServicesContent from "../components/Services/servicesContent";
import Forma2 from "../components/forma2";
import BreadcrumbNav from "../components/BreadcrumbNav";
import PageTitle from "../components/PageTitle";
export default function Services() {
  return (
    <>
      <BreadcrumbNav
        items={[{ label: "Главная", path: "/" }, { label: "Услуги" }]}
      />
      <ServicesTitle />
      <PageTitle title="Услуги" mb="mb-10" />
      <ServicesContent />
      <Forma2 />
    </>
  );
}
