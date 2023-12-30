"use client";

import React, { useEffect, useState } from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";
import languageData from "@/utils/language/data";

const Language = ({ setProjectForm, setLanguages, languages }) => {
  const [checkbox, setCheckbox] = useState(false);

  /**
   * This function is used to handle the dropdown arrow
   * up and down according to the current state of the dropdown
   */
  const handleShowCheckbox = event => {
    event.preventDefault();
    setCheckbox(prevCheck => !prevCheck);
  };

  /**
   * When a checkbox is clicked on a language list item from dropdown list
   * it will display the language list inside the button
   */
  const handleCheckboxToShow = event => {
    const { checked } = event.target;
    const { value } = event.target;
    if (checked) {
      setLanguages(prevLang => [...prevLang, value]);
    } else {
      const filteredLanguages = languages.filter(lang => lang !== value);
      setLanguages(filteredLanguages);
    }
  };

  // With this useEffect, the language array is inserted to projectForm state
  useEffect(() => {
    setProjectForm(prevForm => ({
      ...prevForm,
      language: languages,
    }));
  }, [languages, setProjectForm]);

  return (
    <>
      <button
        type="button"
        onClick={event => handleShowCheckbox(event)}
        className="lang-btn relative w-full rounded-md bg-slate-500 p-2 text-left text-sm text-gray-300"
      >
        {/* this section will show the languages menu when the menu is selected from dropdown */}
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
      {/* Languages dropdown menu */}
      <div
        className={`mt-1 transition-all duration-500 ${
          checkbox ? "block" : "hidden"
        } top-18 absolute left-0 rounded-md bg-slate-600 p-3`}
      >
        {languageData.length > 0 &&
          languageData?.map(item => (
            <label key={item} className="form-label">
              <span className="ml-5">{item}</span>
              <input
                type="checkbox"
                value={item}
                className="form-input"
                name="language"
                onChange={handleCheckboxToShow}
                checked={languages.includes(item)}
              />
              <span className="checkmark" />
            </label>
          ))}
      </div>
    </>
  );
};

export default Language;
