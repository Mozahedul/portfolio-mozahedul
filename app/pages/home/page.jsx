"use client";

import { useEffect, useState } from "react";
import Spin from "@/app/components/animation/spinner/page";
import Scroll from "@/app/components/scrollback/page";
import Media from "@/app/components/social-media/share/page";
import Call from "@/app/components/social-media/voice/page";
import About from "@/app/sections/aboutme/page";
import Hero from "@/app/sections/banner/page";
import ContactSection from "@/app/sections/contact/page";
import FooterSection from "@/app/sections/footer/page";
import Header from "@/app/sections/header/page";
import Work from "@/app/sections/work/page";

const MainPage = () => {
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    return setIsContentLoaded(true);
  }, [setIsContentLoaded]);

  console.log("CONTENT LOADED  ==> ", isContentLoaded);

  return !isContentLoaded ? (
    <Spin />
  ) : (
    <>
      <Header />
      <Hero />
      <About />
      <Work />
      <ContactSection />
      <Call />
      <Media />
      <FooterSection />
      <Scroll />
    </>
  );
};

export default MainPage;
