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

  const handleHomeLogo = () => {
    // For listening audio sound when user click on the menu button
    const audio = new Audio("/button-click-sound.mp3");
    audio.play();
  };
  return (
    <div
      className="animate-pulse cursor-pointer"
      onMouseEnter={handleLogoHover}
      onMouseLeave={handleLogoHoverOut}
    >
      <Link href="/" onClick={handleHomeLogo}>
        <Image
          ref={logoRef}
          src="/logo.png"
          width={45}
          height={36}
          alt="website logo"
          style={{
            aspectRatio: "1/1",
            objectFit: "contain",
          }}
        />
      </Link>
    </div>
  );
};

export default Logo;
