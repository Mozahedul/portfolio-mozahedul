"use client";

import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "@/app/components/logo/page";
import Navigation from "@/app/components/navigation/page";
import DownloadCV from "@/app/components/downloadPDF/page";

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
    <section
      ref={menuRef}
      className="fixed lg:max-w-[1280px] mx-4 md:mx-6 lg:mx-8 xl:mx-auto z-[666] flex justify-between px-4 left-0 top-0 right-0 border-[1px] border-slate-900 bg-[#0c1027] rounded-2xl mt-1"
    >
      <div
        id="navMenu"
        className="my-[2px] w-full md:w-16 md:my-0 flex justify-between items-center"
      >
        <Logo />
        {/* MOBILE NAVIGATION MENU OPENER */}
        <button
          type="button"
          ref={menuShowRef}
          onClick={handleMenuShow}
          className="text-3xl text-[#a36aff] transition-all duration-500 hover:text-[#a36aff] md:hidden mr-3"
          aria-label="Button for mobile navigation menu showing"
        >
          <RiMenu3Fill />
        </button>
      </div>

      {/* MOBILE NAVIGATION MENU CLOSER */}
      <div
        ref={menuCloseRef}
        className={`menu-btn ${isMenuVisible ? "w-3/4 sm:w-1/2" : "w-0"} bg-blue-400`}
      >
        {/* CLOSE BUTTON for small devices */}
        <button
          type="button"
          ref={menuBtnCloseRef}
          onClick={handleMenuClose}
          className="absolute mt-2 right-0 top-0 px-7 text-4xl text-[#a36aff] transition-all duration-500 hover:text-[#a36aff] md:hidden"
          aria-label="Button for mobile navigation menu closing"
        >
          <IoClose />
        </button>
        <Navigation handleMenuClose={handleMenuClose} />
      </div>
      <div className="flex items-center">
        <DownloadCV />
      </div>
    </section>
  );
};

export default Header;
