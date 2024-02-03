"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ImSpinner6 } from "react-icons/im";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { toastError, toastSuccess } from "@/utils/showMessage/toastReact";
import languageData from "@/utils/language/data";
import injectMetadata from "@/app/functions/metadata/setMetadata";

const EditProject = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projectForm, setProjectForm] = useState({
    title: "",
    anchor: "",
    description: "",
    language: [],
  });

  const param = useParams();
  const [checkbox, setCheckbox] = useState(false);
  const [languages, setLanguages] = useState([]);
  const router = useRouter();

  // Handle input field focus with onBlur
  const handleInputFocus = event => {
    const { name, value } = event.target;
    setProjectForm(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle all input fields of a form
  const handleField = event => {
    const { name, value } = event.target;
    setProjectForm(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Form submit handler
  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const entries = Array.from(formData.entries());
    const projectsFormData = Object.fromEntries(entries);

    projectsFormData.language = languages;
    projectsFormData.id = param.id;

    setIsLoading(true);
    const response = await fetch(`/api/projects`, {
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
      router.push("/admin/projects/view");
    }

    // if user already exists, then show exist message
    if (data.errMsg) {
      setIsLoading(false);
      toastError(data.errMsg);
    }
  };

  // Show checkbox by clicking a button
  const handleShowCheckbox = event => {
    event.preventDefault();
    setCheckbox(prevCheck => !prevCheck);
  };

  // Checkbox handler
  const handleCheckbox = event => {
    // event.preventDefault();
    const { checked, value } = event.target;
    if (checked) {
      setLanguages(prevLang => [...prevLang, value]);
    } else {
      const filteredLanguages = languages.filter(lang => lang !== value);
      setLanguages(filteredLanguages);
    }
  };

  /**
   * Set metadata for the page
   * @param {string} pageTitle
   * @param {string} pageDescription
   */
  useEffect(() => {
    const pageTitle = "Projects Edit page - admin";
    const pageDescription = "Edit the project for admin only";

    injectMetadata(pageTitle, pageDescription);
    router.refresh();
  }, [router]);

  useEffect(() => {
    setProjectForm(prevForm => ({
      ...prevForm,
      language: languages,
    }));
  }, [languages]);

  // Fetch a single project according to id from database
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(
          `/api/projects/singleProject?projectId=${param.id}`
        );
        const data = response.ok && (await response.json());
        setProjectForm(data);
        // to set the language in language button
        setLanguages(data.language);
        router.refresh();
      } catch (error) {
        toastError(error.message);
      }
    };
    fetchProject();
  }, [param.id, router]);

  return (
    <div className="mt-24 flex flex-col items-center justify-center">
      <div className="mb-4 flex w-full items-center justify-between sm:w-3/4 md:w-2/4 xl:w-2/6">
        <h2 className="text-lg font-bold text-gray-300 md:text-2xl">
          Edit a Project
        </h2>
        <Link
          href="/admin/projects/view"
          aria-label="The button navigates to project view page"
        >
          <button
            type="button"
            className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-500 hover:bg-cyan-400 hover:text-gray-200"
          >
            View Projects
          </button>
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full rounded-md bg-slate-700 p-5 sm:w-3/4 md:w-2/4 xl:w-2/6"
      >
        {/* Project title */}
        <div>
          <label
            htmlFor="title"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Title<span className="text-red-400">*</span>
          </label>
          <input
            onChange={handleField}
            onBlur={handleInputFocus}
            type="text"
            name="title"
            id="title"
            defaultValue={projectForm.title}
            placeholder="Full Title"
            className="w-full rounded-md bg-slate-500 p-2 text-sm text-gray-300"
          />
          {projectForm?.title !== "" && projectForm?.title?.length < 6 ? (
            <span className="mt-2 block text-right text-xs tracking-wide text-gray-300">
              Enter atleast 6 characters
            </span>
          ) : (
            ""
          )}
        </div>

        {/* anchor link */}
        <div className="mt-3">
          <label
            htmlFor="anchor"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Anchor Link<span className="text-red-400">*</span>
          </label>
          <input
            onChange={handleField}
            onBlur={handleInputFocus}
            type="text"
            name="anchor"
            id="anchor"
            defaultValue={projectForm.anchor}
            className="w-full rounded-md bg-slate-500 p-2 text-sm text-gray-300"
          />
          {projectForm?.anchor !== "" && (
            <span className="mt-2 block text-right text-xs tracking-wide text-gray-300">
              {projectForm?.anchor?.length < 6
                ? "Enter at least 6 characters"
                : projectForm?.anchor?.length > 150
                  ? "Do not exceed 150 characters"
                  : ""}
            </span>
          )}
        </div>

        {/* GitHub link */}
        <div className="mt-3">
          <label
            htmlFor="github"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            GitHub Link<span className="text-red-400">*</span>
          </label>
          <input
            onChange={handleField}
            onBlur={handleInputFocus}
            type="text"
            name="github"
            id="github"
            defaultValue={projectForm.github}
            className="w-full rounded-md bg-slate-500 p-2 text-sm text-gray-300"
          />
          {projectForm?.github !== "" && (
            <span className="mt-2 block text-right text-xs tracking-wide text-gray-300">
              {projectForm?.github?.length < 6
                ? "Enter at least 6 characters"
                : projectForm?.github?.length > 150
                  ? "Do not exceed 150 characters"
                  : ""}
            </span>
          )}
        </div>

        {/* Languages */}
        <div className="relative mt-3">
          <label
            htmlFor="description"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Languages<span className="text-red-400">*</span>
          </label>
          <button
            type="button"
            onClick={event => handleShowCheckbox(event)}
            className="lang-btn relative w-full rounded-md bg-slate-500 p-2 text-left text-sm text-gray-300"
          >
            {languages?.length > 0 ? (
              languages.map(lang => (
                <span
                  key={lang}
                  className="mr-2 rounded-full bg-slate-400 px-2 py-1 text-xs"
                >
                  {lang}
                </span>
              ))
            ) : (
              <span>Select Language</span>
            )}

            <BsArrowDownCircleFill
              className={`absolute right-2 top-2 transition-all duration-500 ${
                checkbox ? "-rotate-180" : "rotate-0"
              } text-lg`}
            />
          </button>
          {/* Checkbox languages */}
          <div
            className={`mt-1 transition-all duration-500 ${
              checkbox ? "block" : "hidden"
            } top-18 absolute left-0 rounded-md bg-slate-500 p-3`}
          >
            {languageData.map(item => (
              <label key={item} className="form-label">
                <span className="ml-5">{item}</span>
                <input
                  type="checkbox"
                  key={item}
                  value={item}
                  className="form-input"
                  onClick={handleCheckbox}
                  checked={languages?.includes(item)}
                />
                <span className="checkmark" />
              </label>
            ))}
          </div>
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
            onChange={handleField}
            onBlur={handleInputFocus}
            rows={3}
            name="description"
            id="description"
            defaultValue={projectForm.description}
            placeholder="Description Address"
            className="w-full rounded-md bg-slate-500 p-2 text-sm text-gray-300"
          />
          {projectForm?.description !== "" && (
            <span className="mt-2 block text-right text-xs tracking-wide text-gray-300">
              {projectForm?.description?.length < 6
                ? "Enter at least 6 characters"
                : projectForm?.description?.length > 150
                  ? "Do not exceed 150 characters"
                  : ""}
            </span>
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
