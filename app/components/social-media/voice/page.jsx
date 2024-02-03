"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaSkype } from "react-icons/fa";
import { PiMessengerLogo } from "react-icons/pi";
import ToolTip from "../../cssFeatures/tooltips/page";

const Call = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="500"
      className="mt-12 flex justify-center text-gray-300 lg:h-screen lg:fixed lg:right-4 lg:top-0 lg:flex-col lg:items-center "
    >
      <ul className="flex rounded-3xl px-2 md:px-0 py-1 md:py-2 lg:flex-col lg:py-3 voice-bg-gradient border-[1px] border-[#a36aff]">
        <li className="media-btn tooltips py-1">
          <ToolTip
            tipText="Messenger"
            alignToolTipText="right-8 top-1"
            tooltipsText="tooltips-text-left"
          />
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://m.me/mozahed07/"
            aria-label="The button navigates to the Facebook Messenger"
          >
            <PiMessengerLogo />
          </Link>
        </li>
        <li className="media-btn tooltips py-1">
          <ToolTip
            tipText="WhatsApp"
            alignToolTipText="right-8 top-0"
            tooltipsText="tooltips-text-left"
          />
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/1738648749"
            aria-label="The button navigates to the WhatsApp"
          >
            <AiOutlineWhatsApp />
          </Link>
        </li>

        <li className="media-btn tooltips py-1" style={{ marginBottom: "0" }}>
          <ToolTip
            tipText="Skype"
            alignToolTipText="right-8 top-0"
            tooltipsText="tooltips-text-left"
          />
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://join.skype.com/invite/xz3jzNbe4WVK"
            aria-label="The button navigates to the Skype"
          >
            <FaSkype />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Call;
