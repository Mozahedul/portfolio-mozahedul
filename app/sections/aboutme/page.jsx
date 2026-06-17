import AboutLeftSection from "@/app/components/about/page";
import AboutRightSection from "@/app/components/aboutRight/page";

const About = () => {
  return (
    <section id="about" className="px-0 mt-8 bg-[#080C10]">
      <div className="gap-8 md:gap-16 px-4 py-4 sm:py-6 md:py-8 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 items-start">
        <AboutLeftSection />
        <AboutRightSection />
      </div>
    </section>
  );
};
export default About;
