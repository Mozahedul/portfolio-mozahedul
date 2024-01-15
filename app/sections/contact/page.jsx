"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import ContactHeader from "@/app/components/contact/contactHeader/page";
import "aos/dist/aos.css";
import ContactUs from "@/app/components/emails/contactUs/page";

const ContactSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="contact mt-12 md:mt-16 lg:mt-32 grid grid-clos-1 sm:grid-cols-2 md:gap-x-16 lg:mx-64 lg:justify-between"
      id="contactMe"
    >
      <ContactHeader />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="mt-10 md:mt-0"
      >
        <ContactUs />
      </div>
    </div>
  );
};

export default ContactSection;
