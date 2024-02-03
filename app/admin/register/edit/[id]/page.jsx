"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { toastError, toastSuccess } from "@/utils/showMessage/toastReact";

// const userInfo = { name: "", email: "", password: "" };
const UpdateUserRegister = () => {
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [isConfPwdVisible, setIsConfPwdVisible] = useState(false);
  const [user, setUser] = useState({});

  const router = useRouter();
  const params = useParams();

  /**
   * Show and hide password by clicking on the
   * hide or show button with a function
   */
  const handleTogglePwd = event => {
    event.preventDefault();
    setIsPwdVisible(prev => !prev);
  };

  // for password confirmation visibility
  const handleTglConfPwd = event => {
    event.preventDefault();
    setIsConfPwdVisible(prev => !prev);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const entries = Array.from(formData.entries());
    const projectsFormData = Object.fromEntries(entries);

    // Add id to user for updating the user
    projectsFormData.id = user._id;

    const response = await fetch("/api/users", {
      method: "PUT",
      body: JSON.stringify(projectsFormData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.ok && (await response.json());

    // // if user created, then show success message
    if (data.success) {
      toastSuccess(data.success);
      router.push("/admin/register/view");
    }

    // // if user already exists, then show exist message
    if (data.errMsg) {
      toastError(data.errMsg);
    }
  };

  useEffect(() => {
    // Fetch a single user info from db
    try {
      const fetchUser = async () => {
        const response = await fetch(
          `/api/users/singleUser?userId=${params.id}`
        );
        const data = response.ok && (await response.json());

        setUser(data);
      };
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  }, [params.id]);

  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <div className="mb-4 flex w-full items-center justify-between sm:w-3/4 md:w-2/4 xl:w-2/6">
        <h2 className="text-lg font-bold text-gray-300 md:text-2xl">
          Edit a User
        </h2>
        <Link
          href="/admin/register/view"
          aria-label="The button navigates to the user view page"
        >
          <button
            type="button"
            className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-500 hover:bg-cyan-400 hover:text-gray-200"
            aria-label="Button for viewing user"
          >
            View User
          </button>
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full rounded-md bg-slate-700 p-5 sm:w-3/4 md:w-2/4 xl:w-2/6"
      >
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Name<span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={user.name}
            className="w-full rounded-md bg-slate-500 p-2 text-sm text-gray-300"
          />
        </div>

        <div className="mt-3">
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Email<span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={user.email}
            className="w-full rounded-md bg-slate-500 p-2 text-sm text-gray-300"
          />
        </div>
        <div className="relative mt-3">
          <label
            htmlFor="password"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Password<span className="text-red-400">*</span>
          </label>
          <input
            type={isPwdVisible ? "text" : "password"}
            name="password"
            id="password"
            defaultValue={user.password}
            className="w-full rounded-md bg-slate-500 p-2 text-sm text-gray-300"
          />

          {/* Show and hide password */}
          <button
            type="button"
            className="absolute right-3 top-8 text-xl"
            onClick={handleTogglePwd}
            aria-label="Button for showing and hiding password"
          >
            {isPwdVisible ? <BsEyeSlashFill /> : <BsEyeFill />}
          </button>
        </div>
        <div className="relative mt-3">
          <label
            htmlFor="confirmPassword"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Confirm Password<span className="text-red-400">*</span>
          </label>
          <input
            type={isConfPwdVisible ? "text" : "password"}
            // name="confirmPassword"
            // id="confirmPassword"
            placeholder="xxxxxx"
            className="w-full rounded-md bg-slate-500 p-2 text-sm text-gray-300"
          />
          <button
            type="button"
            className="absolute right-3 top-8 text-xl"
            onClick={handleTglConfPwd}
            aria-label="Button for showing and hiding password"
          >
            {isConfPwdVisible ? <BsEyeSlashFill /> : <BsEyeFill />}
          </button>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full cursor-pointer rounded-md bg-cyan-600 p-2 text-sm font-semibold text-gray-300 transition-all duration-500 hover:bg-cyan-500 hover:text-gray-200"
            aria-label="Button for updating user"
          >
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUserRegister;
