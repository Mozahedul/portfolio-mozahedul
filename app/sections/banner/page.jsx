"use client";

import Image from "next/image";
import TitleHero from "@/app/components/titleBanner/page";
// import BannerDetails from "../bannerDetails/page";

const Hero = () => {
  return (
    <div className="mt-24 md:grid md:grid-cols-2 md:mt-36 lg:mx-8 xl:mx-48">
      <TitleHero />
      <div className="justify-self-end mt-10 md:mt-0 profile-image-gradient">
        <Image
          src="/profile.png"
          width={280}
          height={280}
          alt="Profile identity"
          style={{
            width: "100%",
            height: "100%",
            aspectRatio: "1/1",
            objectFit: "contain",
            borderRadius: "10px",
          }}
        />
      </div>
      {/* <BannerDetails /> */}
    </div>
  );
};

export default Hero;
