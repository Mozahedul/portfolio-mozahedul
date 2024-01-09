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
      className="relative animate-pulse cursor-pointer"
      onMouseEnter={handleLogoHover}
      onMouseLeave={handleLogoHoverOut}
    >
      <Link href="/">
        <Image
          ref={logoRef}
          src="/logo.png"
          width={50}
          height={50}
          alt="website logo"
          style={{
            position: "absolute",
            minWidth: 50,
            zIndex: 999,
            left: 0,
            top: 0,
          }}
        />
        <Image
          src="/logo-bg.png"
          width={50}
          height={50}
          style={{ minWidth: 50 }}
          alt="website logo background"
        />
      </Link>
    </div>
  );
};

export default Logo;
