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
    <div className="contact" id="contactMe">
      <ContactHeader />
      <div data-aos="fade-up" data-aos-duration="1000" className="mt-10">
        <ContactUs />
      </div>
    </div>
  );
};

export default ContactSection;
