import React from "react";

const Navigation = () => {
  return (
    <div>
      <ul className="flex flex-col text-lg font-medium tracking-wide text-gray-300 md:flex-row md:text-sm md:font-semibold">
        <li className="m-5 md:m-3 lg:m-5">
          <a href="/" className="navBtn">
            <span className="text-cyan-300">01. </span>About
          </a>
        </li>
        <li className="m-5 md:m-3 lg:m-5">
          <a href="/" className="navBtn">
            {" "}
            <span className="text-cyan-300">02. </span> Experience
          </a>
        </li>
        <li className="m-5 md:m-3 lg:m-5">
          <a href="/" className="navBtn">
            {" "}
            <span className="text-cyan-300">03. </span> Work
          </a>
        </li>
        <li className="m-5 md:m-3 lg:m-5">
          <a href="/" className="navBtn">
            {" "}
            <span className="text-cyan-300">04. </span> Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
