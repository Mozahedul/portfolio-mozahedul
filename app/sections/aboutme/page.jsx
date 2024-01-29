import AboutPage from "@/app/components/about/page";
import AboutRight from "@/app/components/aboutRight/page";

const About = () => {
  return (
    <section id="about" className="px-6 sm:px-10 md:px-16 lg:px-32 xl:px-36">
      <div className="mt-24 md:mt-28 gap-8 grid p-7 grid-cols-1 md:grid-cols-2 bg-[#0c0c21] rounded-2xl border-[2px] border-[#9bc2f518]">
        <AboutPage />
        <AboutRight />
      </div>
    </section>
  );
};

export default About;
