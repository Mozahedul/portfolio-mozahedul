import React, { useEffect } from "react";
// import AOS from "aos";
import ContactHeader from "@/app/components/contact/contactHeader/page";
// import "aos/dist/aos.css";

const ContactSection = () => {
  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);
  return (
    <>
      <ContactHeader />
      {/* <div data-aos="fade-left" data-aos-duration="500"> */}
      <button type="button" className="btn mx-auto my-6 block lg:my-10">
        <a href="mailto:mozahed001@gmail.com">Email Me</a>
      </button>
      {/* </div> */}
    </>
  );
};

export default ContactSection;
