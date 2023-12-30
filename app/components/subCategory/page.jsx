"use client";

import React, { useEffect, useState } from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";

const SubCategory = ({
  setProjectForm,
  setSubCategories,
  subCategories,
  categorysearch,
  setSubCatId,
}) => {
  const [subCategoryCheckbox, setSubCategoryCheckbox] = useState(false);
  const [allSubCategory, setAllSubCategory] = useState([]);

  console.log(allSubCategory);

  console.log(categorysearch);

  /**
   * When a checkbox is clicked on a category list item from dropdown list
   * it will display the subcategory list inside the button
   */
  const handleCheckboxSubCategory = (event, subcatName) => {
    const { checked } = event.target;
    const { value } = event.target;
    if (checked) {
      setSubCategories([]);
      // send subcategory id to save to the database
      setSubCatId(value);
      setSubCategories(prevCat => [...prevCat, subcatName]);
    } else {
      const filteredCategories = subCategories.filter(cat => cat !== value);
      setSubCategories(filteredCategories);
    }
  };

  /**
   * This function is used to handle the dropdown arrow
   * up and down according to the current state of the dropdown
   */
  const handleShowSubCategoryCheckbox = event => {
    event.preventDefault();
    setSubCategoryCheckbox(prevCheck => !prevCheck);
  };

  // With this useEffect, the categories array is inserted to projectForm state
  useEffect(() => {
    setProjectForm(prevForm => ({
      ...prevForm,
      subcategory: subCategories,
    }));
  }, [subCategories, setProjectForm]);

  // Fetch selective subcategories from the database
  useEffect(() => {
    const fetchSelectiveSubCategories = async () => {
      try {
        if (categorysearch?.length > 0) {
          const response = await fetch(
            `/api/selectivesubcat?categorysearch=${categorysearch}`
          );
          const data = response.ok && (await response.json());
          setAllSubCategory(data.subcats);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchSelectiveSubCategories();
  }, [categorysearch, setAllSubCategory]);

  return (
    <>
      <button
        type="button"
        onClick={event => handleShowSubCategoryCheckbox(event)}
        className="lang-btn relative w-full rounded-md bg-slate-500 p-2 text-left text-sm text-gray-300"
      >
        {subCategories?.length > 0 ? (
          subCategories.map(subcat => (
            <span
              key={subcat}
              className="mr-2 rounded-full bg-slate-600 px-2 py-1 text-xs"
            >
              {subcat}
            </span>
          ))
        ) : (
          <span>Select SubCategory</span>
        )}

        <BsArrowDownCircleFill
          className={`absolute right-2 top-2 transition-all duration-500 ${
            subCategoryCheckbox ? "-rotate-180" : "rotate-0"
          } text-lg`}
        />
      </button>
      {/* Hidden menu that will select when clicked on any menu */}
      <div
        className={`mt-1 transition-all duration-500 ${
          subCategoryCheckbox ? "block" : "hidden"
        } top-18 absolute left-0 rounded-md bg-slate-600 p-3 z-50`}
      >
        {allSubCategory?.length > 0 &&
          allSubCategory?.map(subcat => (
            <label key={subcat._id} className="form-label">
              <span className="ml-5">{subcat.name}</span>
              <input
                type="checkbox"
                value={subcat._id}
                className="form-input"
                name="subcategory"
                onChange={event =>
                  handleCheckboxSubCategory(event, subcat.name)
                }
                checked={subCategories.includes(subcat.name)}
              />
              <span className="checkmark" />
            </label>
          ))}
      </div>
    </>
  );
};

export default SubCategory;
