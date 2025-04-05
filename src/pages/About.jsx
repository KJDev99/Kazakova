import React from "react";
import AboutContent from "../components/About/aboutContent";
import Forma from "../components/forma";
import BreadcrumbNav from "../components/BreadcrumbNav";
import PageTitle from "../components/PageTitle";

export default function About() {
  return (
    <>
      <BreadcrumbNav
        items={[{ label: "Главная", path: "/" }, { label: "О нас" }]}
      />
      <PageTitle title="О нас" />
      <AboutContent />
      <Forma />
    </>
  );
}
