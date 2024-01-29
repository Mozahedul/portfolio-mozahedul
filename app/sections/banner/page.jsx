"use client";

import Image from "next/image";
import TitleHero from "@/app/components/titleBanner/page";
// import BannerDetails from "../bannerDetails/page";

const Hero = () => {
  return (
    <div className="mt-24 md:grid md:grid-cols-2 md:mt-36 px-6 sm:px-10 md:16 lg:px-32 xl:px-48">
      <TitleHero />
      <div
        className="justify-self-end mt-10 md:mt-0 profile-image-gradient"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
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
