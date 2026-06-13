import { BiLogoCodepen } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import ToolTip from "@/app/components/cssFeatures/tooltips/page";

const SocialMedia = () => {
  return (
    <div className="bg-[#0608139c]">
      <div className="flex justify-start text-xl text-gray-400">
        <ul className="flex w-full gap-2">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Mozahedul"
            aria-label="Navigate to GitHub"
            className="rounded-full"
          >
            <li className="social-media-btn p-2 rounded-full tooltips bg-[#080D15] border-[1px] border-gray-800 border-opacity-40">
              <ToolTip
                tipText="GitHub"
                alignToolTipText="left-1/2 -translate-x-1/2 bottom-12"
                tooltipsText="tooltips-text-right"
              />

              <FiGithub size="18" />
            </li>
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mozahedul27/"
            aria-label="The button navigates to the Linkedin"
            className="rounded-full"
          >
            <li className="social-media-btn p-2 rounded-full tooltips bg-[#080D15] border-[1px] border-gray-800 border-opacity-40">
              <ToolTip
                tipText="Linkedin"
                alignToolTipText="left-1/2 -translate-x-1/2 bottom-12"
                tooltipsText="tooltips-text-right"
              />
              <FiLinkedin size="18" />
            </li>
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/mozahedul07"
            aria-label="Twitter or X"
            className="rounded-full"
          >
            <li className="social-media-btn p-2 rounded-full tooltips bg-[#080D15] border-[1px] border-gray-800 border-opacity-40">
              <ToolTip
                tipText="X/Twitter"
                alignToolTipText="left-1/2 -translate-x-1/2 bottom-12"
                tooltipsText="tooltips-text-right"
                aria-label="The button navigates to the Twitter"
              />

              <FaXTwitter ize="18" />
            </li>
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/mozahedul07/"
            aria-label="The button navigates to the Instagram"
            className="rounded-full"
          >
            <li className="social-media-btn p-2 rounded-full tooltips bg-[#080D15] border-[1px] border-gray-800 border-opacity-40">
              <ToolTip
                tipText="Instagram"
                alignToolTipText="left-1/2 -translate-x-1/2 bottom-12"
                tooltipsText="tooltips-text-right"
              />

              <FiInstagram size="18" />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SocialMedia;
