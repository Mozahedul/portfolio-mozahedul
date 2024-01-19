"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

import "aos/dist/aos.css";

const BannerDetails = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-1 md:gap-8 mt-10 md:mt-16">
      <section className="inline-grid items-center gap-y-6 py-8">
        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
          <h2 className="tracking-wide uppercase text-gray-500 text-sm mb-1">
            Lives in{" "}
          </h2>
          <p className="text-xs text-gray-300 tracking-wide leading-5">
            Tepamadhupur, Kaunia <br />
            Rangpur, Bangladesh
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
          <h2 className="tracking-wide uppercase text-gray-500 text-sm mb-1">
            Special Expertise
          </h2>
          <p className="text-xs text-gray-300 tracking-wide leading-5">
            eCommerce platform development
            <br />
            with full functionalities
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
          <h2 className="tracking-wide uppercase text-gray-500 text-sm mb-1">
            Hobbies{" "}
          </h2>
          <p className="text-xs text-gray-300 tracking-wide leading-5">
            Hiking, Gaming, Swimming,
            <br /> Cooking, Drawing
          </p>
        </div>
      </section>
      <section>
        <Image
          data-aos="zoom-in"
          data-aos-duration="500"
          src="/profile-image.jpg"
          width={300}
          height={300}
          alt="Profile"
          style={{
            borderRadius: "40px",
            width: "100%",
            height: "100%",
          }}
        />
      </section>
      <section className="inline-grid py-8 items-center gap-y-6">
        <div
          className="text-right"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <h2 className="tracking-wide uppercase text-gray-500 text-sm mb-1">
            Experience{" "}
          </h2>
          <p className="text-xs text-gray-300 tracking-wide leading-5">
            I have 5+ years of experience
            <br /> as a web developer
          </p>
        </div>
        <div
          className="text-right"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <h2 className="tracking-wide uppercase text-gray-500 text-sm mb-1">
            Projects done
          </h2>
          <p className="text-xs text-gray-300 tracking-wide leading-5">
            I have crafted 49 websites
            <br /> so far
          </p>
        </div>
        <div
          className="text-right"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <h2 className="tracking-wide uppercase text-gray-500 text-sm mb-1">
            Certifications
          </h2>
          <p className="text-xs text-gray-300 tracking-wide leading-5">
            CIW Web specialist
            <br /> New Horizons CLC, USA
          </p>
        </div>
      </section>
    </div>
  );
};

export default BannerDetails;
