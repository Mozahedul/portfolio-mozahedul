"use client";

import React, { useEffect, useState } from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";

const Category = ({
  setProjectForm,
  setShowCategories,
  showCategories,
  setCategory,
  setSubCategories,
}) => {
  const [categoryCheckbox, setCategoryCheckbox] = useState(false);
  const [allCategory, setAllCategory] = useState([]);

  console.log(allCategory);

  /**
   * When a checkbox is clicked on a category list item from dropdown list
   * it will display the category list inside the button
   */
  const handleCheckboxCategory = (event, catName) => {
    const { checked } = event.target;
    // event.target.value contains the category id
    const { value } = event.target;
    if (checked) {
      setShowCategories([]);
      // send a single category id to the local state
      setCategory(value);
      setShowCategories(prevCat => [...prevCat, catName]);
      setSubCategories([]);
    } else {
      const filteredCategories = showCategories.filter(cat => cat !== value);
      setShowCategories(filteredCategories);
    }
  };

  /**
   * This function is used to handle the dropdown arrow
   * up and down according to the current state of the dropdown
   */
  const handleShowCategoryCheckbox = event => {
    event.preventDefault();
    setCategoryCheckbox(prevCheck => !prevCheck);
  };

  // With this useEffect, the categories array is inserted to projectForm state
  useEffect(() => {
    setProjectForm(prevForm => ({
      ...prevForm,
      category: showCategories,
    }));
  }, [showCategories, setProjectForm]);

  // Fetch categories from database
  useEffect(() => {
    const fetchCategoriesFromDB = async () => {
      const response = await fetch("/api/categories");
      const data = response.ok && (await response.json());
      setAllCategory(data.categories);
    };

    fetchCategoriesFromDB();
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={event => handleShowCategoryCheckbox(event)}
        className="lang-btn relative w-full rounded-md bg-slate-500 p-2 text-left text-sm text-gray-300"
      >
        {showCategories?.length > 0 ? (
          showCategories.map(cat => (
            <span
              key={cat}
              className="mr-2 rounded-full bg-slate-600 px-2 py-1 text-xs"
            >
              {cat}
            </span>
          ))
        ) : (
          <span>Select Category</span>
        )}

        <BsArrowDownCircleFill
          className={`absolute right-2 top-2 transition-all duration-500 ${
            categoryCheckbox ? "-rotate-180" : "rotate-0"
          } text-lg`}
        />
      </button>
      {/* Hidden dropdown menu that will select when clicked on any menu */}
      <div
        className={`mt-1 transition-all duration-500 ${
          categoryCheckbox ? "block" : "hidden"
        } top-18 absolute left-0 rounded-md bg-slate-600 p-3 z-40`}
      >
        {allCategory.length > 0 &&
          allCategory?.map(category => (
            <label key={category._id} className="form-label">
              <span className="ml-5">{category.name}</span>
              <input
                type="checkbox"
                value={category._id}
                className="form-input"
                name="category"
                onChange={event => handleCheckboxCategory(event, category.name)}
                checked={showCategories.includes(category.name)}
              />
              <span className="checkmark" />
            </label>
          ))}
      </div>
    </>
  );
};

export default Category;
