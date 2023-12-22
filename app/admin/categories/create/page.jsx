"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ImSpinner6 } from "react-icons/im";
import { toastError, toastSuccess } from "@/utils/showMessage/toastReact";
import InputArchive from "@/app/components/archive/input/page";

const Category = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [projectForm, setProjectForm] = useState({ name: "" });

  const router = useRouter();

  /**
   * Handle each input field focus with onBlur
   * works when the input field loses focus
   */
  const handleInputFocus = event => {
    const { name, value } = event.target;
    setProjectForm(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  /**
   * Defines a function to be triggered when a field value changes.
   * Update the projectForm state by setProjectForm setter function by
   * modifying the previous state with the new value of the changed field.
   * The purpose of the function is to ensure that user inputs the form value properly or not.
   */
  const handleOnChangeField = event => {
    const { name, value } = event.target;
    setProjectForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const catName = formData.get("name");

    setIsLoading(true);
    const response = await fetch(`/api/categories`, {
      method: "POST",
      body: JSON.stringify({ name: catName }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.ok && (await response.json());

    // if user created, then show success message
    if (data.success) {
      setIsLoading(false);
      toastSuccess(data.success);
      router.push("/admin/categories/view");
    }

    // if user already exists, then show exist message
    if (data.errMsg) {
      setIsLoading(false);
      toastError(data.errMsg);
    }
  };

  /**
   * Check each field of the form to make sure that
   * any of the input fields are empty or not
   */
  useEffect(() => {
    const projectArr = Object.values(projectForm);
    const itemExist = projectArr.some(item => item.length < 2);

    setIsEmpty(itemExist);
  }, [projectForm]);

  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <div className="mb-4 flex w-full items-center justify-between sm:w-3/4 md:w-2/4 xl:w-2/6">
        <h2 className="text-lg font-bold text-gray-300 md:text-2xl">
          Create a Category
        </h2>
        <Link href="/admin/projects/view">
          <button
            type="button"
            className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-500 hover:bg-cyan-400 hover:text-gray-200"
          >
            View Category
          </button>
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full rounded-md bg-slate-700 p-5 sm:w-3/4 md:w-2/4 xl:w-2/6"
      >
        {/* Archive title */}
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Name<span className="text-red-400">*</span>
          </label>
          <InputArchive
            changeHandler={handleOnChangeField}
            focusHandler={handleInputFocus}
            projectForm={projectForm}
            name="name"
            placeholder="Insert name"
            fieldText={projectForm?.name}
          />
        </div>

        {/* Submit button */}
        <div className="mt-6">
          <button
            disabled={isLoading || isEmpty}
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
              "Create Category"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Category;
