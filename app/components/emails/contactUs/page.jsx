"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toastError, toastSuccess } from "@/utils/showMessage/toastReact";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j8m7yvw",
        "template_46q954m",
        form.current,
        "pBcUzFZZdfdSXxh4b"
      )
      .then(
        result => {
          result.text && toastSuccess("Your email has been sent successfully");
          console.log(result.text);
        },
        error => {
          error.text && toastError("Email is not sent! Try again later");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex justify-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-full md:w-1/2 lg:w-1/4 bg-cardHover p-6 rounded-lg"
      >
        <h2 className="text-lg font-bold text-cyan-500 mb-5 uppercase tracking-wide">
          Send Message To Me
        </h2>
        <label className="text-sm font-medium text-gray-200 mb-1">Name</label>
        <input
          type="text"
          name="user_name"
          placeholder="John Doe"
          className="bg-card p-2 rounded-md text-gray-300 text-sm placeholder:text-gray-600"
        />
        <label className="text-sm font-medium text-gray-200 mt-4 mb-1">
          Email
        </label>
        <input
          type="email"
          name="user_email"
          placeholder="johndoe@gmail.com"
          className="bg-card p-2 rounded-md text-gray-300 text-sm placeholder:text-gray-600"
        />
        <label className="text-sm font-medium text-gray-200 mt-4 mb-1 ">
          Message
        </label>
        <textarea
          placeholder="Write Message..."
          name="message"
          className="bg-card p-2 rounded-md text-gray-300 text-sm placeholder:text-gray-600"
        />
        <input
          type="submit"
          value="Send"
          className="bg-cyan-600 cursor-pointer transition duration-500 tracking-wider p-2 mt-5 rounded-md text-gray-300 text-sm placeholder:text-gray-600 uppercase font-semibold hover:bg-cyan-800 hover:text-white"
        />
      </form>
    </div>
  );
};

export default ContactUs;
