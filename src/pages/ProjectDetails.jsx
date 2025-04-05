import React from "react";
import ProductDetailsContent from "../components/ProductDetails/productDetailsContent";
import Forma from "../components/forma";
import BreadcrumbNav from "../components/BreadcrumbNav";
import PageTitle from "../components/PageTitle";
export default function ProjectDetails() {
  return (
    <>
      <BreadcrumbNav
        items={[
          { label: "Главная", path: "/" },
          { label: "Проекты", path: "/projects" },
          { label: "Тим парк" },
        ]}
      />
      <PageTitle title="Тим парк" subtitle="2024 Москва, 150 m²" />
      <ProductDetailsContent />
      <Forma />
    </>
  );
}
