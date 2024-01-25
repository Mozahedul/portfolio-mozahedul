"use client";

import React, { useRef, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import emailjs from "@emailjs/browser";
// import { toastError, toastSuccess } from "@/utils/showMessage/toastReact";

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(null);

  const sendEmail = async e => {
    e.preventDefault();

    try {
      setLoading(true);
      const result = await emailjs.sendForm(
        "service_j8m7yvw",
        "template_46q954m",
        form.current,
        "pBcUzFZZdfdSXxh4b"
      );

      if (result?.text) {
        setLoading(false);
        setSuccess(result.text);
      }
    } catch (err) {
      setLoading(false);
      setError(err.text);
    }

    // .then(
    //   result => {
    //     setLoading(true);
    //     result.text && toastSuccess("Your email has been sent successfully");
    //     console.log(result.text);
    //   },
    //   error => {
    //     error.text && toastError("Email is not sent! Try again later");
    //     console.log(error.text);
    //   }
    // );
  };

  const sendEmailMessage = () => {
    if (loading) {
      return (
        <>
          <svg
            className="animate-spin w-5 h-5 mr-2 text-xl inline"
            viewBox="0 0 20 20"
          >
            <CgSpinner />
          </svg>
          Sending Message...
        </>
      );
    }

    if (error) {
      return (
        <>
          <MdError className="text-red-400 mr-2 inline" /> Send Failed!
        </>
      );
    }

    if (success) {
      const audio = new Audio("/success.mp3");
      audio.play();
      return (
        <>
          <FaCircleCheck className="text-green-600 mr-2 inline text-lg" />
          Message Sent
        </>
      );
    }

    return "Send Message";
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-[#0c0c21] border-[2px] border-[#9bc2f518] flex flex-col p-6 rounded-2xl"
      >
        <h2
          className="text-lg mb-5 uppercase tracking-wide"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <strong className="text-gray-200 tracking-wide font-bold">
            Got a Project?
          </strong>
          <br />{" "}
          <span className="text-[#a36aff] tracking-wide font-semibold">
            Let's Talk!
          </span>
        </h2>
        <label
          className="text-sm font-medium text-gray-200 mb-1"
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          Name
        </label>
        <input
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="200"
          required
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="bg-card py-3 px-4 rounded-full text-gray-300 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#a36affb4]"
        />
        <label
          className="text-sm font-medium text-gray-200 mt-5 mb-1"
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          Email
        </label>
        <input
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="200"
          required
          type="email"
          name="user_email"
          placeholder="example@mail.com"
          className="bg-card py-3 px-4 rounded-full text-gray-300 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#a36affb4]"
        />
        <label
          className="text-sm font-medium text-gray-200 mt-5 mb-1"
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          Message
        </label>
        <textarea
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="200"
          required
          placeholder="Write Your Message..."
          name="message"
          className="bg-card py-3 px-4 rounded-full text-gray-300 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#a36affb4]"
        />
        <button
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="200"
          type="submit"
          className="hire-btn cursor-pointer transition duration-500 tracking-widest p-2 mt-8 text-gray-800 text-sm placeholder:text-gray-600 font-semibold hover:bg-cyan-900 hover:text-white uppercase"
        >
          {sendEmailMessage()}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
