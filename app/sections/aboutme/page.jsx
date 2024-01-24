import AboutPage from "@/app/components/about/page";
import AboutRight from "@/app/components/aboutRight/page";

const About = () => {
  return (
    <div
      id="about"
      className="mt-24 md:mt-28 gap-8 grid grid-cols-1 md:grid-cols-2 lg:mx-32 p-7 bg-[#0c0c21] rounded-2xl border-[2px] border-[#9bc2f518]"
    >
      <AboutPage />
      <AboutRight />
    </div>
  );
};

export default About;
