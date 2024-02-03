"use client";

import React, { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

const Scroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    window.onscroll = function () {
      const scrollPosition = window.scrollY;
      const scrollDocPosition = document.documentElement.scrollTop;
      const viewPortHeight = window.innerHeight / 4;

      if (
        scrollPosition > viewPortHeight ||
        scrollDocPosition > viewPortHeight
      ) {
        scrollRef.current && (scrollRef.current.style.display = "block");
      } else {
        scrollRef.current && (scrollRef.current.style.display = "none");
      }
    };
  }, []);

  const handleScroll = () => {
    const audio = new Audio("/ping.mp3");
    audio.play();
    setTimeout(() => {
      document.body.scrollY = 0;
      document.documentElement.scrollTop = 0;
    }, 1000);
  };

  return (
    <button
      type="button"
      ref={scrollRef}
      onClick={handleScroll}
      className="fixed bottom-16 p-3 rounded-full bg-[#a36aff] right-20 hidden animate-bounce text-xl text-gray-200 transition-all duration-500 hover:bg-gray-200 hover:-translate-y-1.5 hover:text-[#a36aff]"
      aria-label="Button for scrolling top"
    >
      <FaArrowUp />
    </button>
  );
};

export default Scroll;
