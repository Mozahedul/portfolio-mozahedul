// import React from "react";

// const Archive = () => {
//   return (
//     <div className="flex flex-col items-center mt-8">
//       <h2 className="font-bold text-2xl text-gray-300">
//         Project Archive - Create
//       </h2>
//       <form action="#" className="bg-card rounded-lg w-80 p-8 mt-4">
//         <div>
//           <label
//             htmlFor="title"
//             className="block text-gray-300 text-sm font-medium mb-1"
//           >
//             Title
//           </label>
//           <input
//             placeholder="John Doe..."
//             className="rounded-lg text-sm placeholder:text-gray-500 text-gray-300 bg-cardHover w-full border-none outline-none p-2"
//             type="text"
//             name="title"
//             id="title"
//           />
//         </div>
//         <div className="mt-3">
//           <label
//             htmlFor="description"
//             className="block text-gray-300 text-sm font-medium mb-1"
//           >
//             Description
//           </label>
//           <textarea
//             placeholder="Insert something..."
//             className="rounded-lg text-sm placeholder:text-gray-500 text-gray-300 bg-cardHover w-full border-none outline-none p-2"
//             name="title"
//             id="title"
//             rows="2"
//           />
//         </div>

//         <div className="mt-3">
//           <label
//             htmlFor="github"
//             className="block text-gray-300 text-sm font-medium mb-1"
//           >
//             GitHub Link
//           </label>
//           <input
//             placeholder="https://github.com/"
//             className="rounded-lg text-sm placeholder:text-gray-500 text-gray-300 bg-cardHover w-full border-none outline-none p-2"
//             type="text"
//             name="github"
//             id="github"
//           />
//         </div>
//         <div className="mt-3">
//           <label
//             htmlFor="externallink"
//             className="block text-gray-300 text-sm font-medium mb-1"
//           >
//             External Link
//           </label>
//           <input
//             placeholder="https://externallink.com/"
//             className="rounded-lg text-sm placeholder:text-gray-500 text-gray-300 bg-cardHover w-full border-none outline-none p-2"
//             type="text"
//             name="externallink"
//             id="externallink"
//           />
//         </div>
//         <div className="mt-3">
//           <label
//             htmlFor="language"
//             className="block text-gray-300 text-sm font-medium mb-1"
//           >
//             Languages
//           </label>
//           <input
//             placeholder="HTML5, CSS3"
//             className="rounded-lg text-sm placeholder:text-gray-500 text-gray-300 bg-cardHover w-full border-none outline-none p-2"
//             type="text"
//             name="language"
//             id="language"
//           />
//         </div>
//         <div className="mt-3">
//           <input
//             type="submit"
//             className="hover:animate-ping hover:text-cyan-500 hover:bg-slate-900 cursor-pointer transition-all duration-500 rounded-lg text-sm placeholder:text-gray-500 text-gray-300 bg-slate-700 w-full border-none outline-none p-2"
//             value="Add Profile"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Archive;

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ImSpinner6 } from "react-icons/im";
import { toastError, toastSuccess } from "@/utils/showMessage/toastReact";
import injectMetadata from "@/app/functions/metadata/setMetadata";
import Category from "@/app/components/category/page";
import Language from "@/app/components/language/page";
import InputArchive from "@/app/components/archive/input/page";
import SubCategory from "@/app/components/subCategory/page";

const CreateArchive = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projectForm, setProjectForm] = useState({
    title: "",
    anchor: "",
    description: "",
    language: [],
    category: [],
  });

  const [isEmpty, setIsEmpty] = useState(true);
  const [languages, setLanguages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
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
   * The purpose of the function is to ensure that user inputs the form value
   * properly or not.
   */
  const handleOnChangeField = event => {
    const { name, value } = event.target;
    setProjectForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  /**
   * This code handles the form submission for creating a new project.
   * It sends a POST request to the '/api/projects' endpoint with the form data.
   * If the request is successful and the project is created, a success message is shown.
   * If the project already exists, an error message is shown.
   */
  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const entries = Array.from(formData.entries());
    const projectsFormData = Object.fromEntries(entries);

    console.log(projectsFormData);

    projectsFormData.language = languages;
    projectsFormData.category = categories;

    console.log("PROJECT FORM DATA ==> ", projectsFormData);

    setIsLoading(true);
    const response = await fetch(`/api/projects`, {
      method: "POST",
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
      router.push("/admin/projects/view");
    }

    // if user already exists, then show exist message
    if (data.errMsg) {
      setIsLoading(false);
      toastError(data.errMsg);
    }
  };

  /**
   * This useEffect is used to set the title, and description of the page
   */
  useEffect(() => {
    const pageTitle = "Projects create page - admin";
    const pageDescription = "Create project and protected for admin only";

    injectMetadata(pageTitle, pageDescription);
  }, [router]);

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
          Create an Archive
        </h2>
        <Link href="/admin/projects/view">
          <button
            type="button"
            className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-500 hover:bg-cyan-400 hover:text-gray-200"
          >
            View Archive
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
            htmlFor="title"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Title<span className="text-red-400">*</span>
          </label>
          <InputArchive
            changeHandler={handleOnChangeField}
            focusHandler={handleInputFocus}
            projectForm={projectForm}
            name="title"
            placeholder="Full Title"
            fieldText={projectForm?.title}
          />
        </div>

        {/* Project Category */}
        <div className="relative mt-3">
          <label
            htmlFor="description"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Category<span className="text-red-400">*</span>
          </label>

          <Category
            setProjectForm={setProjectForm}
            setCategories={setCategories}
            categories={categories}
          />
        </div>

        {/* Project SubCategory */}
        <div className="relative mt-3">
          <label
            htmlFor="description"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            SubCategory<span className="text-red-400">*</span>
          </label>

          <SubCategory
            setProjectForm={setProjectForm}
            setSubCategories={setSubCategories}
            subCategories={subCategories}
          />
        </div>

        {/* anchor link */}
        <div className="mt-3">
          <label
            htmlFor="anchor"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Anchor Link<span className="text-red-400">*</span>
          </label>
          <InputArchive
            changeHandler={handleOnChangeField}
            focusHandler={handleInputFocus}
            projectForm={projectForm}
            name="anchor"
            placeholder="https://anchorlink.com"
            fieldText={projectForm?.anchor}
          />
        </div>

        {/* GitHub Link */}
        <div className="mt-3">
          <label
            htmlFor="github"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Github Link<span className="text-red-400">*</span>
          </label>
          <InputArchive
            changeHandler={handleOnChangeField}
            focusHandler={handleInputFocus}
            projectForm={projectForm}
            name="github"
            placeholder="https://githublink.com"
            fieldText={projectForm?.github}
          />
        </div>

        {/* Languages */}
        <div className="relative mt-3">
          <label
            htmlFor="description"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Languages<span className="text-red-400">*</span>
          </label>
          <Language
            setProjectForm={setProjectForm}
            setLanguages={setLanguages}
            languages={languages}
          />
        </div>

        {/* Description */}
        <div className="mt-3">
          <label
            htmlFor="description"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Description<span className="text-red-400">*</span>
          </label>
          <textarea
            onChange={handleOnChangeField}
            onBlur={handleInputFocus}
            rows={3}
            name="description"
            id="description"
            placeholder="Description Address"
            className="w-full rounded-md bg-slate-500 p-2 text-sm text-gray-300"
          />
          {projectForm?.description !== "" && (
            <span className="mt-2 block text-right text-xs tracking-wide text-gray-300">
              {projectForm?.description?.length < 2
                ? "Enter at least 2 characters"
                : projectForm?.description?.length > 150
                  ? "Do not exceed 150 characters"
                  : ""}
            </span>
          )}
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
              "Create Project"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateArchive;
