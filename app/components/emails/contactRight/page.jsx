"use client";

import React, { useRef, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import { CiClock2, CiLock, CiStar } from "react-icons/ci";
import { LuSend } from "react-icons/lu";
import { GrShieldSecurity } from "react-icons/gr";
import { TiWarningOutline } from "react-icons/ti";
import emailjs from "@emailjs/browser";
import aosZoomIn from "@/utils/animation/aosZoomIn";
import aosFadeUp from "@/utils/animation/aosFadeUp";
// import { toastError, toastSuccess } from "@/utils/showMessage/toastReact";

const ContactRight = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(null);
  const [charCount, setCharCount] = useState(0);

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

  // handler for counting characters
  const handleCharCount = e => {
    const { value } = e.target;
    setCharCount(value.length);
  };

  return (
    <div className="bg-[#0f1014] px-4 sm:px-6 lg:px-12 py-4 sm:py-6 lg:py-16 border-l-[1px] border-r-[1px] border-b-[1px] border-gray-500 border-opacity-30">
      {/* contact form header */}
      <div className="mb-6">
        <button
          {...aosFadeUp}
          type="button"
          className="flex items-center text-xs text-purple-300 tracking-wider gap-2 border-[1px] border-purple-500 border-opacity-25 py-1 px-2 mb-6"
        >
          <LuSend />
          <span>Send a message</span>
        </button>
        <h2 {...aosFadeUp} className="text-3xl font-bold">
          <span className="text-gray-200">
            Start a conversation —<br /> tell me what you
          </span>{" "}
          <span className="text-purple-400">need.</span>
        </h2>
        <p {...aosFadeUp} className="text-gray-400 text-xs mt-4 tracking-wider">
          All fields required. I read every single message personally.
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col border-[1px] border-gray-600 border-opacity-30"
      >
        <div className="grid grid-cols-2 border-b-[1px] border-gray-600 border-opacity-30">
          <div className="flex flex-col justify-center p-4 border-r-[1px] border-gray-600 border-opacity-30">
            <label
              {...aosFadeUp}
              className="text-[10px] font-medium tracking-widest text-gray-500 mb-2 uppercase"
            >
              Full name
            </label>
            <input
              {...aosFadeUp}
              required
              type="text"
              name="user_name"
              placeholder="Your full name"
              className="bg-transparent text-gray-400 text-xs placeholder:text-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex flex-col p-4">
            <label
              {...aosFadeUp}
              className="text-[10px] font-medium tracking-widest text-gray-500 mb-2 uppercase"
            >
              Email address
            </label>
            <input
              {...aosFadeUp}
              required
              type="email"
              name="user_email"
              placeholder="example@mail.com"
              className="bg-transparent text-gray-400 text-xs placeholder:text-gray-800 focus:outline-none"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col justify-center p-4 border-b-[1px] border-gray-600 border-opacity-30">
          <label
            {...aosFadeUp}
            className="text-[10px] font-medium tracking-widest text-gray-500 mb-2 uppercase"
          >
            Your message
          </label>
          <textarea
            {...aosFadeUp}
            required
            rows={5}
            onChange={handleCharCount}
            maxLength={500}
            placeholder="Hi Mozahedul, I'd like to discuss a project with you. I need..."
            name="message"
            className="bg-transparent text-gray-400 text-xs placeholder:text-gray-800 focus:outline-none"
          />
        </div>
        {/* Show warning if user input > 500 characters */}
        {charCount === 500 && (
          <p
            {...aosFadeUp}
            className="flex items-center gap-2 text-red-500 text-xs mx-4 mt-2 bg-gray-900 tracking-wider font-semibold px-3 py-2"
          >
            <TiWarningOutline size="20" />
            <span>Maximum 500 characters reached</span>
          </p>
        )}
        <div className="flex items-center gap-6 p-4 justify-between">
          <button
            {...aosFadeUp}
            type="submit"
            className="hire-btn flex-grow cursor-pointer transition duration-500 tracking-wide py-3 text-gray-800 text-sm placeholder:text-gray-600 font-semibold hover:bg-cyan-900 hover:text-white uppercase"
            aria-label="Button for sending email message"
          >
            {sendEmailMessage()}
          </button>
          <p {...aosFadeUp} className="text-gray-300 text-xs tracking-wider">
            {charCount} / 500 characters
          </p>
        </div>
      </form>
      {/* Buttons after form */}
      <div className="mt-2 flex flex-wrap gap-2 items-center">
        <button
          {...aosFadeUp}
          type="button"
          className="flex items-center gap-2 text-gray-300 cursor-text text-xs font-light px-3 py-[6px] bg-[#22222C] tracking-widest"
        >
          <CiClock2 size="18" className="text-purple-300 border-opacity-40 " />
          <span>Reply in &lt; 24 hrs </span>
        </button>
        <button
          {...aosFadeUp}
          type="button"
          className="flex items-center gap-2 text-gray-300 cursor-text text-xs font-light px-3 py-[6px] bg-[#22222C] tracking-widest"
        >
          <GrShieldSecurity
            size="18"
            className="text-purple-300 border-opacity-40 "
          />
          <span>No spam</span>
        </button>
        <button
          {...aosFadeUp}
          type="button"
          className="flex items-center gap-2 text-gray-300 cursor-text text-xs font-light px-3 py-[6px] bg-[#22222C] tracking-widest"
        >
          <CiLock size="18" className="text-purple-300 border-opacity-40 " />
          <span>Private & secure</span>
        </button>
        <button
          {...aosFadeUp}
          type="button"
          className="flex items-center gap-2 text-gray-300 cursor-text text-xs font-light px-3 py-[6px] bg-[#22222C] tracking-widest"
        >
          <CiStar size="18" className="text-purple-300 border-opacity-40 " />
          <span>100% satisfaction</span>
        </button>
      </div>
    </div>
  );
};

export default ContactRight;
