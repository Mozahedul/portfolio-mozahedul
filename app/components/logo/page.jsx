"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Logo = () => {
  const logoRef = useRef();
  const handleLogoHover = () => {
    logoRef.current.style.transform = "translate(-3px, -3px)";
    logoRef.current.style.transition = "0.5s ease";
  };

  const handleLogoHoverOut = () => {
    logoRef.current.style.transform = "translate(0, 0)";
  };
  return (
    <div
      className="animate-pulse cursor-pointer"
      onMouseEnter={handleLogoHover}
      onMouseLeave={handleLogoHoverOut}
    >
      <Link href="/">
        <Image
          ref={logoRef}
          src="/logo.png"
          width={45}
          height={45}
          alt="website logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
