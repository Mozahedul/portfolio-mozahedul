import React, { useEffect, useState } from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";
import categoriesData from "@/utils/category/data";

const Category = ({ setProjectForm, setCategories, categories }) => {
  const [categoryCheckbox, setCategoryCheckbox] = useState(false);

  /**
   * When a checkbox is clicked on a category list item from dropdown list
   * it will display the category list inside the button
   */
  const handleCheckboxCategory = event => {
    const { checked } = event.target;
    const { value } = event.target;
    if (checked) {
      setCategories(prevCat => [...prevCat, value]);
    } else {
      const filteredCategories = categories.filter(cat => cat !== value);
      setCategories(filteredCategories);
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
      category: categories,
    }));
  }, [categories, setProjectForm]);

  return (
    <>
      <button
        type="button"
        onClick={event => handleShowCategoryCheckbox(event)}
        className="lang-btn relative w-full rounded-md bg-slate-500 p-2 text-left text-sm text-gray-300"
      >
        {categories?.length > 0 ? (
          categories.map(lang => (
            <span
              key={lang}
              className="mr-2 rounded-full bg-slate-400 px-2 py-1 text-xs"
            >
              {lang}
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
      {/* Hidden menu that will select when clicked on any menu */}
      <div
        className={`mt-1 transition-all duration-500 ${
          categoryCheckbox ? "block" : "hidden"
        } top-18 absolute left-0 rounded-md bg-slate-600 p-3`}
      >
        {categoriesData.length > 0 &&
          categoriesData?.map(item => (
            <label key={item} className="form-label">
              <span className="ml-5">{item}</span>
              <input
                type="checkbox"
                value={item}
                className="form-input"
                onClick={handleCheckboxCategory}
                checked={categories.includes(item)}
              />
              <span className="checkmark" />
            </label>
          ))}
      </div>
    </>
  );
};

export default Category;
