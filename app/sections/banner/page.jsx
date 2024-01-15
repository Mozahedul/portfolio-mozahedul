import TitleHero from "@/app/components/titleBanner/page";
import BannerDetails from "../bannerDetails/page";

const Hero = () => {
  return (
    <div className="mt-24 md:mt-36 lg:mx-8 xl:mx-48">
      <TitleHero />
      <BannerDetails />
    </div>
  );
};

export default Hero;
