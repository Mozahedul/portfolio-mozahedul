"use client";

import { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
import { inter } from "@/utils/google-fonts/fonts";
import "aos/dist/aos.css";

const ContactHeader = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      id="contact"
      data-aos="flip-up"
      data-aos-duration="1000"
      className={`flex flex-col justify-between py-10 ${inter.className}`}
    >
      <div>
        <h3 className="text-sm font-semibold tracking-widest text-cyan-400">
          Send a message
        </h3>
        <h2 className="mt-1 text-2xl md:text-4xl font-bold text-gray-200 textClip">
          04. Keep in touch
        </h2>
        <p className="font-md mt-4 max-w-md text-left text-sm tracking-wide text-gray-400">
          Got a question or proposal, or just want to say hello? Go ahead. I
          will try my best to get back to you.
        </p>
      </div>
      {/* Address */}
      <div className="text-left mt-4 md:mt-0">
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 bg-opacity-30 text-gray-300 p-3 rounded-full"data-aos="fade-right" data-aos-duration="500" data-aos-delay="500">
            <MdEmail />
          </div>
          <p className="flex flex-col ml-3" data-aos="fade-left" data-aos-duration="500" data-aos-delay="500">
            <strong className="text-sm font-bold text-cyan-500">Email:</strong>
            <span className="text-xs text-gray-200 tracking-wide">
              {" "}
              mozahed001@gmail.com
            </span>
          </p>
        </div>
        <div className="flex items-center my-4">
          <div className="bg-green-500 bg-opacity-30 text-gray-300 p-3 rounded-full" data-aos="fade-right" data-aos-duration="500" data-aos-delay="500">
            <FaPhone />
          </div>
          <p className="flex flex-col ml-3" data-aos="fade-left" data-aos-duration="500" data-aos-delay="500">
            <strong className="text-sm font-bold text-cyan-500">Mobile:</strong>
            <span className="text-xs text-gray-200 tracking-wide">
              {" "}
              +880-1738-648-749
            </span>
          </p>
        </div>
        <div className="flex items-center mt-4">
          <div className="bg-violet-500 bg-opacity-30 text-gray-300 p-3 rounded-full" data-aos="fade-right" data-aos-duration="500" data-aos-delay="500">
            <CgWebsite />
          </div>
          <p className="flex flex-col ml-3" data-aos="fade-left" data-aos-duration="500" data-aos-delay="500">
            <strong className="text-sm font-bold text-cyan-500">
              Blog Website:
            </strong>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://procodelearn.blogspot.com/"
              className="text-blue-500 text-xs tracking-wide"
            >
              https://procodelearn.blogspot.com/
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
