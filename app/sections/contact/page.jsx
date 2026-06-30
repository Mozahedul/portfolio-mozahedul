"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import ContactHeader from "@/app/components/contact/contactHeader/page";
import "aos/dist/aos.css";
import ContactUs from "@/app/components/emails/contactUs/page";
import aosFadeUp from "@/utils/animation/aosFadeUp";

const ContactSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="mt-12 px-4 sm:px-6 lg:mx-auto lg:px-0">
      <div
        {...aosFadeUp}
        className="flex flex-wrap gap-3 items-center justify-between border-b-[1px] border-gray-500 border-opacity-30 py-3"
      >
        <p className="text-gray-600 text-xs tracking-wider flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />
          <span>Available for new projects — responds within 24 hours</span>
        </p>
        <p className="text-gray-600 text-xs tracking-wider">
          Bangladesh · UTC+06:00 · Open to remote worldwide
        </p>
      </div>
      <div
        className="contact grid grid-cols-1 sm:grid-cols-2 sm:gap-8 lg:gap-12 lg:justify-between"
        id="contactMe"
      >
        <ContactHeader />
        <div {...aosFadeUp} className="mt-10 md:mt-0">
          <ContactUs />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
