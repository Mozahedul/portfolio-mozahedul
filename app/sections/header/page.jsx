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

  /**
   * For mobile device menu closing
   */
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

  /**
   * For showing fixed navigation bar afer
   * scrolling device viewport height
   */
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     const scrollPosition = window.scrollY;
  //     const viewPortHeight = window.innerHeight / 5;
  //     if (scrollPosition > viewPortHeight) {
  //       menuRef.current?.classList.add("navbar-fixed");
  //     } else {
  //       menuRef.current?.classList.remove("navbar-fixed");
  //     }
  //     if (menuRef.current && window.innerWidth < 640) {
  //       menuRef.current.style.paddingTop = "5px";
  //       menuRef.current.style.paddingBottom = "5px";
  //     }
  //   });
  // }, []);

  return (
    <div ref={menuRef} className="flex w-full items-center justify-between">
      <Logo />
      <button
        type="button"
        ref={menuShowRef}
        onClick={handleMenuShow}
        className="text-3xl text-cyan-400 transition-all duration-500 hover:text-cyan-500 md:hidden"
      >
        <RiMenu3Fill />
      </button>

      <div
        ref={menuCloseRef}
        className={`menu-btn ${isMenuVisible ? "w-4/5" : "w-0"} `}
      >
        <button
          type="button"
          ref={menuBtnCloseRef}
          onClick={handleMenuClose}
          className="absolute right-10 top-10 text-4xl text-cyan-400 transition-all duration-500 hover:text-cyan-500 md:hidden"
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
