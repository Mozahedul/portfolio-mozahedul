"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProfileImage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Image
      data-aos="fade-up"
      data-aos-duration="1000"
      src="/profile-img.png"
      width={320}
      height={320}
      alt="profile avatar"
      priority
      className="profile-img md:ml-10 mt-14"
      style={{
        objectFit: "contain",
        objectPosition: "left top",
        width: "100%",
        height: "100%",
        maxWidth: "320px",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "all 0.5s ease-in-out",
      }}
    />
  );
};

export default ProfileImage;
