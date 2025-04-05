import React from "react";
import ProductContent from "../components/Product/productContent";
import Forma from "../components/forma";
import BreadcrumbNav from "../components/BreadcrumbNav";
import PageTitle from "../components/PageTitle";
export default function Projects() {
  return (
    <>
      <BreadcrumbNav
        items={[{ label: "Главная", path: "/" }, { label: "Проекты" }]}
      />

      <PageTitle title="Проекты" mb="mb-10" />
      <ProductContent />
      <Forma />
    </>
  );
}
