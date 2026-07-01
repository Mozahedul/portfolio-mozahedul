import aosFadeUp from "@/utils/animation/aosFadeUp";
import { inter } from "@/utils/google-fonts/fonts";

const FooterSection = () => {
  return (
    <div
      className={`flex flex-wrap gap-3 md:gap-0 bg-slate-950 px-4 py-2 items-center justify-center flex-col md:flex-row md:justify-between mt-6 md:mt-16 mb-4 text-center tracking-wider text-gray-200 ${inter.className}`}
    >
      <h2 className="font-extrabold text-4xl">
        M<span className="text-purple-500">.</span>
      </h2>
      <p className="text-xs"> &copy;2026. Design & built by Mozahedul Islam.</p>
      <ul className="flex items-center gap-4 text-xs">
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#work">Projects</a>
        </li>
        <li>
          <a href="/#blog">Blog</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterSection;
