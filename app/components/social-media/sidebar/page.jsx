import Link from "next/link";
import { BiLogoCodepen } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const SocialMedia = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="mt-12 flex justify-start text-xl text-gray-400"
    >
      <ul className="flex">
        <li className="media-btn">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Mozahedul"
            aria-label="GitHub"
          >
            <FiGithub />
          </Link>
        </li>
        <li className="media-btn">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mozahedul27/"
            title="Linkedin"
            aria-label="Linkedin"
          >
            <FiLinkedin />
          </Link>
        </li>
        <li className="media-btn">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/mozahedul07/"
            title="Instagram"
            aria-label="Instagram"
          >
            <FiInstagram />
          </Link>
        </li>
        <li className="media-btn">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/mozahedul07"
            title="X/Twitter"
            aria-label="Twitter or X"
          >
            <FaXTwitter />
          </Link>
        </li>
        <li className="media-btn">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/mozahedul"
            title="CodePen"
            aria-label="Link for CodePen"
          >
            <BiLogoCodepen />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
