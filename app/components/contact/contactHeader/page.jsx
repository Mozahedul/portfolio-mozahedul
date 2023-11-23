import { useEffect } from "react";
import AOS from "aos";
import { inter } from "@/utils/google-fonts/fonts";
import "aos/dist/aos.css";

const ContactHeader = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="flip-up"
      data-aos-duration="500"
      className={`mt-36 flex flex-col items-center ${inter.className}`}
    >
      <h3 className="text-sm font-semibold tracking-widest text-cyan-400">
        04. Send a message
      </h3>
      <h2 className="mt-3 text-4xl font-bold text-gray-200">Keep in touch</h2>
      <p className="font-md mt-4 max-w-md text-center text-gray-400">
        Got a question or proposal, or just want to say hello? Go ahead. I will
        try my best to get back to you.
      </p>
    </div>
  );
};

export default ContactHeader;
