"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
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
      data-aos="slide-right"
      data-aos-duration="1000"
      className="mt-12 flex justify-center text-xl text-gray-400 lg:fixed lg:bottom-1/2 lg:right-4 lg:translate-y-1/2 lg:flex-col lg:items-center "
    >
      <ul
        className="flex rounded-3xl py-3 lg:flex-col lg:py-4 bg-[#0b1e3f]"
      >
        <li className="media-btn tooltips ">
          <ToolTip
            tipText="Messenger"
            alignToolTipText="right-8 top-0"
            tooltipsText="tooltips-text-left"
          />
          <a target="_blank" rel="noreferrer" href="https://m.me/mozahed07/">
            <PiMessengerLogo />
          </a>
        </li>
        <li className="media-btn tooltips">
          <ToolTip
            tipText="WhatsApp"
            alignToolTipText="right-8 top-0"
            tooltipsText="tooltips-text-left"
          />
          <a target="_blank" rel="noreferrer" href="https://wa.me/1738648749">
            <AiOutlineWhatsApp />
          </a>
        </li>

        <li className="media-btn tooltips " style={{ marginBottom: "0" }}>
          <ToolTip
            tipText="Skype"
            alignToolTipText="right-8 top-0"
            tooltipsText="tooltips-text-left"
          />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://join.skype.com/invite/xz3jzNbe4WVK"
          >
            <FaSkype />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Call;
