import React from "react";
import ContactHeader from "@/app/components/contact/contactHeader/page";

const ContactSection = () => {
  return (
    <>
      <ContactHeader />
      <button type="button" className="btn mx-auto my-6 block lg:my-10">
        <a href="mailto:mozahed001@gmail.com">Email Me</a>
      </button>
    </>
  );
};

export default ContactSection;
