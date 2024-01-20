"use client";

import React, { useEffect, useRef } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

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
    document.body.scrollY = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <button
      type="button"
      ref={scrollRef}
      onClick={handleScroll}
      className="fixed bottom-16 right-20 hidden animate-bounce text-4xl text-gray-200 transition-all duration-500 hover:-translate-y-1.5 hover:text-cyan-600"
    >
      <BsArrowUpCircleFill />
    </button>
  );
};

export default Scroll;
