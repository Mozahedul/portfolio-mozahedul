"use client";

import Scroll from "@/app/components/scrollback/page";
import Media from "@/app/components/social-media/share/page";
import Call from "@/app/components/social-media/voice/page";
import About from "@/app/sections/aboutme/page";
import Hero from "@/app/sections/banner/page";
import ContactSection from "@/app/sections/contact/page";
import SkillSection from "@/app/sections/skills/page";
import Work from "@/app/sections/work/page";

const MainPage = () => {
  return (
    <>
      <Hero />
      <About />
      <SkillSection />
      <Work />
      <ContactSection />
      <Call />
      <Media />
      <Scroll />
    </>
  );
};

export default MainPage;
