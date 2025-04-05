import React from "react";
import PrivacyTitle from "../components/Privacy/privacyTitle";
import PrivacyContent from "../components/Privacy/privacyContent";
import Forma from "../components/forma";
import BreadcrumbNav from "../components/BreadcrumbNav";
export default function PrivacyPolicy() {
  return (
    <>
      <BreadcrumbNav
        items={[
          { label: "Главная", path: "/" },
          { label: "Политика конфиденциальности" },
        ]}
      />
      <PrivacyTitle />
      <PrivacyContent />
      <Forma />
    </>
  );
}
