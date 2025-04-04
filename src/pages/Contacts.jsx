import React from "react";
import ContactNav from "../components/Contacts/contactNav";
import ContactTitle from "../components/Contacts/contactTitle";
import Forma from "../components/forma";
import ContactContent from "../components/Contacts/contactContent";

export default function Contacts() {
  return (
    <>
      <ContactNav />
      <ContactTitle />
      <ContactContent />
      <Forma />
    </>
  );
}
