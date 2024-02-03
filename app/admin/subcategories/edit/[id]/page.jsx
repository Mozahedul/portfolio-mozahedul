"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ImSpinner6 } from "react-icons/im";
import { toastError, toastSuccess } from "@/utils/showMessage/toastReact";
import injectMetadata from "@/app/functions/metadata/setMetadata";

const EditProject = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectOption] = useState("");
  const [subCategoryForm, setSubCategoryForm] = useState({});
  const [categories, setCategories] = useState([]);
  const param = useParams();
  const router = useRouter();

  console.log(selectedOption);

  // Handle input field focus with onBlur
  const handleInputFocus = event => {
    const { name, value } = event.target;
    setSubCategoryForm(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle all input fields of a form
  const handleField = event => {
    const { name, value } = event.target;
    setSubCategoryForm(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  /**
   * This event handler is used to select the option from select
   * and send it to the local state named selectedOption
   */
  const handleSelectedOption = event => {
    setSelectOption(event.target.value);
  };

  // Form submit handler
  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");

    const projectsFormData = {
      name,
      id: param.id,
      category: selectedOption,
    };

    setIsLoading(true);
    const response = await fetch(`/api/subcategories`, {
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
      router.push("/admin/subcategories/view");
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

  // Fetch a single subcategory according to id from database
  useEffect(() => {
    const fetchSubCategory = async () => {
      try {
        const response = await fetch(
          `/api/subcategories/singleSubCategory?subcategoryId=${param.id}`
        );
        const data = response.ok && (await response.json());
        console.log(data);
        setSelectOption(data?.category?._id);
        setSubCategoryForm(data);
        // router.refresh();
      } catch (error) {
        toastError(error.message);
      }
    };
    fetchSubCategory();
  }, [param.id, setSubCategoryForm, setSelectOption]);

  // Load all category from database
  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        const data = response.ok && (await response.json());
        setCategories(data.categories);
      } catch (error) {
        console.log("Error in category fetching");
      }
    };
    fetchAllCategories(setCategories);
  }, []);

  return (
    <div className="mt-24 flex flex-col items-center justify-center">
      <div className="mb-4 flex w-full items-center justify-between sm:w-3/4 md:w-2/4 xl:w-2/6">
        <h2 className="text-lg font-bold text-gray-300 md:text-2xl">
          Edit a Project
        </h2>
        <Link
          href="/admin/subcategories/view"
          aria-label="The button navigates to the subCategory view page"
        >
          <button
            type="button"
            className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-500 hover:bg-cyan-400 hover:text-gray-200"
            aria-label="Button for subCategory view"
          >
            View SubCategories
          </button>
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full rounded-md bg-slate-700 p-5 sm:w-3/4 md:w-2/4 xl:w-2/6"
      >
        {/* SubCategory name */}
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
            defaultValue={subCategoryForm?.name}
            className="w-full rounded-md bg-slate-500 p-2 text-sm text-gray-300"
          />
          {subCategoryForm?.name !== "" && subCategoryForm?.name?.length < 6 ? (
            <span className="mt-2 block text-right text-xs tracking-wide text-gray-300">
              Enter atleast 6 characters
            </span>
          ) : (
            ""
          )}
        </div>

        {/* subcategory List */}
        <div className="mt-3">
          <label
            htmlFor="name"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Category Name<span className="text-red-400">*</span>
          </label>
          <select
            name="cat"
            id="cat"
            className="w-full p-2 border-none outline-none rounded-md"
            value={selectedOption}
            // defaultValue={subCategoryForm?.category?.name}
            onChange={handleSelectedOption}
          >
            <option>{subCategoryForm?.category?.name}</option>
            {categories.length > 0 &&
              categories
                .filter(cat => cat._id !== subCategoryForm?.category?._id)
                .map(category => (
                  <option key={category?._id} value={category?._id}>
                    {category?.name}
                  </option>
                ))}
          </select>
        </div>

        <div className="mt-6">
          <button
            disabled={isLoading}
            type="submit"
            className={`w-full  ${
              isLoading ? "cursor-not-allowed" : "cursor-pointer"
            } rounded-md bg-cyan-600 p-2 text-center text-sm font-semibold text-gray-300 transition-all duration-500 hover:bg-cyan-500 hover:text-gray-200`}
            aria-label="Button for updating project"
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
