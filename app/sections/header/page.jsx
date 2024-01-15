"use client";

import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "@/app/components/logo/page";
import Navigation from "@/app/components/navigation/page";
import BlogButton from "@/app/components/viewBlog/page";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuShowRef = useRef(null);
  const menuBtnCloseRef = useRef(null);
  const menuCloseRef = useRef(null);
  const menuRef = useRef(null);

  const handleMenuShow = () => {
    menuShowRef.current.style.transform = "rotate(180deg)";
    menuBtnCloseRef.current.style.transform = "rotate(180deg)";
    menuShowRef.current.style.transition = "0.3s ease-in-out";

    // Blur and disable the body element
    document.querySelector("body").classList.add("body-scroll");

    setIsMenuVisible(prev => !prev);
  };

  const handleMenuClose = () => {
    menuShowRef.current.style.transform = "rotate(0deg)";
    menuBtnCloseRef.current.style.transform = "rotate(0deg)";
    document.querySelector("body").classList.remove("body-scroll");
    setIsMenuVisible(prev => !prev);
  };

  // For mobile device menu closing
  useEffect(() => {
    const handleMobileMenuClose = event => {
      if (
        menuCloseRef.current &&
        !menuCloseRef.current.contains(event.target)
      ) {
        document.querySelector("body").classList.remove("body-scroll");
        menuShowRef.current.style.transform = "rotate(0deg)";
        menuBtnCloseRef.current.style.transform = "rotate(0deg)";
        setIsMenuVisible(false);
      }
    };
    document.addEventListener("mousedown", handleMobileMenuClose);
  }, []);

  return (
    <div
      ref={menuRef}
      className="max-w-[1400px] w-full mx-auto flex fixed z-[666] top-0 left-0 right-0 px-7 md:px-12 items-center justify-between bg-[#0b1e3f]"
    >
      <div id="navMenu" className="my-1 md:my-0 flex justify-between w-full">
        <Logo />
        <button
          type="button"
          ref={menuShowRef}
          onClick={handleMenuShow}
          className="text-3xl text-cyan-400 transition-all duration-500 hover:text-cyan-500 md:hidden"
        >
          <RiMenu3Fill />
        </button>
      </div>
      <div
        ref={menuCloseRef}
        className={`menu-btn ${isMenuVisible ? "w-4/5" : "w-0"} `}
      >
        <button
          type="button"
          ref={menuBtnCloseRef}
          onClick={handleMenuClose}
          className="absolute mt-2 right-0 top-0 px-7 text-4xl text-cyan-400 transition-all duration-500 hover:text-cyan-500 md:hidden"
        >
          <IoClose />
        </button>
        <Navigation handleMenuClose={handleMenuClose} />
        <BlogButton />
      </div>
    </div>
  );
};

export default Header;
