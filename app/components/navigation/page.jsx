import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <ul className="flex flex-col text-lg font-medium tracking-wide text-gray-300 md:flex-row md:text-sm md:font-semibold">
        <li className="m-5 md:m-3 lg:m-5">
          <Link href="#about" className="navBtn">
            <span className="text-cyan-300">01. </span>About
          </Link>
        </li>
        <li className="m-5 md:m-3 lg:m-5">
          <Link href="/" className="navBtn">
            {" "}
            <span className="text-cyan-300">02. </span> Experience
          </Link>
        </li>
        <li className="m-5 md:m-3 lg:m-5">
          <Link href="#work" className="navBtn">
            {" "}
            <span className="text-cyan-300">03. </span> Work
          </Link>
        </li>
        <li className="m-5 md:m-3 lg:m-5">
          <Link href="#contact" className="navBtn">
            {" "}
            <span className="text-cyan-300">04. </span> Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
