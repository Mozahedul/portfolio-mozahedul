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
    const audio = new Audio("/button-click-sound.mp3");
    audio.play();

    menuShowRef.current.style.transform = "rotate(180deg)";
    menuBtnCloseRef.current.style.transform = "rotate(180deg)";
    menuShowRef.current.style.transition = "0.3s ease-in-out";

    // Blur and disable the body element
    document.querySelector("body").classList.add("body-scroll");

    setIsMenuVisible(prev => !prev);
  };

  const handleMenuClose = () => {
    const audio = new Audio("/ping.mp3");
    audio.play();

    menuShowRef.current.style.transform = "rotate(0deg)";
    menuBtnCloseRef.current.style.transform = "rotate(0deg)";
    document.querySelector("body").classList.remove("body-scroll");
    setIsMenuVisible(prev => !prev);
  };

  // For mobile device menu closing by clicking outside of the menu
  useEffect(() => {
    const handleMobileMenuClose = event => {
      if (
        menuCloseRef.current &&
        !menuCloseRef.current.contains(event.target)
      ) {
        // const audio = new Audio("/ping.mp3");
        // audio.play();

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
      className="fixed z-[666] flex justify-center px-4 left-0 top-0 right-0 bg-[#060813] border-b-[1px] border-b-[#111733ce]"
    >
      <div
        id="navMenu"
        className="my-1 w-full md:w-16 md:my-0 flex justify-between items-center"
      >
        <Logo />
        <button
          type="button"
          ref={menuShowRef}
          onClick={handleMenuShow}
          className="text-3xl text-[#a36aff] transition-all duration-500 hover:text-[#a36aff] md:hidden"
        >
          <RiMenu3Fill />
        </button>
      </div>

      {/* Navigtion menu with close button for mobile */}
      <div
        ref={menuCloseRef}
        className={`menu-btn ${isMenuVisible ? "w-3/4 sm:w-1/2" : "w-0"}`}
      >
        {/* Close button for small devices */}
        <button
          type="button"
          ref={menuBtnCloseRef}
          onClick={handleMenuClose}
          className="absolute mt-2 right-0 top-0 px-7 text-4xl text-[#a36aff] transition-all duration-500 hover:text-[#a36aff] md:hidden"
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
