"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ImSpinner6 } from "react-icons/im";
import { toastError, toastSuccess } from "@/utils/showMessage/toastReact";
import injectMetadata from "@/app/functions/metadata/setMetadata";

const EditProject = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categoryForm, setCategoryForm] = useState({
    name: "",
  });

  const param = useParams();
  const router = useRouter();

  // Handle input field focus with onBlur
  const handleInputFocus = event => {
    const { name, value } = event.target;
    setCategoryForm(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle all input fields of a form
  const handleField = event => {
    const { name, value } = event.target;
    setCategoryForm(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Form submit handler
  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");

    const projectsFormData = {
      name,
      id: param.id,
    };

    setIsLoading(true);
    const response = await fetch(`/api/categories`, {
      method: "PUT",
      body: JSON.stringify(projectsFormData),
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
   * Set metadata for the page
   * injectMetadata is a function that takes two parameters
   * @param {string} pageTitle
   * @param {string} pageDescription
   */
  useEffect(() => {
    const pageTitle = "Projects Edit page - admin";
    const pageDescription = "Edit the project for admin only";

    injectMetadata(pageTitle, pageDescription);
    // router.refresh();
  }, [router]);

  // Fetch a single project according to id from database
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(
          `/api/categories/singleCategory?categoryId=${param.id}`
        );
        const data = response.ok && (await response.json());
        console.log(data);
        setCategoryForm(data);
        // router.refresh();
      } catch (error) {
        toastError(error.message);
      }
    };
    fetchCategory();
  }, [param.id, router]);

  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <div className="mb-4 flex w-full items-center justify-between sm:w-3/4 md:w-2/4 xl:w-2/6">
        <h2 className="text-lg font-bold text-gray-300 md:text-2xl">
          Edit a Project
        </h2>
        <Link href="/admin/categories/view">
          <button
            type="button"
            className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-500 hover:bg-cyan-400 hover:text-gray-200"
          >
            View Categories
          </button>
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full rounded-md bg-slate-700 p-5 sm:w-3/4 md:w-2/4 xl:w-2/6"
      >
        {/* Category name */}
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Title<span className="text-red-400">*</span>
          </label>
          <input
            onChange={handleField}
            onBlur={handleInputFocus}
            type="text"
            name="name"
            id="name"
            defaultValue={categoryForm?.name}
            className="w-full rounded-md bg-slate-500 p-2 text-sm text-gray-300"
          />
          {categoryForm?.name !== "" && categoryForm?.name?.length < 6 ? (
            <span className="mt-2 block text-right text-xs tracking-wide text-gray-300">
              Enter atleast 6 characters
            </span>
          ) : (
            ""
          )}
        </div>

        <div className="mt-6">
          <button
            disabled={isLoading}
            type="submit"
            className={`w-full  ${
              isLoading ? "cursor-not-allowed" : "cursor-pointer"
            } rounded-md bg-cyan-600 p-2 text-center text-sm font-semibold text-gray-300 transition-all duration-500 hover:bg-cyan-500 hover:text-gray-200`}
          >
            {isLoading ? (
              <>
                <svg className="mr-2 inline h-5 w-5 animate-spin text-xl">
                  <ImSpinner6 />
                </svg>
                Processing...
              </>
            ) : (
              "Update Project"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProject;
