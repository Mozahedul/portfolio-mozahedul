import { inter } from "@/utils/google-fonts/fonts";

const FooterSection = () => {
  return (
    <div
      className={`mt-16 mb-4 text-center text-sm font-semibold tracking-wider text-gray-500 ${inter.className}`}
    >
      Design & built by <span className="text-[#a36aff]">Mozahedul Islam</span>
    </div>
  );
};

export default FooterSection;
