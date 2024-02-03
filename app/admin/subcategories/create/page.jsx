"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ImSpinner6 } from "react-icons/im";
import { toastError, toastSuccess } from "@/utils/showMessage/toastReact";
import InputArchive from "@/app/components/archive/input/page";

const SubCategory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [projectForm, setProjectForm] = useState({ name: "" });
  const [categories, setCategories] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
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
    const subCatName = formData.get("name");

    const subCategories = {
      name: subCatName,
      category: selectedOption,
    };

    setIsLoading(true);
    const response = await fetch(`/api/subcategories`, {
      method: "POST",
      body: JSON.stringify(subCategories),
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
   * Check each field of the form to make sure that
   * any of the input fields are empty or not
   */
  useEffect(() => {
    const projectArr = Object.values(projectForm);
    const itemExist = projectArr.some(item => item.length < 2);

    setIsEmpty(itemExist);
  }, [projectForm]);

  /**
   * This useEffect is for the fetching categories from database and
   * sent to the local state with setter function named setCategories
   */
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("/api/categories");
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategories();
  }, [setCategories]);

  /**
   *
   */
  const handleSelectedOption = event => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="mt-24 flex flex-col items-center justify-center">
      <div className="mb-4 flex w-full items-center justify-between sm:w-3/4 md:w-2/4 xl:w-2/6">
        <h2 className="text-lg font-bold text-gray-300 md:text-2xl">
          Create a SubCategory
        </h2>
        <Link
          href="/admin/subcategories/view"
          aria-label="The button navigates to subCategory view page"
        >
          <button
            type="button"
            className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-500 hover:bg-cyan-400 hover:text-gray-200"
          >
            View SubCategory
          </button>
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full rounded-md bg-slate-700 p-5 sm:w-3/4 md:w-2/4 xl:w-2/6"
      >
        {/* Subcategory name */}
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            SubCategory Name<span className="text-red-400">*</span>
          </label>
          <InputArchive
            changeHandler={handleOnChangeField}
            focusHandler={handleInputFocus}
            projectForm={projectForm}
            name="name"
            placeholder="SubCategory name"
            fieldText={projectForm?.name}
          />
        </div>

        {/* category List */}
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
            onChange={handleSelectedOption}
          >
            <option>Select Atleast One Category</option>
            {categories.map(category => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
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
              "Create SubCategory"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubCategory;
