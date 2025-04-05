import React from "react";
import Forma from "../components/forma";
import ContactContent from "../components/Contacts/contactContent";
import BreadcrumbNav from "../components/BreadcrumbNav";
import PageTitle from "../components/PageTitle";
export default function Contacts() {
  return (
    <>
      <BreadcrumbNav
        items={[{ label: "Главная", path: "/" }, { label: "Контакты" }]}
      />
      <PageTitle title="Связаться с нами" />
      <ContactContent />
      <Forma />
    </>
  );
}
