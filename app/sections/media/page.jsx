import { BiLogoCodepen } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import ToolTip from "@/app/components/cssFeatures/tooltips/page";

const SocialMedia = () => {
  return (
    <div className="absolute w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 left-1/2 p-2 md:p-3 lg:p-4 -translate-x-1/2 -top-8 md:-top-12 border-[1px] border-[#9bc2f523] bg-[#0608139c] rounded-full">
      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        className="flex justify-start text-xl text-[#ffac5ec4]"
      >
        <ul className="flex w-full justify-between">
          <li className="social-media-btn p-2 md:p-3 rounded-full tooltips bg-[#ffac5e0a]">
            <ToolTip
              tipText="GitHub"
              alignToolTipText="left-1/2 -translate-x-1/2 bottom-12"
              tooltipsText="tooltips-text-right"
            />
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Mozahedul"
              aria-label="The button navigates to the GitHub"
            >
              <FiGithub />
            </Link>
          </li>
          <li className="social-media-btn p-2 md:p-3                           rounded-full tooltips bg-[#ffac5e0a]">
            <ToolTip
              tipText="Linkedin"
              alignToolTipText="left-1/2 -translate-x-1/2 bottom-12"
              tooltipsText="tooltips-text-right"
            />
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/mozahedul27/"
              aria-label="The button navigates to the Linkedin"
            >
              <FiLinkedin />
            </Link>
          </li>
          <li className="social-media-btn p-2 md:p-3                           rounded-full tooltips bg-[#ffac5e0a]">
            <ToolTip
              tipText="Instagram"
              alignToolTipText="left-1/2 -translate-x-1/2 bottom-12"
              tooltipsText="tooltips-text-right"
            />
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/mozahedul07/"
              aria-label="The button navigates to the Instagram"
            >
              <FiInstagram />
            </Link>
          </li>
          <li className="social-media-btn p-2 md:p-3                           rounded-full tooltips bg-[#ffac5e0a]">
            <ToolTip
              tipText="X/Twitter"
              alignToolTipText="left-1/2 -translate-x-1/2 bottom-12"
              tooltipsText="tooltips-text-right"
              aria-label="The button navigates to the Twitter"
            />
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/mozahedul07"
              aria-label="Twitter or X"
            >
              <FaXTwitter />
            </Link>
          </li>
          <li className="social-media-btn p-2 md:p-3                           rounded-full tooltips bg-[#ffac5e0a]">
            <ToolTip
              tipText="CodePen"
              alignToolTipText="left-1/2 -translate-x-1/2 bottom-12"
              tooltipsText="tooltips-text-right"
              aria-label="The button navigates to the Codepen"
            />
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://codepen.io/mozahedul"
            >
              <BiLogoCodepen />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialMedia;
