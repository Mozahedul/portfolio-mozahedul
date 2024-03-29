"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ImSpinner6 } from "react-icons/im";
import { BsArrowDownCircleFill } from "react-icons/bs";
import Image from "next/image";
import { toastError, toastSuccess } from "@/utils/showMessage/toastReact";
import languageData from "@/utils/language/data";
import injectMetadata from "@/app/functions/metadata/setMetadata";
import ArchiveImage from "@/app/components/archive/ArchiveImage/page";

const EditArchive = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [archiveForm, setArchiveForm] = useState({
    title: "",
    image: "",
    anchor: "",
    github: "",
    category: "",
    subcategory: "",
    description: "",
    language: [],
  });

  const param = useParams();
  const [checkbox, setCheckbox] = useState(false);
  const [categoryCheckbox, setCategoryCheckbox] = useState(false);
  const [subCategoryCheckbox, setSubCategoryCheckbox] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [catId, setCatId] = useState("");
  const [subCatId, setSubCatId] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  // for image preview on the form
  const [imgUrl, setImgUrl] = useState([]);
  const router = useRouter();

  console.log(catId);

  console.log(categories);
  console.log("ARCHIVE FORM DATA  => ", archiveForm);

  // Handle input field focus with onBlur
  const handleInputFocus = event => {
    const { name, value } = event.target;
    setArchiveForm(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle all input fields of a form
  const handleField = event => {
    const { name, value } = event.target;
    setArchiveForm(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Form submit handler
  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData();

    formData.set("title", archiveForm.title);
    formData.set("description", archiveForm.description);
    formData.set("anchor", archiveForm.anchor);
    formData.set("github", archiveForm.github);
    formData.set("publicId", archiveForm.publicId);
    formData.set("language", languages);
    formData.set("category", catId);
    formData.set("subcategory", subCatId);
    formData.set("id", param.id);
    if (selectedImg) {
      formData.set("image", selectedImg);
    }

    setIsLoading(true);
    const response = await fetch(`/api/archive`, {
      method: "PUT",
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

  // Show checkbox by clicking a button
  const handleShowCheckbox = event => {
    event.preventDefault();
    setCheckbox(prevCheck => !prevCheck);
  };

  // Show category checkbox by clicking a button
  const handleShowCategoryCheckbox = event => {
    event.preventDefault();
    setCategoryCheckbox(prevCheck => !prevCheck);
  };

  // Show subcategory checkbox by clicking a button
  const handleShowSubCategoryCheckbox = event => {
    event.preventDefault();
    setSubCategoryCheckbox(prevCheck => !prevCheck);
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

  // Category checkbox handler
  const handleCategoryCheckbox = (event, catgId) => {
    const { checked, value } = event.target;
    console.log(checked, value);
    if (checked) {
      setCategories([]);
      setCategories(prevCat => [...prevCat, value]);
      setCatId(catgId);
    } else {
      const filteredCats = categories.filter(cat => cat !== value);
      setCategories(filteredCats);
      setCatId("");
    }
  };

  // Category checkbox handler
  const handleSubCategoryCheckbox = (event, catgId) => {
    // event.preventDefault();
    const { checked, value } = event.target;

    if (checked) {
      setSubCategories([]);
      setSubCategories(prevCat => [...prevCat, value]);
      setSubCatId(catgId);
    } else {
      const filteredCats = categories.filter(cat => cat !== value);
      setCategories(filteredCats);
      setSubCatId("");
    }
  };

  // onChange event handler for image to show above the input:file field
  const handleOnChangeImageField = event => {
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
    setArchiveForm(prevState => ({ ...prevState, image: imagesUrl }));
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

  /**
   * language and category field of archive form will fill when
   * the initial page load or reload.
   */
  useEffect(() => {
    setArchiveForm(prevForm => ({
      ...prevForm,
      language: languages,
      category: categories,
      subcategory: subCategories,
    }));
  }, [languages, categories, subCategories]);

  // Fetch a single archive according to id from database
  useEffect(() => {
    const fetchArchive = async () => {
      try {
        const response = await fetch(
          `/api/archive/singleArchive?archiveId=${param.id}`
        );
        const data = response.ok && (await response.json());
        setArchiveForm(data);
        // language will show inside the language button
        setLanguages(data.language);

        // category will show inside the category button
        setCategories(prevCat => [...prevCat, data?.category?.name]);
        setCatId(data?.category?._id);

        // subCategory will show inside the category button
        setSubCategories(prevCat => [...prevCat, data?.subcategory?.name]);
        setSubCatId(data?.subcategory?._id);
        // router.refresh();
      } catch (error) {
        toastError(error.message);
      }
    };
    fetchArchive();
  }, [param.id, router, setArchiveForm]);

  // Fetch all categories from database
  useEffect(() => {
    const fetchAllCategories = async () => {
      const response = await fetch("/api/categories");
      const data = response.ok && (await response.json());

      setCategoryData(data.categories);
    };

    fetchAllCategories();
  }, [setCategories]);

  // Fetch all subcategories from database according to category _id
  useEffect(() => {
    const fetchAllSubCategories = async () => {
      const response = await fetch(
        `/api/subcategories/selective?categoryId=${catId}`
      );
      const data = response?.ok && (await response?.json());
      console.log(data);
      setSubCategoryData(data);
    };

    fetchAllSubCategories();
  }, [setSubCategoryData, catId]);

  return (
    <div className="mt-24 flex flex-col items-center justify-center">
      <div className="mb-4 flex w-full items-center justify-between sm:w-3/4 md:w-2/4 xl:w-2/6">
        <h2 className="text-lg font-bold text-gray-300 md:text-2xl">
          Edit a Archive
        </h2>
        <Link
          href="/admin/archive/view"
          aria-label="The page navigates to view arhive page"
        >
          <button
            type="button"
            className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-500 hover:bg-cyan-400 hover:text-gray-200"
            aria-label="The page navigates to view arhive page"
          >
            View Archives
          </button>
        </Link>
      </div>
      <form
        encType="multipart/form-data"
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
            defaultValue={archiveForm?.title}
            placeholder="Full Title"
            className="w-full rounded-md bg-slate-500 p-2 text-sm text-gray-300"
          />
          {archiveForm?.title !== "" && archiveForm?.title?.length < 6 ? (
            <span className="mt-2 block text-right text-xs tracking-wide text-gray-300">
              Enter atleast 6 characters
            </span>
          ) : (
            ""
          )}
        </div>

        {/* Archive image */}
        <div className="mt-3">
          <label
            htmlFor="image"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Image<span className="text-red-400">*</span>
          </label>
          {imgUrl[0] || archiveForm?.image ? (
            <div className="my-2">
              <Image
                loading="lazy"
                src={imgUrl[0] || archiveForm?.image}
                width={40}
                height={40}
                alt={imgUrl[0] || archiveForm?.image}
                className="rounded"
              />
            </div>
          ) : (
            ""
          )}

          <ArchiveImage
            changeHandler={handleOnChangeImageField}
            focusHandler={handleInputFocus}
            projectForm={archiveForm}
            name="image"
            fieldText={archiveForm?.image}
          />
        </div>

        {/* Categories */}
        <div className="relative mt-3 z-40">
          <label
            htmlFor="category"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Category<span className="text-red-400">*</span>
          </label>
          <button
            type="button"
            name="category"
            id="category"
            onClick={event => handleShowCategoryCheckbox(event)}
            className="lang-btn relative w-full rounded-md bg-slate-500 p-2 text-left text-sm text-gray-300"
            aria-label="select button for category selection"
          >
            {categories.length > 0 ? (
              <span
                key={catId}
                className="mr-2 rounded-full bg-slate-600 px-2 py-1 text-xs"
              >
                {categories[0]}
              </span>
            ) : (
              <span>Select a category</span>
            )}

            <BsArrowDownCircleFill
              className={`absolute right-2 top-2 transition-all duration-500 ${
                categoryCheckbox ? "-rotate-180" : "rotate-0"
              } text-lg`}
            />
          </button>
          {/* Checkbox categories dropdown */}
          <div
            className={`mt-1 transition-all duration-500 ${
              categoryCheckbox ? "block" : "hidden"
            } top-18 absolute left-0 rounded-md bg-slate-600 p-3`}
          >
            {categoryData?.length > 0 &&
              categoryData?.map(category => (
                <label
                  key={category._id}
                  className="form-label"
                  htmlFor={category._id}
                >
                  <span className="ml-5">{category.name}</span>
                  <input
                    type="checkbox"
                    key={category._id}
                    value={category.name}
                    className="form-input"
                    id={category._id}
                    name="category"
                    onClick={event =>
                      handleCategoryCheckbox(event, category._id)
                    }
                    checked={categories?.includes(category.name)}
                  />
                  <span className="checkmark" />
                </label>
              ))}
          </div>
        </div>

        {/* Subcategories */}
        <div className="relative mt-3">
          <label
            htmlFor="subcategory"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Sub Category<span className="text-red-400">*</span>
          </label>
          <button
            type="button"
            id="subcategory"
            onClick={event => handleShowSubCategoryCheckbox(event)}
            className="lang-btn relative w-full rounded-md bg-slate-500 p-2 text-left text-sm text-gray-300"
            aria-label="Button for subcategory selection"
          >
            {subCategories.length > 0 ? (
              <span
                key={subCatId}
                className="mr-2 rounded-full bg-slate-600 px-2 py-1 text-xs"
              >
                {subCategories[0]}
              </span>
            ) : (
              <span>Select a subcategory</span>
            )}

            <BsArrowDownCircleFill
              className={`absolute right-2 top-2 transition-all duration-500 ${
                subCategoryCheckbox ? "-rotate-180" : "rotate-0"
              } text-lg`}
            />
          </button>
          {/* Checkbox subcategories dropdown */}
          <div
            className={`mt-1 transition-all duration-500 ${
              subCategoryCheckbox ? "block" : "hidden"
            } top-18 absolute left-0 rounded-md bg-slate-600 p-3`}
          >
            {subCategoryData?.length > 0 &&
              subCategoryData?.map(subCategory => (
                <label
                  key={subCategory._id}
                  className="form-label"
                  htmlFor={subCategory._id}
                >
                  <span className="ml-5">{subCategory.name}</span>
                  <input
                    type="checkbox"
                    key={subCategory._id}
                    value={subCategory.name}
                    className="form-input"
                    id={subCategory._id}
                    name="subcategory"
                    onClick={event =>
                      handleSubCategoryCheckbox(event, subCategory._id)
                    }
                    checked={subCategories?.includes(subCategory.name)}
                  />
                  <span className="checkmark" />
                </label>
              ))}
          </div>
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
            defaultValue={archiveForm?.anchor}
            className="w-full rounded-md bg-slate-500 p-2 text-sm text-gray-300"
          />
          {archiveForm?.anchor !== "" && (
            <span className="mt-2 block text-right text-xs tracking-wide text-gray-300">
              {archiveForm?.anchor?.length < 6
                ? "Enter at least 6 characters"
                : archiveForm?.anchor?.length > 150
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
            defaultValue={archiveForm?.github}
            className="w-full rounded-md bg-slate-500 p-2 text-sm text-gray-300"
          />
          {archiveForm?.github !== "" && (
            <span className="mt-2 block text-right text-xs tracking-wide text-gray-300">
              {archiveForm?.github?.length < 6
                ? "Enter at least 6 characters"
                : archiveForm?.github?.length > 150
                  ? "Do not exceed 150 characters"
                  : ""}
            </span>
          )}
        </div>

        {/* Languages */}
        <div className="relative mt-3">
          <label
            htmlFor="language"
            className="mb-1 block text-sm font-semibold text-gray-300"
          >
            Languages<span className="text-red-400">*</span>
          </label>
          <button
            type="button"
            id="language"
            onClick={event => handleShowCheckbox(event)}
            className="lang-btn relative w-full rounded-md bg-slate-500 p-2 text-left text-sm text-gray-300"
            aria-label="Select button for language selection"
          >
            {languages?.length > 0 ? (
              languages.map(lang => (
                <span
                  key={lang}
                  className="mr-2 rounded-full bg-slate-600 px-2 py-1 text-xs"
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
            } top-18 absolute left-0 rounded-md bg-slate-600 p-3`}
          >
            {languageData.map(item => (
              <label key={item} className="form-label" htmlFor={item}>
                <span className="ml-5">{item}</span>
                <input
                  type="checkbox"
                  key={item}
                  value={item}
                  className="form-input"
                  id={item}
                  name="language"
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
            defaultValue={archiveForm?.description}
            placeholder="Description Address"
            className="w-full rounded-md bg-slate-500 p-2 text-sm text-gray-300"
          />
          {archiveForm?.description !== "" && (
            <span className="mt-2 block text-right text-xs tracking-wide text-gray-300">
              {archiveForm?.description?.length < 6
                ? "Enter at least 6 characters"
                : archiveForm?.description?.length > 150
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
            aria-label="Update project button"
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

export default EditArchive;
