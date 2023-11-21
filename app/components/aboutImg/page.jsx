import Image from "next/image";
import React from "react";

const ProfileImage = () => {
  return (
    <Image
      src="/profile-img.png"
      width={320}
      height={320}
      alt="profile avatar"
      priority
      className="profile-img ml-10 mt-14"
      style={{
        objectFit: "contain",
        objectPosition: "left top",
        width: "100%",
        height: "100%",
        maxWidth: "320px",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "0.5s ease-in-out",
      }}
    />
  );
};

export default ProfileImage;
