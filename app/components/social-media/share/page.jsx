import React, { useEffect } from "react";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoCodepen } from "react-icons/bi";
import AOS from "aos";
import ToolTip from "../../cssFeatures/tooltips/page";
import "aos/dist/aos.css";

const Media = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="mt-12 flex justify-center text-xl text-gray-400 lg:fixed lg:bottom-0 lg:left-4 lg:flex-col lg:items-center xl:left-12"
    >
      <ul className="flex lg:flex-col">
        <li className="media-btn tooltips">
          <ToolTip
            tipText="GitHub"
            alignToolTipText="left-8 top-0"
            tooltipsText="tooltips-text-right"
          />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Mozahedul"
          >
            <FiGithub />
          </a>
        </li>
        <li className="media-btn tooltips">
          <ToolTip
            tipText="Linkedin"
            alignToolTipText="left-8 top-0"
            tooltipsText="tooltips-text-right"
          />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mozahedul27/"
            title="Linkedin"
          >
            <FiLinkedin />
          </a>
        </li>
        <li className="media-btn tooltips">
          <ToolTip
            tipText="Instagram"
            alignToolTipText="left-8 top-0"
            tooltipsText="tooltips-text-right"
          />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/mozahedul07/"
            title="Instagram"
          >
            <FiInstagram />
          </a>
        </li>
        <li className="media-btn tooltips">
          <ToolTip
            tipText="X/Twitter"
            alignToolTipText="left-8 top-0"
            tooltipsText="tooltips-text-right"
          />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/mozahedul07"
            title="X/Twitter"
          >
            <FaXTwitter />
          </a>
        </li>
        <li className="media-btn tooltips">
          <ToolTip
            tipText="CodePen"
            alignToolTipText="left-8 top-0"
            tooltipsText="tooltips-text-right"
          />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/mozahedul"
            title="CodePen"
          >
            <BiLogoCodepen />
          </a>
        </li>
      </ul>
      <div
        className="hidden lg:block"
        style={{ width: "1px", height: "90px", backgroundColor: "gray" }}
      />
    </div>
  );
};

export default Media;
