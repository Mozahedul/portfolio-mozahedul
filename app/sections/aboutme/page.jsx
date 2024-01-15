import AboutPage from "@/app/components/about/page";
// import ProfileImage from "@/app/components/aboutImg/page";

const About = () => {
  return (
    <div
      id="about"
      className="mt-12 md:mt-48 grid grid-cols-1 md:grid-cols-2 lg:mx-48"
    >
      <AboutPage />
      {/* <ProfileImage /> */}
    </div>
  );
};

export default About;
