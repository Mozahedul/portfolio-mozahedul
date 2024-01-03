"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ImSpinner6 } from "react-icons/im";
import Image from "next/image";
import { toastError, toastSuccess } from "@/utils/showMessage/toastReact";
import injectMetadata from "@/app/functions/metadata/setMetadata";
import Category from "@/app/components/category/page";
import Language from "@/app/components/language/page";
import InputArchive from "@/app/components/archive/input/page";
import SubCategory from "@/app/components/subCategory/page";
import ArchiveImage from "@/app/components/archive/ArchiveImage/page";

const CreateArchive = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [projectForm, setProjectForm] = useState({
    archiveTitle: "",
    anchor: "",
    github: "",
    description: "",
    language: [],
    category: "",
    subcategory: "",
    image: [],
  });

  console.log(projectForm);

  const [isEmpty, setIsEmpty] = useState(true);
  const [languages, setLanguages] = useState([]);
  const [showCategories, setShowCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [subCatId, setSubCatId] = useState("");
  // for image preview on the form
  const [imgUrl, setImgUrl] = useState([]);
  const router = useRouter();

  console.log("SHOW CATEGORY ==> ", category);

  /**
   * Handle each input field focus with onBlur
   * works when the input field loses focus
   */
  const handleInputFocus = event => {
    const { name, value } = event.target;
    console.log(name, value);
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
    console.log(name, value);
    setProjectForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // onChange event handler for image to show above the input:file field
  const handleOnChangeImageField = event => {
    console.log(event.target.files);
    const pictures = event.target.files;

    setSelectedImg(pictures[0]);

    const imagesUrl = [];
    for (let i = 0; i < pictures.length; i += 1) {
      const img = URL.createObjectURL(pictures[i]);
      const imgTypes = ["image/png", "image/jpg", "image/jpeg", "image/gif"];
      if (imgTypes.includes(pictures[i].type)) {
        imagesUrl.push(img);
      }
    }
    // for image preview on the form
    setImgUrl(imagesUrl);
    // send image to projectForm state to check the image empty
    setProjectForm(prevState => ({ ...prevState, image: imagesUrl }));
  };

  /**
   * This code handles the form submission for creating a new project.
   * It sends a POST request to the '/api/projects' endpoint with the form data.
   * If the request is successful and the project is created, a success message is shown.
   * If the project already exists, an error message is shown.
   */
  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData();
    formData.set("archiveTitle", projectForm.archiveTitle);
    formData.set("anchor", projectForm.anchor);
    formData.set("github", projectForm.github);
    formData.set("description", projectForm.description);
    formData.set("language", languages);
    formData.set("image", selectedImg);
    formData.set("category", category);
    formData.set("subcategory", subCatId);

    console.log("PROJECT FORM DATA ==> ", formData);

    setIsLoading(true);
    const response = await fetch(`/api/archive`, {
      method: "POST",
      body: formData,
    });

    const data = response.ok && (await response.json());

    // if user created, then show success message
    if (data.success) {
      setIsLoading(false);
      toastSuccess(data.success);
      router.push("/admin/archive/view");
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
    const itemExist = projectArr.some(item => item.length < 1);

    setIsEmpty(itemExist);
  }, [projectForm]);

  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <div className="mb-4 flex w-full items-center justify-between sm:w-3/4 md:w-2/4 xl:w-2/6">
        <h2 className="text-lg font-bold text-gray-300 md:text-2xl">
          Create an Archive
        </h2>
        <Link href="/admin/archive/view">
          <button
            type="button"
            className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-500 hover:bg-cyan-400 hover:text-gray-200"
          >
            View Archive
          </button>
        </Link>
      </div>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="w-full rounded-md bg-slate-700 p-5 sm:w-3/4 md:w-2/4 xl:w-2/6"
      >
        {/* Archive title */}
        <div>
          <label
            htmlFor="archiveTitle"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            ArchiveTitle<span className="text-red-400">*</span>
          </label>
          <InputArchive
            changeHandler={handleOnChangeField}
            focusHandler={handleInputFocus}
            projectForm={projectForm}
            name="archiveTitle"
            placeholder="Full Archive Title"
            fieldText={projectForm?.archiveTitle}
          />
        </div>

        {/* Archive image */}
        <div className="mt-3">
          <label
            htmlFor="title"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Image<span className="text-red-400">*</span>
          </label>
          <div className="my-2">
            {imgUrl?.length > 0 && (
              <Image
                src={imgUrl[0]}
                width={40}
                height={40}
                alt={imgUrl[0]}
                className="rounded"
              />
            )}
          </div>
          <ArchiveImage
            changeHandler={handleOnChangeImageField}
            focusHandler={handleInputFocus}
            projectForm={projectForm}
            name="image"
            fieldText={projectForm?.image}
          />
        </div>
        {/* Archive Category */}
        <div className="relative mt-3">
          <label
            htmlFor="description"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Category<span className="text-red-400">*</span>
          </label>

          <Category
            setProjectForm={setProjectForm}
            setShowCategories={setShowCategories}
            showCategories={showCategories}
            setCategory={setCategory}
            setSubCategories={setSubCategories}
          />
        </div>

        {/* Archive SubCategory */}
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
            categorysearch={category}
            setSubCatId={setSubCatId}
          />
        </div>

        {/* Anchor link */}
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
