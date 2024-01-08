import AboutPage from "@/app/components/about/page";
import ProfileImage from "@/app/components/aboutImg/page";

const About = () => {
  return (
    <div
      id="about"
      className="mt-16 md:mt-48 flex flex-col md:flex-row lg:ml-48 lg:mr-48"
    >
      <AboutPage />
      <ProfileImage />
    </div>
  );
};

export default About;
