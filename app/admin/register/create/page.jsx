"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { ImSpinner6 } from "react-icons/im";
import { toastError, toastSuccess } from "@/utils/showMessage/toastReact";
import Header from "@/app/sections/header/page";
import FooterSection from "@/app/sections/footer/page";

const UserRegister = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [isEmpty, setIsEmpty] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();

  /**
   * Handle input field focus with onBlur
   */
  const handleInputFocus = event => {
    const { name, value } = event.target;
    setUserForm(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  /**
   * Show and hide password by clicking on the
   * hide or show button with a function
   */
  const handleTogglePassword = event => {
    event.preventDefault();
    setIsPasswordVisible(prev => !prev);
  };

  const handleToggleConfirmPassword = event => {
    event.preventDefault();
    setIsConfirmPasswordVisible(prev => !prev);
  };

  // Handle all input fields of a form
  const handleField = event => {
    const { name, value } = event.target;
    setUserForm(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const entries = Array.from(formData.entries());
    const projectsFormData = Object.fromEntries(entries);

    setIsLoading(true);
    const response = await fetch(`/api/users`, {
      method: "POST",
      body: JSON.stringify(projectsFormData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.ok && (await response.json());

    console.log(data);

    // if user created, then show success message
    if (data.success) {
      setIsLoading(false);
      toastSuccess(data.success);
      router.push("/admin/register/view");
    }

    // if user already exists, then show exist message
    if (data.errMsg) {
      setIsLoading(false);
      toastError(data.errMsg);
    }
  };

  // Check email validity
  const checkEmailValidity = email => {
    // prettier-ignore
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g
    const result = regex.test(email);
    return result;
  };

  // Check password matching with confirm password
  const matchPasswords = (pwd, confPwd) => {
    if (pwd.length > 5 && confPwd.length > 5) {
      const regex = new RegExp("^" + confPwd + "$");
      const isPasswordMatched = pwd.match(regex);
      return isPasswordMatched;
    }
    return true;
  };

  // Check any of the input field of a from is empty or not
  useEffect(() => {
    const projectArr = Object.values(userForm);
    const itemExist = projectArr.some(item => item.length < 2);

    setIsEmpty(itemExist);
  }, [userForm]);

  return (
    <>
      <Header />
      <div className="mt-8 flex flex-col items-center justify-center">
        <div className="mb-4 flex w-full items-center justify-between sm:w-3/4 md:w-2/4 xl:w-2/6">
          <h2 className="text-lg font-bold text-gray-300 md:text-2xl">
            Create a User
          </h2>
          <Link href="/admin/register/view">
            <button
              type="button"
              className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-500 hover:bg-cyan-400 hover:text-gray-200"
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
              onChange={handleField}
              onBlur={handleInputFocus}
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md bg-slate-500 p-2 text-sm text-gray-300"
            />
            {userForm.name !== "" && userForm.name.length < 6 ? (
              <span className="mt-2 block text-right text-xs tracking-wide text-gray-300">
                Enter atleast 6 characters
              </span>
            ) : (
              ""
            )}
          </div>

          <div className="mt-3">
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-semibold text-gray-300"
            >
              Email<span className="text-red-400">*</span>
            </label>
            <input
              onChange={handleField}
              onBlur={handleInputFocus}
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="w-full rounded-md bg-slate-500 p-2 text-sm text-gray-300"
            />
            {userForm.email !== "" && !checkEmailValidity(userForm.email) ? (
              <span className="mt-2 block text-right text-xs tracking-wide text-gray-300">
                Enter a valid E-mail address
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="relative mt-3">
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-semibold text-gray-300"
            >
              Password<span className="text-red-400">*</span>
            </label>
            <input
              onChange={handleField}
              onBlur={handleInputFocus}
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              id="password"
              placeholder="xxxxxx"
              className="w-full rounded-md bg-slate-500 p-2 text-sm text-gray-300"
            />
            {userForm.password !== "" && userForm.password.length < 6 ? (
              <span className="mt-2 block text-right text-xs tracking-wide text-gray-300">
                Enter atleast 6 characters
              </span>
            ) : (
              ""
            )}

            {/* Show and hide password */}
            <button
              type="button"
              className="absolute right-3 top-8 text-xl"
              onClick={handleTogglePassword}
            >
              {isPasswordVisible ? <BsEyeSlashFill /> : <BsEyeFill />}
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
              type={isConfirmPasswordVisible ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              onChange={handleField}
              onBlur={handleInputFocus}
              placeholder="xxxxxx"
              className="w-full rounded-md bg-slate-500 p-2 text-sm text-gray-300"
            />

            {/* Show and hide confirm password */}
            {userForm.confirmPassword !== "" &&
            userForm.confirmPassword.length < 6 ? (
              <span className="mt-2 block text-right text-xs tracking-wide text-gray-300">
                Enter atleast 6 characters
              </span>
            ) : matchPasswords(userForm.password, userForm.confirmPassword) ? (
              <span className="mt-2 block text-right text-xs tracking-wide text-gray-300">
                Password Matched
              </span>
            ) : (
              ""
            )}
            <button
              type="button"
              className="absolute right-3 top-8 text-xl"
              onClick={handleToggleConfirmPassword}
            >
              {isConfirmPasswordVisible ? <BsEyeSlashFill /> : <BsEyeFill />}
            </button>
          </div>
          <div className="mt-6">
            <button
              disabled={isLoading}
              type="submit"
              className={`w-full  ${
                isLoading || isEmpty ? "cursor-not-allowed" : "cursor-pointer"
              } rounded-md bg-cyan-600 p-2 text-center text-sm font-semibold text-gray-300 transition-all duration-500 hover:bg-cyan-500 hover:text-gray-200`}
            >
              {isLoading && isEmpty ? (
                <>
                  <svg className="mr-2 inline h-5 w-5 animate-spin text-xl">
                    <ImSpinner6 />
                  </svg>
                  Processing...
                </>
              ) : (
                "Create User"
              )}
            </button>
          </div>
        </form>
      </div>
      <FooterSection />
    </>
  );
};

export default UserRegister;
