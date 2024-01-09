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
    <div className="flex justify-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-full md:w-1/2 lg:w-1/4 bg-cardHover p-6 rounded-lg"
      >
        <h2 className="text-lg font-bold text-cyan-500 mb-5 uppercase tracking-wide">
          Let Me Know
        </h2>
        <label className="text-sm font-medium text-gray-200 mb-1">Name</label>
        <input
          required
          type="text"
          name="user_name"
          placeholder="John Doe"
          className="bg-card p-2 rounded-md text-gray-300 text-sm placeholder:text-gray-600"
        />
        <label className="text-sm font-medium text-gray-200 mt-4 mb-1">
          Email
        </label>
        <input
          required
          type="email"
          name="user_email"
          placeholder="johndoe@gmail.com"
          className="bg-card p-2 rounded-md text-gray-300 text-sm placeholder:text-gray-600"
        />
        <label className="text-sm font-medium text-gray-200 mt-4 mb-1 ">
          Message
        </label>
        <textarea
          required
          placeholder="Write Message..."
          name="message"
          className="bg-card p-2 rounded-md text-gray-300 text-sm placeholder:text-gray-600"
        />
        <button
          type="submit"
          className="bg-cyan-800 cursor-pointer transition duration-500 tracking-wide p-2 mt-5 rounded-md text-gray-200 text-sm placeholder:text-gray-600 uppercase font-semibold hover:bg-cyan-900 hover:text-white"
        >
          {sendEmailMessage()}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
