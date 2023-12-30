import React from "react";

const InputArchive = props => {
  const {
    changeHandler,
    focusHandler,
    projectForm,
    name,
    placeholder,
    fieldText,
  } = props;
  return (
    <>
      <input
        onChange={changeHandler}
        onBlur={focusHandler}
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        className="w-full rounded-md bg-slate-500 p-2 text-sm text-gray-300"
      />
      {fieldText !== "" && (
        <span className="mt-2 block text-right text-xs tracking-wide text-gray-300">
          {fieldText?.length < 2
            ? "Enter at least 2 characters"
            : projectForm?.name?.length > 150
              ? "Do not exceed 150 characters"
              : ""}
        </span>
      )}
    </>
  );
};

export default InputArchive;
